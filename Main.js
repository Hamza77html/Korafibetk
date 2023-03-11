let btnyes = document.getElementsByClassName ('yes')
let btntod = document.getElementsByClassName ('tod')
let btntom = document.getElementsByClassName ('tom')
let btnnow = document.getElementsByClassName ('now')
let match = document.querySelector('.match')

btnyes.onclick =function(){
    match.classList.add('hide')
    this.classList.add('hide')
}
