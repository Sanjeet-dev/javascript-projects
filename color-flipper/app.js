const colors = ["green", "red", "rgba(133,122,200)", "#f15025","orange","blue","yellow","whitesmoke","grey","darkblue","pink"];


const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    let number = chooseRandomNumber();
    document.body.style.backgroundColor=colors[number];
});

function chooseRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}


