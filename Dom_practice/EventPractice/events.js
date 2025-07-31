const getbody = document.querySelector('#div')
const button=document.createElement('button');
button.innerText = 'click me';
getbody.appendChild(button);

button.addEventListener('click', ()=>{
   alert('hello')
});