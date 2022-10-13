
var myButton = document.querySelector('.list'),
    myNav = document.querySelector('.menu'),
    myItem = document.querySelectorAll('.menu li');
myButton.addEventListener('click',(e)=>{
    myNav.classList.toggle('open');
    myButton.classList.toggle('active');
});
myItem.forEach(element => {
    element.addEventListener('click',(e)=>{
        myNav.classList.toggle('open');
    myButton.classList.toggle('active');
    })
});
var myMenu = document.querySelector('.menu1'),
    myStory = document.querySelector('.diner'),
    myFood = document.querySelector('.Menu'),
    myFeed = document.querySelector('.feed'),
    myTesting = document.querySelector('.img-about'),
    myok = document.querySelector('.testing');
    myTest = document.querySelector('.feedback');
window.addEventListener('scroll',(e)=>{
    if(this.pageYOffset > 100){
        myMenu.style.top='0';
        myMenu.style.transitionDuration='1s';
    }   
    else{
        myMenu.style.top='-50px';
        myMenu.style.transitionDuration='1s';
    }
})
window.addEventListener('scroll',(e)=>{
    if(this.pageYOffset > (this.innerHeight+myStory.offsetHeight)){
        myFood.style.top='0';
        myFood.style.transitionDuration='1s';
    }   
    else{
        myFood.style.top='-100px';
        myFood.style.transitionDuration='1s';
    }
})
var myName = document.querySelectorAll('.raj'),
    myImage = document.querySelector('.photo img');
window.addEventListener('scroll',(e)=>{
    if(this.pageYOffset >(myTest.offsetTop-myTest.offsetHeight)){
        myFeed.style.top='0';
        myFeed.style.transitionDuration='1s';
       for (let i = 0; i < myName.length; i++) {
        myName[i].style.transform='scale(1.1)';
        myName[i].style.transitionDuration='.5s';
        myName[i].style.transitionDelay='.5s';
       }
    }   
    else{
         for (let i = 0; i < myName.length; i++) {
            myName[i].style.transform='scale(1)';
            myName[i].style.transitionDuration='.5s';
         }
        myFeed.style.top='80px';
        myFeed.style.transitionDuration='1s';
    }
})
window.addEventListener("scroll",(e)=>{
    if (this.pageYOffset > 300) {
        myStory.style.top='0';
        myStory.style.transitionDuration='1s';
        myok.style.marginLeft='25px';
        myok.style.transitionDuration='1s';
        myTesting.style.marginRight='25px';
        myTesting.style.transitionDuration='1s';
    }
    else{
        myStory.style.top='-100px';
        myStory.style.transitionDuration='1s';
        myok.style.marginLeft='0';
        myok.style.transitionDuration='1s';
        myTesting.style.marginRight='0';
        myTesting.style.transitionDuration='1s';
    }
})
var myChoix = document.querySelectorAll('.choix a'),
    mychoise = document.querySelector('.menu-food');
myChoix.forEach(element => {
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        for (let i = 0; i < mychoise.childElementCount; i++) {
            if (i==Number(e.target.dataset.number)){
                continue
            }
            mychoise.children[i].classList.remove('none');
        }
         document.querySelector(e.target.dataset.food).classList.add('none');
    })
});
var myChef = document.querySelectorAll('.cooker img'),
    team = document.querySelector('.chefs');
myChef.forEach(element => {
    element.addEventListener('mouseenter',(e)=>{
        element.style.transform='skewY(5deg)';
    })
    element.addEventListener('mouseleave',(e)=>{
        element.style.transform='skewY(0deg)';
    })
});
window.addEventListener('scroll',(e)=>{
     if(this.pageYOffset>(team.offsetTop-450)){
         for (let i = 0; i < myChef.length; i++) {
             myChef[i].style.transform='skewY(0deg)';
             myChef[i].style.transitionDuration='1s';
         }
     }
     else{
         for (let i = 0; i < myChef.length; i++) {
             myChef[i].style.transform='skewY(35deg)';
             myChef[i].style.transitionDuration='1s'
         }
     }
})