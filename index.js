var item1=document.getElementsByClassName('caraousel-item');
var dots=document.getElementsByClassName('dot');
var dot=document.querySelector('.dots');
const arrayOfDots=Array.from(dot.children);
console.log(arrayOfDots);
console.log(dots);
window.onload=()=>{
    document.getElementById('preloader').style.display='none';
    document.querySelector('.main-container').style.display='flex';
    var counter=0;
    setInterval(function(){
        for(let i=0;i<item1.length;i++)
        {
            item1[i].style.display="none";
            dots[i].classList.remove('active');
        }
        item1[counter].style.display="flex";
        dots[counter].classList.add('active');
        counter++;
        if(counter>2)
        {
            counter=0;
        }
    },5000)
}
const incrementSlide=()=>{
    var currentSlide;
    var currentDot;
    var index;
    for(let i=0;i<item1.length;i++)
    {
        if(item1[i].style.display==="flex")
        {
            currentSlide=item1[i];
            index=i;
        }
    }
    for(let i=0;i<dots.length;i++)
    {
        if(dots[i].classList.contains('active'))
        {
            currentDot=dots[i];

            index=i;
        }
       
    } 
    if(index===2)
    {
        const nextDot=dots[0];
       const nextSlide=item1[0];
    currentSlide.style.display="none";
    nextSlide.style.display="flex";
    currentDot.classList.remove('active');
    nextDot.classList.add('active');
    }
    else{
        const nextDot=currentDot.nextElementSibling;
        console.log(nextDot);
        const nextSlide=currentSlide.nextElementSibling;
        currentSlide.style.display="none";
        nextSlide.style.display="flex";
        currentDot.classList.remove('active');
        nextDot.classList.add('active');
    }
    
}
const decrementSlide=()=>{
    var currentSlide;
    var currentDot;
    var index;
    for(let i=0;i<item1.length;i++)
    {
        if(item1[i].style.display==="flex")
        {
            currentSlide=item1[i];
            index=i;
        }
    }
    for(let i=0;i<dots.length;i++)
    {
        if(dots[i].classList.contains('active'))
        {
            currentDot=dots[i];
            index=i;
        }
       
    } 
  
    if(index===0)
    {
       const nextDot=dots[2];
       const nextSlide=item1[2];
    currentSlide.style.display="none";
    nextSlide.style.display="flex";
    currentDot.classList.remove('active');
    nextDot.classList.add('active');
    }
    else{
        const nextDot=currentDot.previousElementSibling;
        const nextSlide=currentSlide.previousElementSibling;
        currentSlide.style.display="none";
        nextSlide.style.display="flex";
        currentDot.classList.remove('active');
        nextDot.classList.add('active');
    }
   
}
dot.addEventListener("click",(e)=>{
    const targetDot=e.target;
    for(let i=0;i<item1.length;i++)
    {
        if(item1[i].style.display==="flex")
        {
            currentSlide=item1[i];
        }
    }
    const targetIndex=arrayOfDots.findIndex(dot=>dot===targetDot);
    const targetSlide=item1[targetIndex];
    for(let i=0;i<item1.length;i++)
    {
        item1[i].style.display="none";
    }
    targetSlide.style.display="flex";
})
    




