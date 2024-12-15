const increase = document.querySelector('#increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');


increase.addEventListener('click' ,()=>{
    //remember textContent return in string so convert to the number
    data = parseInt(document.querySelector('.score').textContent,10);
    data = data + 1;
    document.querySelector('.score').innerText = data;
})


decrease.addEventListener('click', ()=>{
    data = Number(document.querySelector('.score').textContent);
    data = data - 1;
    document.querySelector('.score').innerText = data;
})


reset.addEventListener('click' , ()=>{
    document.querySelector('.score').innerText = 0;
})
