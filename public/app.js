console.log('I am an alien'); //testing the website is connected 

const twdBtn = document.getElementById('twd');
const evilDeadBtn = document.getElementById('evilDead');

function themeChange() { //run both theme change functions below inside one function so user can switch back and forth between themes, before once one theme was chosen, the website would be stuck on that theme.

//changes the theme of the website to TWD
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


//changes the theme of the website to evil dead
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

}; // end of themeChange function

themeChange();

//table

    const aries = document.getElementById('aries');

    const ariesMouseEvents = () => {

        const ariesMouseOver = () => {
            aries.style.boxShadow = '5px 10px 5px #000000';
            aries.style.opacity = '75%';
        }

        const ariesMouseOut = () => {
            aries.style.boxShadow = '0px 0px 0px';
            aries.style.opacity = '100';
        }

        aries.addEventListener('mouseover', ariesMouseOver);
        aries.addEventListener('mouseout', ariesMouseOut);

        }

 ariesMouseEvents();

    const taurus = document.getElementById('taurus');

    const taurusMouseEvents = () => {

        const taurusMouseOver = () => {
            taurus.style.boxShadow = '5px 10px 5px #000000';
            taurus.style.opacity = '75%';
        }

        const taurusMouseOut = () => {
            taurus.style.boxShadow = '0px 0px 0px';
            taurus.style.opacity = '100';
        }

        taurus.addEventListener('mouseover', taurusMouseOver);
        taurus.addEventListener('mouseout', taurusMouseOut);

        }

taurusMouseEvents();

    const gemini = document.getElementById('gemini');

    const geminiMouseEvents = () => {

        const geminiMouseOver = () => {
            gemini.style.boxShadow = '5px 10px 5px #000000';
            gemini.style.opacity = '75%';
        }

        const geminiMouseOut = () => {
            gemini.style.boxShadow = '0px 0px 0px';
            gemini.style.opacity = '100';
        }

        gemini.addEventListener('mouseover', geminiMouseOver);
        gemini.addEventListener('mouseout', geminiMouseOut);

        }

geminiMouseEvents();

const cancer = document.getElementById('cancer');

    const cancerMouseEvents = () => {

        const cancerMouseOver = () => {
            cancer.style.boxShadow = '5px 10px 5px #000000';
            cancer.style.opacity = '75%';
        }

        const cancerMouseOut = () => {
            cancer.style.boxShadow = '0px 0px 0px';
            cancer.style.opacity = '100';
        }

        cancer.addEventListener('mouseover', cancerMouseOver);
        cancer.addEventListener('mouseout', cancerMouseOut);

        }

cancerMouseEvents();

const leo = document.getElementById('leo');

        const leoMouseEvents = () => {

            const leoMouseOver = () => {
                leo.style.boxShadow = '5px 10px 5px #000000';
                leo.style.opacity = '75%';
            }

            const leoMouseOut = () => {
                leo.style.boxShadow = '0px 0px 0px';
                leo.style.opacity = '100';
            }

            leo.addEventListener('mouseover', leoMouseOver);
            leo.addEventListener('mouseout', leoMouseOut);

            }

leoMouseEvents();

const virgo = document.getElementById('virgo');

        const virgoMouseEvents = () => {

            const virgoMouseOver = () => {
                virgo.style.boxShadow = '5px 10px 5px #000000';
                virgo.style.opacity = '75%';
            }

            const virgoMouseOut = () => {
                virgo.style.boxShadow = '0px 0px 0px';
                virgo.style.opacity = '100';
            }

            virgo.addEventListener('mouseover', virgoMouseOver);
            virgo.addEventListener('mouseout', virgoMouseOut);

            }

virgoMouseEvents();

const libra = document.getElementById('libra');

        const libraMouseEvents = () => {

            const libraMouseOver = () => {
                libra.style.boxShadow = '5px 10px 5px #000000';
                libra.style.opacity = '75%';
            }

            const libraMouseOut = () => {
                libra.style.boxShadow = '0px 0px 0px';
                libra.style.opacity = '100';
            }

            libra.addEventListener('mouseover', libraMouseOver);
            libra.addEventListener('mouseout', libraMouseOut);

            }
            
libraMouseEvents();

            const scorpius = document.getElementById('scorpius');

            const scorpiusMouseEvents = () => {
    
                const scorpiusMouseOver = () => {
                    scorpius.style.boxShadow = '5px 10px 5px #000000';
                    scorpius.style.opacity = '75%';
                }
    
                const scorpiusMouseOut = () => {
                    scorpius.style.boxShadow = '0px 0px 0px';
                    scorpius.style.opacity = '100';
                }
    
                scorpius.addEventListener('mouseover', scorpiusMouseOver);
                scorpius.addEventListener('mouseout', scorpiusMouseOut);
    
                }
                
scorpiusMouseEvents();

        const sagittarius = document.getElementById('sagittarius');

        const sagittariusMouseEvents = () => {

            const sagittariusMouseOver = () => {
                sagittarius.style.boxShadow = '5px 10px 5px #000000';
                sagittarius.style.opacity = '75%';
            }

            const sagittariusMouseOut = () => {
                sagittarius.style.boxShadow = '0px 0px 0px';
                sagittarius.style.opacity = '100';
            }

            sagittarius.addEventListener('mouseover', sagittariusMouseOver);
            sagittarius.addEventListener('mouseout', sagittariusMouseOut);

            }
    
sagittariusMouseEvents();

const capricornus = document.getElementById('capricornus');

const capricornusMouseEvents = () => {

    const capricornusMouseOver = () => {
        capricornus.style.boxShadow = '5px 10px 5px #000000';
        capricornus.style.opacity = '75%';
    }

    const capricornusMouseOut = () => {
        capricornus.style.boxShadow = '0px 0px 0px';
        capricornus.style.opacity = '100';
    }

    capricornus.addEventListener('mouseover', capricornusMouseOver);
    capricornus.addEventListener('mouseout', capricornusMouseOut);

    }

capricornusMouseEvents();

const aquarius = document.getElementById('aquarius');

const aquariusMouseEvents = () => {

    const aquariusMouseOver = () => {
        aquarius.style.boxShadow = '5px 10px 5px #000000';
        aquarius.style.opacity = '75%';
    }

    const aquariusMouseOut = () => {
        aquarius.style.boxShadow = '0px 0px 0px';
        aquarius.style.opacity = '100';
    }

    aquarius.addEventListener('mouseover', aquariusMouseOver);
    aquarius.addEventListener('mouseout', aquariusMouseOut);

    }

aquariusMouseEvents();

const pisces = document.getElementById('pisces');

const piscesMouseEvents = () => {

    const piscesMouseOver = () => {
        pisces.style.boxShadow = '5px 10px 5px #000000';
        pisces.style.opacity = '75%';
    }

    const piscesMouseOut = () => {
        pisces.style.boxShadow = '0px 0px 0px';
        pisces.style.opacity = '100';
    }

    pisces.addEventListener('mouseover', piscesMouseOver);
    pisces.addEventListener('mouseout', piscesMouseOut);

    }

piscesMouseEvents();
    

