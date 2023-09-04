let sound = new Audio("/soundeffect/click.mp3")
let menu_btn = document.getElementById('menu-btn')

function playsound () {
    sound.play()
}

menu_btn.addEventListener('click' , playsound)
