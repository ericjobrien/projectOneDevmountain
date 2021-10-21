console.log('I am an alien'); //testing the website is connected 

//theme buttons
const twdBtn = document.getElementById('twd');
const evilDeadBtn = document.getElementById('evilDead');

// horroscope elements
const aries = document.getElementById('aries');
const taurus = document.getElementById('taurus');
const gemini = document.getElementById('gemini');
const cancer = document.getElementById('cancer');
const leo = document.getElementById('leo');
const virgo = document.getElementById('virgo');
const libra = document.getElementById('libra');
const scorpius = document.getElementById('scorpius');
const sagittarius = document.getElementById('sagittarius');
const capricornus = document.getElementById('capricornus');
const aquarius = document.getElementById('aquarius');
const pisces = document.getElementById('pisces');

//run both theme change functions below inside one function so user can switch back and forth between themes, before once one theme was chosen, the website would be stuck on that theme.
function themeChange() { 

//changes the theme of the website to TWD
const twdTheme = () => {
    
    const header = document.querySelector('header');
    const movieThemeEl = document.getElementById('movie_logo');
    const logoEl = document.getElementById('logo');
    const siteNameEl = document.getElementById('siteName');
    const themeBlockEl = document.getElementById('themeBlock');
    const questionEl = document.getElementById('question');
    const questionBtnEl = document.getElementById('questionButton');
    // const bodyImageEl = document.getElementById('body_image');
    const bodyEl = document.querySelector('body');
    const questionTitleEl = document.getElementById('question_title');
    const questionFormEl = document.getElementById('questionForm');
    
    //page
    questionTitleEl.style.color = 'red';
    // questionFormEl.style.background = 'transparent';
    // bodyImageEl.style.backgroundImage = "url('https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https%3A%2F%2Fundeadwalking.com%2Ffiles%2Fimage-exchange%2F2020%2F09%2Fie_42650.jpeg')";
    bodyEl.style.backgroundColor = '#80C260';
    questionEl.style.backgroundImage = "url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F10%2Famc_twd_gallery__zombies_upshot_1745gn_v1-2000.jpg')";
    logoEl.style.backgroundImage = "url('https://images.8tracks.com/cover/i/009/228/937/Walking-Dead-Season-2-9108.jpg?rect=216,0,996,996&q=98&fm=jpg&fit=max')";
    header.style.background = 'transparent';
    header.style.borderRadius = '15px';
    themeBlockEl.style.background = 'rgba(0,0,0,0.5)';
    movieThemeEl.style.backgroundImage = "url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/20/09/walking-dead-cast-kneel_1.jpg?width=1200')";
    movieThemeEl.style.backgroundPosition = 'center';
    logoEl.style.boxShadow = '3px 8px 2px #000000';
    siteNameEl.style.color = 'black';
    siteNameEl.style.textShadow = '0px 4px 4px #B60000';
    questionEl.style.mixBlendMode = 'darken';
    questionEl.style.boxShadow = '3px 8px 4px #000000';
    questionBtnEl.style.background = '#B60000';
    questionBtnEl.style.boxShadow = '3px 8px 4px #000000';
    questionFormEl.style.background = '#B60000';
    questionFormEl.style.boxShadow = '3px 8px 4px #000000';

    //horroscope
    aries.style.backgroundImage = "url('https://thesupernaturalfoxsisters.files.wordpress.com/2015/03/pix-daryl-dixon-motorcycle-2-the-walking-dead-spend1.jpeg')";
    taurus.style.backgroundImage = "url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F02%2F27%2Ftwd.jpg')";
    gemini.style.backgroundImage = "url('https://www.giantfreakinrobot.com/wp-content/uploads/2020/11/negan-walking-dead-trailer-season-7-edited-e1629840527211-900x505.jpg')";
    cancer.style.backgroundImage = "url('https://i.insider.com/5e8054af1378e33c770cec84')";
    leo.style.backgroundImage = "url('https://www.denofgeek.com/wp-content/uploads/2018/11/the-walking-dead-rick-grimes.jpg?fit=1920%2C1080')";
    virgo.style.backgroundImage = "url('https://assets.skybound.com/wp-content/uploads/2020/09/16093359/TWD_1016_JLD_1119_0077_RT.jpg')";
    libra.style.backgroundImage = "url('https://www.gannett-cdn.com/-mm-/e588f52b0401516f5842ee3e7401e428c97a9126/c=0-210-4096-2524/local/-/media/2017/02/11/USATODAY/USATODAY/636223760621794130-Walking-Dead-Payton-Shiva.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp')";
    scorpius.style.backgroundImage = "url('https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fundeadwalking.com%2Ffiles%2F2017%2F05%2Fthe-walking-dead-shane-mossberg-5901.jpg')";
    sagittarius.style.backgroundImage = "url('https://i2.wp.com/geekvibesnation.com/wp-content/uploads/2021/04/Abraham-Death-in-The-Walking-Dead.png?fit=800%2C400&ssl=1')";
    capricornus.style.backgroundImage = "url('http://images.amcnetworks.com/amc.com/wp-content/uploads/2020/03/the-walking-dead-episode-1013-michonne-gurira-1200-opening.jpg')";
    aquarius.style.backgroundImage = "url('https://i.insider.com/5dc86c2179d75702b9186023?width=1200&format=jpeg')";
    pisces.style.backgroundImage = "url('https://www.ajc.com/resizer/72ix_shXvpKZQLyKhFXmRWDD2X8=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/B4C5R7INPH5IKI57R3GBE3CYAQ.jpg')";

}


//changes the theme of the website to evil dead
const evilDeadTheme = () => {
    const header = document.querySelector('header');
    const movieThemeEl = document.getElementById('movie_logo');
    const logoEl = document.getElementById('logo');
    const siteNameEl = document.getElementById('siteName');
    const themeBlockEl = document.getElementById('themeBlock');
    const questionEl = document.getElementById('question');
    const questionBtnEl = document.getElementById('questionButton');
    const bodyEl = document.querySelector('body');
    const questionTitleEl = document.getElementById('question_title');
    const questionFormEl = document.getElementById('questionForm');
    // loop for elements with same class - would have been useful...
    // function combinedImage() {
    // for(let i = 0; i < combinedBackground.length; i++) {
    //     combinedBackground[i].style.backgroundImage = "url('https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/08/Evil-Dead-1.jpg')";
    //    }
    // }
    // combinedImage();
    //page
    questionTitleEl.style.color = 'red';
    questionEl.style.backgroundImage = "url('http://3.bp.blogspot.com/-dnMXFOZ6GAE/U3gRw7XmwwI/AAAAAAAAKE0/vP2tJ1ujkUs/s1600/Evil-dead-review.jpg')";
    bodyEl.style.backgroundColor = 'red';
    logoEl.style.backgroundImage = "url('https://wegotthiscovered.com/wp-content/uploads/2018/03/evil_dead_01_1920x1080.jpg')";
    header.style.background = 'transparent';
    header.style.borderRadius = '15px';
    themeBlockEl.style.background = 'rgba(0,0,0,0.5)';
    movieThemeEl.style.backgroundImage = "url('https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/08/Evil-Dead-1.jpg')";
    logoEl.style.boxShadow = '3px 8px 2px #000000';
    siteNameEl.style.color = 'black';
    siteNameEl.style.textShadow = '0px 4px 4px #B60000';
    questionEl.style.mixBlendMode = 'darken';
    questionEl.style.boxShadow = '3px 8px 4px #000000';
    questionBtnEl.style.background = '#B60000';
    questionBtnEl.style.boxShadow = '3px 8px 4px #000000';
    questionFormEl.style.background = 'white';
    questionFormEl.style.boxShadow = '3px 8px 4px #000000';

    //horroscope
    aries.style.backgroundImage = "url('https://nofspodcast.com/wp-content/uploads/2018/02/army-of-darkness-bruce-campbell-ash-chainsaw-768x413.jpeg')";
    taurus.style.backgroundImage = "url('https://i0.wp.com/thekoalition.com/images/2015/10/scissor.jpg')";
    gemini.style.backgroundImage = "url('https://allthingshorror666.files.wordpress.com/2013/12/4752989_l1.jpg')";
    cancer.style.backgroundImage = "url('https://bloody-disgusting.com/wp-content/uploads/2018/04/ash-vs-evil-dead-finale.jpg')";
    leo.style.backgroundImage = "url('http://ingridrichter.info/cheese/graphics/A/army_darkness/gilbert_marcus1.jpg')";
    virgo.style.backgroundImage = "url('http://www.badmovies.org/movies/armydark/armydark4.jpg')";
    libra.style.backgroundImage = "url('https://www.denofgeek.com/wp-content/uploads/2018/03/pablo6.jpg')";
    scorpius.style.backgroundImage = "url('https://bloody-disgusting.com/wp-content/uploads/2016/09/LucyLawlessRuby3.jpg')";
    sagittarius.style.backgroundImage = "url('https://th.bing.com/th/id/R.d35cb2fef9cd8d1e1210fd579d362065?rik=PwqBeokfpAeXvw&riu=http%3a%2f%2fassets1.ignimgs.com%2f2016%2f10%2f21%2fdana-delorenzo-kelly-204jpg-f9aeea_1280w.jpg&ehk=%2f%2b2DzjR5LFqzMEgRslCUCWfiywGQyGLzBIP6T3HhEJE%3d&risl=&pid=ImgRaw&r=0')";
    capricornus.style.backgroundImage = "url('https://patricksponaugle.files.wordpress.com/2015/11/ian-armyofdarkness1.jpg')";
    aquarius.style.backgroundImage = "url('http://1.bp.blogspot.com/-kzRpSp4jo7I/VLLDq2r286I/AAAAAAAAJHc/ThkjrJlsO6w/s1600/51265-878.jpg')";
    pisces.style.backgroundImage = "url('https://tv-fanatic-res.cloudinary.com/iu/s--kpjtQFsi--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1478282733/obsessed-chet-ash-vs-evil-dead-s2e6.jpg')";
}



evilDeadBtn.addEventListener('click', evilDeadTheme);
twdBtn.addEventListener('click', twdTheme);

}; // end of themeChange function

themeChange();

//table


    const ariesMouseEvents = () => {
        let newEl = document.createElement('p');
        aries.appendChild(newEl);

        const ariesMouseOver = () => {
            aries.style.cursor = 'pointer';
            aries.style.boxShadow = '5px 10px 5px #000000';
            aries.style.opacity = '75%';
            newEl.style.visibility = 'visible';
            newEl.textContent = 'Aries: March 21–April 19';
            newEl.style.fontSize = '20px';
        }

        const ariesMouseOut = () => {
            aries.style.boxShadow = '0px 0px 0px';
            aries.style.opacity = '100';
            newEl.style.visibility = 'hidden';
        }

        aries.addEventListener('mouseover', ariesMouseOver);
        aries.addEventListener('mouseout', ariesMouseOut);

        }

 ariesMouseEvents();

    

    const taurusMouseEvents = () => {
        let newEl = document.createElement('p');
        taurus.appendChild(newEl);
        

        const taurusMouseOver = () => {
            taurus.style.cursor = 'pointer';
            taurus.style.boxShadow = '5px 10px 5px #000000';
            taurus.style.opacity = '75%';
            newEl.style.visibility = 'visible';
            newEl.textContent = 'Taurus: April 20–May 20';
            newEl.style.fontSize = '20px';
        }

        const taurusMouseOut = () => {
            taurus.style.boxShadow = '0px 0px 0px';
            taurus.style.opacity = '100';
            newEl.style.visibility = 'hidden';
        }

        taurus.addEventListener('mouseover', taurusMouseOver);
        taurus.addEventListener('mouseout', taurusMouseOut);

        }

taurusMouseEvents();

    

    const geminiMouseEvents = () => {
        let newEl = document.createElement('p');
        gemini.appendChild(newEl);

        const geminiMouseOver = () => {
            gemini.style.cursor = 'pointer';
            gemini.style.boxShadow = '5px 10px 5px #000000';
            gemini.style.opacity = '75%';
            newEl.style.visibility = 'visible';
            newEl.textContent = 'Gemini: May 21–June 21';
            newEl.style.fontSize = '20px';
        }

        const geminiMouseOut = () => {
            gemini.style.boxShadow = '0px 0px 0px';
            gemini.style.opacity = '100';
            newEl.style.visibility = 'hidden';
        }

        gemini.addEventListener('mouseover', geminiMouseOver);
        gemini.addEventListener('mouseout', geminiMouseOut);

        }

geminiMouseEvents();



    const cancerMouseEvents = () => {
        let newEl = document.createElement('p');
        cancer.appendChild(newEl);

        const cancerMouseOver = () => {
            cancer.style.cursor = 'pointer';
            cancer.style.boxShadow = '5px 10px 5px #000000';
            cancer.style.opacity = '75%';
            newEl.style.visibility = 'visible';
            newEl.textContent = 'Cancer: June 22–July 22';
            newEl.style.fontSize = '20px';
        }

        const cancerMouseOut = () => {
            cancer.style.boxShadow = '0px 0px 0px';
            cancer.style.opacity = '100';
            newEl.style.visibility = 'hidden';
        }

        cancer.addEventListener('mouseover', cancerMouseOver);
        cancer.addEventListener('mouseout', cancerMouseOut);

        }

cancerMouseEvents();



        const leoMouseEvents = () => {
            let newEl = document.createElement('p');
            leo.appendChild(newEl);

            const leoMouseOver = () => {
                leo.style.cursor = 'pointer';
                leo.style.boxShadow = '5px 10px 5px #000000';
                leo.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'Leo: July 23–August 22';
                newEl.style.fontSize = '20px';
            }

            const leoMouseOut = () => {
                leo.style.boxShadow = '0px 0px 0px';
                leo.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            leo.addEventListener('mouseover', leoMouseOver);
            leo.addEventListener('mouseout', leoMouseOut);

            }

leoMouseEvents();



        const virgoMouseEvents = () => {
            let newEl = document.createElement('p');
            virgo.appendChild(newEl);

            const virgoMouseOver = () => {
                virgo.style.cursor = 'pointer';
                virgo.style.boxShadow = '5px 10px 5px #000000';
                virgo.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'Virgo: August 23–September 22';
                newEl.style.fontSize = '20px';
            }

            const virgoMouseOut = () => {
                virgo.style.boxShadow = '0px 0px 0px';
                virgo.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            virgo.addEventListener('mouseover', virgoMouseOver);
            virgo.addEventListener('mouseout', virgoMouseOut);

            }

virgoMouseEvents();


        const libraMouseEvents = () => {
            let newEl = document.createElement('p');
            libra.appendChild(newEl);

            const libraMouseOver = () => {
                libra.style.cursor = 'pointer';
                libra.style.boxShadow = '5px 10px 5px #000000';
                libra.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'libra: September 23–October 23';
                newEl.style.fontSize = '20px';
            }

            const libraMouseOut = () => {
                libra.style.boxShadow = '0px 0px 0px';
                libra.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            libra.addEventListener('mouseover', libraMouseOver);
            libra.addEventListener('mouseout', libraMouseOut);

            }
            
libraMouseEvents();



        const scorpiusMouseEvents = () => {
            let newEl = document.createElement('p');
            scorpius.appendChild(newEl);

            const scorpiusMouseOver = () => {
                scorpius.style.cursor = 'pointer';
                scorpius.style.boxShadow = '5px 10px 5px #000000';
                scorpius.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'Scorpio: October 24–November 21';
                newEl.style.fontSize = '20px';
            }

            const scorpiusMouseOut = () => {
                scorpius.style.boxShadow = '0px 0px 0px';
                scorpius.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            scorpius.addEventListener('mouseover', scorpiusMouseOver);
            scorpius.addEventListener('mouseout', scorpiusMouseOut);

            }
            
scorpiusMouseEvents();

        

        const sagittariusMouseEvents = () => {
            let newEl = document.createElement('p');
            sagittarius.appendChild(newEl);

            const sagittariusMouseOver = () => {
                sagittarius.style.cursor = 'pointer';
                sagittarius.style.boxShadow = '5px 10px 5px #000000';
                sagittarius.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'November 22–December 21';
                newEl.style.fontSize = '20px';
            }

            const sagittariusMouseOut = () => {
                sagittarius.style.boxShadow = '0px 0px 0px';
                sagittarius.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            sagittarius.addEventListener('mouseover', sagittariusMouseOver);
            sagittarius.addEventListener('mouseout', sagittariusMouseOut);

            }
    
sagittariusMouseEvents();



        const capricornusMouseEvents = () => {
            let newEl = document.createElement('p');
            capricornus.appendChild(newEl);

            const capricornusMouseOver = () => {
                capricornus.style.cursor = 'pointer';
                capricornus.style.boxShadow = '5px 10px 5px #000000';
                capricornus.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'Capricorn: December 22–January 19';
                newEl.style.fontSize = '20px';
            }

            const capricornusMouseOut = () => {
                capricornus.style.boxShadow = '0px 0px 0px';
                capricornus.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            capricornus.addEventListener('mouseover', capricornusMouseOver);
            capricornus.addEventListener('mouseout', capricornusMouseOut);

            }

capricornusMouseEvents();



        const aquariusMouseEvents = () => {
            let newEl = document.createElement('p');
            aquarius.appendChild(newEl);

            const aquariusMouseOver = () => {
                aquarius.style.cursor = 'pointer';
                aquarius.style.boxShadow = '5px 10px 5px #000000';
                aquarius.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'Aquarius: January 20–February 18';
                newEl.style.fontSize = '20px';
            }

            const aquariusMouseOut = () => {
                aquarius.style.boxShadow = '0px 0px 0px';
                aquarius.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            aquarius.addEventListener('mouseover', aquariusMouseOver);
            aquarius.addEventListener('mouseout', aquariusMouseOut);

            }

aquariusMouseEvents();



        const piscesMouseEvents = () => {
            let newEl = document.createElement('p');
            pisces.appendChild(newEl);

            const piscesMouseOver = () => {
                pisces.style.cursor = 'pointer';
                pisces.style.boxShadow = '5px 10px 5px #000000';
                pisces.style.opacity = '75%';
                newEl.style.visibility = 'visible';
                newEl.textContent = 'Pisces: February 19–March 20';
                newEl.style.fontSize = '20px';
            }

            const piscesMouseOut = () => {
                pisces.style.boxShadow = '0px 0px 0px';
                pisces.style.opacity = '100';
                newEl.style.visibility = 'hidden';
            }

            pisces.addEventListener('mouseover', piscesMouseOver);
            pisces.addEventListener('mouseout', piscesMouseOut);

            }

piscesMouseEvents();
    

