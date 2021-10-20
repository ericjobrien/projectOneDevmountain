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
    
    const headerEl = document.querySelector('header');
    const logoEl = document.getElementById('logo');
    const siteNameEl = document.getElementById('siteName');
    const themeBlockEl = document.getElementById('themeBlock');
    const questionEl = document.getElementById('question');
    const questionBtnEl = document.getElementById('questionButton');

    //page
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
    const headerEl = document.querySelector('header');
    const logoEl = document.getElementById('logo');
    const siteNameEl = document.getElementById('siteName');
    const themeBlockEl = document.getElementById('themeBlock');
    const questionEl = document.getElementById('question');
    const questionBtnEl = document.getElementById('questionButton');

    //page
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

    //horroscope
    aries.style.backgroundImage = "url('https://nofspodcast.com/wp-content/uploads/2018/02/army-of-darkness-bruce-campbell-ash-chainsaw-768x413.jpeg')";
    taurus.style.backgroundImage = "url('https://i0.wp.com/thekoalition.com/images/2015/10/scissor.jpg')";
    gemini.style.backgroundImage = "url('https://allthingshorror666.files.wordpress.com/2013/12/4752989_l1.jpg')";
    cancer.style.backgroundImage = "url('https://bloody-disgusting.com/wp-content/uploads/2018/04/ash-vs-evil-dead-finale.jpg')";
    leo.style.backgroundImage = "url('https://www.scifimoviezone.com/imagehorror/armydarkness007.jpg')";
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
    

