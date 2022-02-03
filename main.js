// time and date
setInterval(function () {
    let data = new Date()
    // get time
    h = data.getHours()
    m = data.getMinutes()
    s = data.getSeconds()
    // get date
    month = data.getMonth() + 1
    day = data.getDay() - 1
    year = data.getFullYear()
    session = "AM"

    if (h > 12) {
        session = "PM";
        h = h - 12;
    }
        
    if (s == 0) {
        s = 60;
    }

    document.querySelector('.t').textContent = `${h}:${m} ${session}`
    document.querySelector('.d').textContent = `${month}/${day}/${year}`
    
}, 1000);



// desktop icons 

let appIcon = document.getElementsByClassName('icon-style')
// sort icons
for (let i = 0; i <= appIcon.length -1; i++) {
    for (let j = 0; j <= appIcon.length -1; j++) {
        appIcon[i].style.left = i * 2 + 'px'
        appIcon[i].style.top = i * 80 + 'px'
    }
}


// context menu

let menu = document.querySelector('.contextmenu')

function getOptions(place) {
    let menu = {
        desktop: {
            options: ['Vew', 'Refresh', 'Sort by', '</br>', 'new']
        }, 
        mycomputer: {
            options: ['open', 'copy', 'rename', 'delete']
        },
        recycle: {
            options: ['open', 'Empty recycle bin', 'copy', 'rename', 'delete']
        },
        app: {
            options: ['open', 'copy', 'cut', 'rename', 'delete']
        },

        file: {
            options: ['open', 'edit', 'copy', 'cut', 'rename', 'delete']
        }
    }

    return menu[place]['options'].join(' ').split(' ')
}

function showMenu(options, e) {

    // cansel default menu
    e.preventDefault()

    // reset
    menu.innerHTML = ''

    // show menu
    let x = e.clientX
    let y = e.clientY

    // set x, y
    menu.style.top = y + 'px'
    menu.style.left = x + 'px'
    // set data 
    for (option of options) {
        menu.innerHTML += `<div class=option>${option}</div>`
    }
    // view menu
    menu.style.display = 'block'
}

// show desktop context menu
document.querySelector('.desk-top').oncontextmenu = function (e) {
    let options = getOptions('desktop')
    showMenu(options, e)
}

// show  context menu for desktop icons
let apps = document.getElementsByClassName('app-icon')
// loop on all apps on desktop
for (let i = 0; i < apps.length; i++) {
    apps[i].oncontextmenu = function (e) {
        let appname = this.getAttribute('app-name')
        let options = getOptions(appname)
        showMenu(options, e)
        console.log(appname)
    }
}


let winStart = document.querySelector('.win-start')
let startMenu = document.querySelector('.start-menu')

winStart.onclick = function () {
    startMenu.classList.toggle('v')
}

// hide contextmenu, start menu
document.body.onclick = function () {
    menu.style.display = 'none'
}