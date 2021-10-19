console.log('I am an alien');

const twdBtn = document.getElementById('twd');
const evilDeadBtn = document.getElementById('evilDead');

function themeChange() {


const twdTheme = () => {
    
    const headerEl = document.querySelector('header');
    const logoEl = document.getElementById('logo');
    const siteNameEl = document.getElementById('siteName');
    const themeBlockEl = document.getElementById('themeBlock');
    const questionEl = document.getElementById('question');
    const questionBtnEl = document.getElementById('questionButton');

    headerEl.style.backgroundColor = 'rgba(128, 194, 96, 0.5)';
    logoEl.style.boxShadow = '3px 8px 2px #B60000';
    siteNameEl.style.textShadow = '0px 4px 4px #B60000';
    siteNameEl.style.color = 'white';
    themeBlockEl.style.backgroundColor = 'rgba(128, 194, 96, 0.5)';
    questionEl.style.background = 'rgba(128, 194, 96, 0.5)';
    questionEl.style.mixBlendMode = 'darken';
    questionEl.style.boxShadow = '3px 8px 4px #B60000';
    questionBtnEl.style.background = 'rgba(128, 194, 96, 0.5)';
    questionBtnEl.style.boxShadow = '3px 8px 4px #B60000';

}

const evilDeadTheme = () => {
    const headerEl = document.querySelector('header');
    const logoEl = document.getElementById('logo');
    const siteNameEl = document.getElementById('siteName');
    const themeBlockEl = document.getElementById('themeBlock');
    const questionEl = document.getElementById('question');
    const questionBtnEl = document.getElementById('questionButton');

    headerEl.style.backgroundColor = '#866CF0';
    logoEl.style.boxShadow = '3px 8px 2px #000000';
    siteNameEl.style.color = 'black';
    siteNameEl.style.textShadow = '0px 4px 4px #B60000';
    themeBlockEl.style.backgroundColor = '#866CF0';
    questionEl.style.background = '#B60000';
    questionEl.style.mixBlendMode = 'darken';
    questionEl.style.boxShadow = '3px 8px 4px #000000';
    questionBtnEl.style.background = '#B60000';
    questionBtnEl.style.boxShadow = '3px 8px 4px #000000';
    
}




evilDeadBtn.addEventListener('click', evilDeadTheme);
twdBtn.addEventListener('click', twdTheme);

}

themeChange();