import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import loadContact from './contact';

function clearContent() {
    document.getElementById('content').textContent = "";
}

function setBtnActive(buttonId) {
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(buttonId).classList.add('active');
}

function init() {
    loadHome();
    setBtnActive('homeBtn');

    document.getElementById('homeBtn').addEventListener('click', () => {
        clearContent();
        loadHome();
        setBtnActive('homeBtn');
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        clearContent();
        loadMenu();
        setBtnActive('menuBtn');
    });

    document.getElementById('aboutBtn').addEventListener('click', () => {
        clearContent();
        loadAbout();
        setBtnActive('aboutBtn');
    });

    document.getElementById('contactBtn').addEventListener('click', () => {
        clearContent();
        loadContact();
        setBtnActive('contactBtn');
    });
}

init();
