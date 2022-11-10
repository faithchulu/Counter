let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let output = document.getElementById('score');
let score = 0;
let confirmDlgBx = document.getElementById('confirmationDialogBox');
let yes = document.getElementById('yes');
let no = document.getElementById('no');


plus.addEventListener('click', () => {
    confirmationDialogBox.style.display = 'flex';
});

yes.addEventListener('click', () => {
    score++;
    output.innerHTML=score;
     if(score>=1){
         output.style.color='green';
    } else if(score==0){
        output.style.color='white';
    }
    confirmationDialogBox.style.display = 'none';
}); 

no.addEventListener('click', () => {
    confirmationDialogBox.style.display = 'none';
});

reset.addEventListener('click', () => {
    score=0;
    output.innerHTML=score;
    output.style.color='white';
});

minus.addEventListener('click', () => {
    score--;
    output.innerHTML=score;
    if(score<1){
        output.style.color='red';
    } else if(score==0){
        output.style.color='white';
    }
});