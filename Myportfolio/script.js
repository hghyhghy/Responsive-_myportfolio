/* ----- NAVIGATION BAR FUNCTION ----- */
// import { Locomotive } from "locomotive";
// import LocomotiveScroll from 'locomotive-scroll';
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
const mypara = document.querySelector("#mypara")
gsap.to(mypara,{
  x:-20,
  scrollTrigger:{
    trigger:"mypara",
    scroll:"body",
    scrub:2
  }
})

const para = document.querySelector("#para")
gsap.to(para,{
  x:-20,
  scrollTrigger:{
    trigger:"para",
    scroll:"body",
    scrub:2
  }
})


const ht = document.querySelector("#ht")

// gsap.to(ht,{
//   y:-10,
//   duration:1,
//   ease:"power1.out",
//   scrollTrigger:{
//     trigger:"ht",
//     scroll:"body",
//     scrub:2
//   }
// })
ht.addEventListener("click", function(){
  ht.innerText="See Docs ->"
  ht.style.scale=1.1
})
ht.addEventListener("mouseleave", function(){
  ht.innerText="Learn HTML"
  ht.style.scale=1

})


const cs = document.querySelector("#cs")
// gsap.to(cs,{
//   y:-10,
//   duration:1,
//   ease:"power1.out",
//   scrollTrigger:{
//     trigger:"cs",
//     scroll:"body",
//     scrub:2
//   }
// })
cs.addEventListener("click", function(){
  cs.innerText="See Docs ->"
  cs.style.scale=1.1
})
cs.addEventListener("mouseleave", function(){
  cs.innerText="Learn CSS"
  cs.style.scale=1

})

const js1 = document.querySelector("#js1")
// gsap.to(js1,{
//   y:-10,
//   duration:1,
//   ease:"power1.out",
//   scrollTrigger:{
//     trigger:"js1",
//     scroll:"body",
//     scrub:2
//   }
// })
js1.addEventListener("click", function(){
  js1.innerText="See Docs ->"
  js1.style.scale=1.1
})
js1.addEventListener("mouseleave", function(){
  js1.innerText="Learn JS"
  js1.style.scale=1

})


const featured = document.querySelector("#Featured")
gsap.to(featured, {
  y:20,
  scrollTrigger:{
    trigger:"featured",
    scroll:"body",
    scrub:2

  }
})

var crsr = document.querySelector("#cur")
document.addEventListener("mousemove", function(dets) {
   crsr.style.top= dets.y -5 +"px"
   crsr.style.left= dets.x -5 +"px"
   crsr.style.zIndex="0"

})


// your-script.js


// const scroll = new LocomotiveScroll({
//   smooth: true,
//   smoothMobile: false,
//   });



const box1 =  document.querySelector("#box1")
const box2 =  document.querySelector("#box2")
const box3 =  document.querySelector("#box3")
const box4 =  document.querySelector("#box4")



gsap.to(box1, {
  
  y:-60,
  duration:1,
  scrollTrigger:{
    trigger:"box1",
    scroll:"body",
    scrub:2

  }

})


gsap.to(box2, {
  
  y:-60,
  duration:3,
  scrollTrigger:{
    trigger:"box2",
    scroll:"body",
    scrub:2

  }

})
gsap.to(box3, {
  
  y:60,
  duration:5,
  scrollTrigger:{
    trigger:"box3",
    scroll:"body",
    scrub:2

  }

})

gsap.to(box4, {
  
  y:60,
  duration:7,
  scrollTrigger:{
    trigger:"box4",
    scroll:"body",
    scrub:2

  }

})




const scrolldown=document.querySelector("#scrolldown")

// gsap.to(scrolldown, {
//   y:-70,

//   // ease:"power1.out",
//   duration:1,
//   scrollTrigger:{
//     trigger:"scrolldown",
//     scroll:"body",
//     scrub:true

//   }
// })

const scroll1 = document.querySelector("#scroll1")
gsap.to(scroll1, {
  x:-20,

  ease:"power1.out",
  duration:1,
  scrollTrigger:{
    trigger:"scroll1",
    scroll:"body",
    scrub:2

  }
})

const down = document.querySelector("#down")

down.addEventListener("click", function() {
  sc3.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
})


 
const sc1 = document.querySelector("#sc1")
gsap.to(sc1, {
  x:20,

  ease:"power1.out",
  duration:1,
  scrollTrigger:{
    trigger:"sc1",
    scroll:"body",
    scrub:2

  }
})



const about = document.querySelector("#about")
about.addEventListener("mouseenter", function() {
  crsr.style.scale = 1.1
  crsr.style.border= " 1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  about.style.color="white"
  gsap.to ( about , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})

})



about.addEventListener("mouseleave", function(){
  crsr.style.borderRadius= "50%"
  about.style.color="3498db"
  crsr.style.backgroundColor= "#3498db"
  crsr.style.boxShadow= "0 0 10px 10px #3498db"
  crsr.style.border= "none"


})




const project = document.querySelector("#project")
project.addEventListener("mouseenter", function() {
  crsr.style.scale = 1.1
  crsr.style.border= " 1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  about.style.color="white"
  gsap.to ( project , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})

})



project.addEventListener("mouseleave", function(){
  crsr.style.borderRadius= "50%"
  about.style.color="3498db"
  crsr.style.backgroundColor= "#3498db"
  crsr.style.boxShadow= "0 0 10px 10px #3498db"
  crsr.style.border= "none"


})





const contact = document.querySelector("#contact")
contact.addEventListener("mouseenter", function() {
  crsr.style.scale = 1.1
  crsr.style.border= " 1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  about.style.color="white"
  gsap.to ( contact , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})

})



contact.addEventListener("mouseleave", function(){
  crsr.style.borderRadius= "50%"
  about.style.color="3498db"
  crsr.style.backgroundColor= "#3498db"
  crsr.style.boxShadow= "0 0 10px 10px #3498db"
  crsr.style.border= "none"


})



about.addEventListener("click", function() {

  scroll1.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    
})



const sc3= document.querySelector("#sc3")
contact.addEventListener("click", function(){
  sc3.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest" })
})

gsap.to(sc3, {
  y:-10,
  duration:1,
  scrollTrigger:{
    trigger:"sc3",
    scroll:"body",
    scrub:2
  }
})

const sc4= document.querySelector("#sc4")
gsap.to(sc4, {
  y:-10,
  duration:1,
  scrollTrigger:{
    trigger:"sc4",
    scroll:"body",
    scrub:2
  }
})




// home

const mytop = document.querySelector("#gotop")
const home1 = document.querySelector("#home1")
mytop.addEventListener("click", function() {
  home1.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
})

const home = document.querySelector("#home")
home.addEventListener("mouseenter", function() {
  crsr.style.scale = 1.1
  crsr.style.border= " 1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  about.style.color="white"
  gsap.to ( home , { scale:1.2 , ease:'power2.out',duration:0.3,yoyo:true,repeat:1})

})



home.addEventListener("mouseleave", function(){
  crsr.style.borderRadius= "50%"
  about.style.color="3498db"
  crsr.style.backgroundColor= "#3498db"
  crsr.style.boxShadow= "0 0 10px 10px #3498db"
  crsr.style.border= "none"


})
home.addEventListener("mouseenter", function() {
  home.style.scale=1.5,
  // home.style.duration=0.5,
  home.style.color="#fff"
  home.style.transition="all ease-in-out 0.5s"
  about.style.opacity=0
  project.style.opacity=0
  contact.style.opacity=0
  
})

home.addEventListener("mouseleave", function() {
  home.style.scale = 1
  about.style.opacity=1
  project.style.opacity=1
  contact.style.opacity=1
  home.style.color="#3498db"

})


// about 


about.addEventListener("mouseenter", function() {
  about.style.scale=1.5,
  // about.style.duration=0.5,
  about.style.transition="all ease-in-out 0.5s"
  home.style.opacity=0
  project.style.opacity=0
  contact.style.opacity=0
  
})

about.addEventListener("mouseleave", function() {
  about.style.scale = 1
  home.style.opacity=1
  project.style.opacity=1
  contact.style.opacity=1
})



// products



project.addEventListener("mouseenter", function() {
  project.style.scale=1.5,
  // project.style.duration=0.5,
  project.style.transition="all ease-in-out 0.5s"
  home.style.opacity=0
  about.style.opacity=0
  contact.style.opacity=0
  
})

project.addEventListener("mouseleave", function() {
  project.style.scale = 1
  home.style.opacity=1
  about.style.opacity=1
  contact.style.opacity=1
})




contact.addEventListener("mouseenter", function() {
  contact.style.scale=1.5,
  // contact.style.duration=0.5,
  contact.style.transition="all ease-in-out 0.5s"
  home.style.opacity=0
  about.style.opacity=0
  project.style.opacity=0
  
})

contact.addEventListener("mouseleave", function() {
  contact.style.scale = 1
  home.style.opacity=1
  about.style.opacity=1
  project.style.opacity=1
})


const sign = document.querySelector("#sign")
gsap.to(sign, {
    opacity:0,
    ease:"power1.out",
    duration:1,
    scrollTrigger:{
      trigger:"sign",
      scroll:"body",
      scrub:2

    }
})


  gsap.to(home, {
    y:-10,

    ease:"power1.out",
    duration:1,
    scrollTrigger:{
      trigger:"home",
      scroll:"body",
      scrub:2

    }
  })


   

  gsap.to(about, {
    y:-10,

    ease:"power1.out",
    duration:1,
    scrollTrigger:{
      trigger:"about",
      scroll:"body",
      scrub:2

    }
  })

     

  gsap.to(contact, {
    y:-10,

    ease:"power1.out",
    duration:1,
    scrollTrigger:{
      trigger:"contact",
      scroll:"body",
      scrub:2

    }
  })


     

  gsap.to(project, {
    y:-10,
    ease:"power1.out",
    duration:1,
    scrollTrigger:{
      trigger:"project",
      scroll:"body",
      scrub:2

    }
  })


const btn1=document.querySelector("#btn1")


gsap.to("#btn1", {
  x:-50,
  ease:"power1.out",
  // duration:1,
  scrollTrigger:{
    trigger:"btn1",
    scroll:"body",
    scrub:true

  }
})




const btn2=document.querySelector("#btn2")


gsap.to(btn2, {
  x:50,
  ease:"power1.out",
  // duration:1,
  scrollTrigger:{
    trigger:"btn2",
    scroll:"body",
    scrub:2

  }
})




btn1.addEventListener("click", function() {


    btn1.style.backgroundColor="transparent"
    btn1.style.color="#3498db"
    // btn1.style.backgroundColor="transparent"
    btn1.style.scale= 1.1
    // btn1.style.boxShadow="0 0 10px 5px #3498db"
    btn1.style.border="2px solid #3498db"
    gsap.to(btn1, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });
  

})
  

btn1.addEventListener("mouseleave", function() {
    btn1.style.scale=1
    btn1.style.backgroundColor="#3498db"
    btn1.style.color="#000"

    btn1.style.boxShadow="none"


})

const theme = document.querySelector("#change")
gsap.to(theme,{
  y:-20,
  ease:"power1.out",
  duration:1,
  scrollTrigger:{
    trigger:"theme",
    scroll:"body",
    scrub:2
  }
})
theme.addEventListener("click", function () {
  theme.style.backgroundColor="transparent"
  theme.style.border = '2px solid #3498db';
  theme.style.borderRadius="10px"
  theme.style.cursor="pointer"
  theme.style.scale= 1.1
  gsap.to(theme, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });

  var element = document.body
  element.classList.toggle("dark-mode")
  // gsap.to(btn1, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });
  
})
theme.addEventListener("mouseleave", function(){
               
 theme.style.backgroundColor="3498db",
 theme.style.scale=1
 theme.style.borderRadius="10px",
 theme.style.color="#3498db",
 theme.style.fontFamily="cursive"
})


const aboutme= document.querySelector("#about-me")
gsap.to(aboutme,{

  y:-50,

  // ease:"power1.out",
  duration:1,
  scrollTrigger:{
    trigger:"aboutme",
    scroll:"body",
    scrub:2
  }
})

const mycon= document.querySelector("#box1")
const mycon1= document.querySelector("#box2")
const mycon2= document.querySelector("#box3")
const mycon3= document.querySelector("#box4")








let myval = "dark-mode"



if ( myval === "dark-mode") {
  
// mycon

mycon.addEventListener("mouseenter", function() {
  mycon.style.boxShadow = '1px 1px  55px  1px  #3498db';

  })

  mycon.addEventListener("mouseleave", function() {
  mycon.style.boxShadow = 'none';

  })


// mycon1


mycon1.addEventListener("mouseenter", function() {
  mycon1.style.boxShadow = '1px 1px  55px  1px  #3498db';

  })

  mycon1.addEventListener("mouseleave", function() {
  mycon1.style.boxShadow = 'none';

  })

// mycon2


mycon2.addEventListener("mouseenter", function() {
  mycon2.style.boxShadow = '1px 1px  55px  1px  #3498db';

  })

  mycon2.addEventListener("mouseleave", function() {
  mycon2.style.boxShadow = 'none';

  })


// mycon3


mycon3.addEventListener("mouseenter", function() {
  mycon3.style.boxShadow = '1px 1px  55px  1px  #3498db';

  })

  mycon3.addEventListener("mouseleave", function() {
  mycon3.style.boxShadow = 'none';

  })
  
}



let value =  "dark-mode"
if ( value==="dark-mode")
 {
    scrolldown.style.backgroundColor="transparent"
    scrolldown.style.color="#3498db"
    scrolldown.style.scale= 1.1




    scrolldown.style.border="2px solid #3498db"
    gsap.to(scrolldown, { transition: 'all ease-in-out 0.5s', ease: 'power2.out', duration: 0.3 });
}




theme.addEventListener("mouseleave" ,function() {
  theme.style.borderRadius="none"

})





gsap.from ( "#btn" , {
     
    x:-10,

   //  ease:"linear",
    duration:1,
   //  repeat: 1,

   // stragger:0.3,
   scrollTrigger: {
     trigger: "#btn",
     scroller: "body",
     //   markers:true,
     start:"top 70%",
     end:"top 95%",
     // scrub:2,
   },
 })



const text1 = document.querySelector("#text1")

gsap.to(text1, {
  y:-90,
  ease:"power1.out",
  duration:1,
  scrollTrigger:{
    trigger:"text1",
    scroll:"body",
    scrub:2

  }
})




/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["A Designer","A Learner","A Developer","A Dreamer"],
    loop : true,
    typeSpeed : 90, 
    backSpeed : 80,
    backDelay : 2000
 })

const text = document.querySelector(".typedText")
text.style.color= " #3498db"


// /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
//  const sr = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 2000,
//         reset: true     
//  })

// /* -- HOME -- */
// sr.reveal('.featured-text-card',{})
// sr.reveal('.featured-name',{delay: 100})
// // sr.reveal('.featured-text-info',{delay: 200})
// // sr.reveal('.featured-text-btn',{delay: 200})
// sr.reveal('.social_icons',{delay: 200})
// sr.reveal('.featured-image',{delay: 300})


// /* -- PROJECT BOX -- */
// sr.reveal('.project-box',{interval: 200})

// /* -- HEADINGS -- */
// sr.reveal('.top-header',{})

// /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// /* -- ABOUT INFO & CONTACT INFO -- */
// const srLeft = ScrollReveal({
//   origin: 'left',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srLeft.reveal('.about-info',{delay: 100})
// srLeft.reveal('.contact-info',{delay: 100})

// /* -- ABOUT SKILLS & FORM BOX -- */
// const srRight = ScrollReveal({
//   origin: 'right',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srRight.reveal('.skills-box',{delay: 100})
// srRight.reveal('.form-control',{delay: 100})



// /* ----- CHANGE ACTIVE LINK ----- */

// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.scrollY;

//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

//         // document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

//     }  else {

//       // document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

//     }
//   })
// }

// window.addEventListener('scroll', scrollActive)