let boule=document.querySelector('.boule')
let score=document.querySelector('#iteraScore')
let i=0


function hidden()
{
    boule.style.display='none';
    deplacer();
}

function deplacer()
{
    boule.style.display="block"; 
    let x=Math.floor(Math.random()*550);
    let y=Math.floor(Math.random()*550);

    boule.style.top=`${y}px`
    boule.style.left=`${x}px`

}

 setInterval(hidden, 2000)
 setInterval(deplacer, 4000)


 boule.addEventListener('click',incrementScore,false)

 function incrementScore()
{
    i++
    score.textContent=i
}





