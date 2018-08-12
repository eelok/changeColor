const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#9572db', '#ef7256', '#edd46f', '#3b5998'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];

}