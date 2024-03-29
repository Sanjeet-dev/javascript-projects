const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// const color = document.querySelector('.color');
// const btn = document.getElementById('btn');

// btn.addEventListener("click", function() {
//     // console.log("working fine");
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];

// });
// function getRandomNumber(){
//     return Math.floor(Math.random()*colors.length);
// }
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let hexColor = '#';

    for(let i=0; i<6; i++){
        hexColor+=hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    copyToClipboard(color.textContent)
});

// function for coping hexcode text
function copyToClipboard(text){
    navigator.clipboard.writeText(text)
    .then(()=>{
        console.log("Text copied from clipboard");
    })
    .catch(err => {
        console.log(err);
    });
    
}

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}
