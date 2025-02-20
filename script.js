const btn=document.querySelector('.btn')
const toasts=document.getElementById('toasts')

const messages=['Message One','Message Two','Message Three','Message Four']

btn.addEventListener('click',()=>createNotification
())
const types=['success','info','error']
function createNotification(type=null){
const notif =document.createElement('div')
notif.classList.add('toast')
notif.classList.add(type?type:randomTypes())
notif.innerText=randomMsg()
toasts.appendChild(notif)
setTimeout(()=>{
notif.remove()
},3000)
}
function randomMsg(){
    return messages[Math.floor(Math.random()*messages.length)]
}
function randomTypes(){
    return types[Math.floor(Math.random()*types.length)]
}