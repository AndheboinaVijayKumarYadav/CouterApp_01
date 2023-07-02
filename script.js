const count = document.querySelector('.count');
// this the better method than bleow one
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')){
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains('substract')){
        count.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains('reset')){
        count.innerHTML = 0;
        setColor();
    }
});

function setColor(){
    if(count.innerHTML > 0){
        count.style.color = 'yellow';
    }
    else if(count.innerHTML < 0){
        count.style.color = 'red';
    }
    else {
        count.style.color ='white';
    }
}



/*  Basic method of doing the logic
const substract = document.querySelector('.substract');
const add = document.querySelector('.add');
const reset = document.querySelector('.reset');

add.addEventListener('click', () => {
    count.innerHTML++;
    if(count.innerHTML > 0){
        count.style.color = 'green';
    }

});
substract.addEventListener('click', () => {
    count.innerHTML--;
    if(count.innerHTML < 0 ){
        count.style.color = 'red';
    }
    if(count.innerHTML == 0){
        count.style.color = 'white';
    }

});
reset.addEventListener('click', () => {
    count.innerHTML = 0;
    count.style.color = 'white';

}); */
