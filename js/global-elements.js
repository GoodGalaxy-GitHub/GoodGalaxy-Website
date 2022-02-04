document.getElementById('nav').innerHTML = "<div id='navLeft'> <h1 id='navLogo'><a href='/'>GoodGalaxy</a></h1> </div> <div id='navRight'> <h1 class='nav-icons'> <spand id='nav-app' class='material-icons-outlined'>apps</span> </h1> <h1 class='nav-icons'> <a href='/contact.html'> <spand class='material-icons-outlined'>email</span> </a> </h1> </div>"
document.getElementById('app-list').innerHTML = "<h1>Our Projects</h1> <div id='app-list-items'> <a href='https://delishgg.me'> <div class='appEntry'> <img src='/assets/app-icons/delish.png'> <p>Delish's Website</p> </div> </a> <a href='https://network.goodgalaxy.net'> <div class='appEntry'> <img src='/assets/app-icons/ggn.png'> <p>GoodGalaxy Network</p> </div> </a> <a href='https://github.com/GoodGalaxy-GitHub'> <div class='appEntry'> <img src='/assets/app-icons/gg-github.png'> <p>Our GitHub</p></div>"
document.getElementById('footer').innerHTML = "<p style='margin-bottom: 0'>&copy;GoodGalaxy. All rights reserved.</p><br><p style='font-size: .5em'>Site Version: 1.3R</p>"

var appList = document.querySelector('#app-list');

document.getElementById('nav-app').addEventListener('click', () => {

    document.getElementById('app-list').classList.toggle('displayApp');
    document.getElementById('app-list').classList.toggle('hidden');
});

document.getElementById('loading').classList.add('hidden')
document.getElementById('loading-cont').classList.add('hidden')