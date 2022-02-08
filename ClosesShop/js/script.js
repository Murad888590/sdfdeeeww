window.addEventListener("DOMContentLoaded", () => {
   const courusel = (wrapperSel, innerSel, slidersSel, blockSel, btnSel) => {
      try{  
         const wrapper = document.querySelector(wrapperSel),
               inner = document.querySelector(innerSel),
               block = document.querySelector(blockSel),
               sliders = document.querySelectorAll(slidersSel),
               blockWidth = sliders[1].clientWidth,
               btn = document.querySelector(btnSel)
               let offsite = 0;
               btn.addEventListener("click", () => {
                  if(offsite >= (parseInt(blockWidth) * (sliders.length - 1)) + (60 * (sliders.length - 1))) {
                     offsite = 0
                  } else {
                     offsite += parseInt(blockWidth) + 60
                  }
                  inner.style.transform = `translateX(-${offsite}px)`
                  console.log(offsite)
               })
      }catch (err){}
       
   }
   courusel (".promotion__caurusel", ".promotion__inner", ".promotion__block", ".promotion__block", '.promotion__next')
   courusel (".reviews__slider", ".reviews__inner", ".reviews__block", ".reviews__block", '.reviews__arrow') 




   const questions = (triggersSel, questionsBlocksSel, listSel, minSel) => {
      try{
         const triggers = document.querySelectorAll(triggersSel),
         questionBlocks = document.querySelectorAll(questionsBlocksSel),
         lists = document.querySelectorAll(listSel),
         min = document.querySelectorAll(minSel);
         triggers.forEach((trigger, i) => {
            trigger.addEventListener("click", () => {
               questionBlocks[i].classList.add("active")
               triggers[i].style.display = "none"
               min[i].style.display = "block"
                  
            })
         })
         min.forEach((trigger, i) => {
            trigger.addEventListener("click", () => {
                  questionBlocks[i].classList.remove("active")
                  min[i].style.display = "none"
                  triggers[i].style.display = "block"
            })
         })
      }catch(err){}
   }
   questions(".plusTrigger", ".question__block", ".question__block ul li", ".minTrigger")


   const hamburger = (triggerSel, menuSel, exitSel) => {
      try{
         const trigger = document.querySelector(triggerSel),
            menu = document.querySelector(menuSel),
            exit = document.querySelector(exitSel);
            trigger.addEventListener("click", () => {
               menu.classList.add("hamburger__menu__active")
            })
            exit.addEventListener("click", () => {
               menu.classList.remove("hamburger__menu__active")
            })
      }catch(err){}
   }  
   hamburger(".hamburger", ".hamburger__menu", ".exit");


   const cat = (liSel, catSel, hamSel, linkSel, secSel) => {
      const list = document.querySelectorAll(liSel),
            cat = document.querySelectorAll(catSel),
            secLink = document.querySelectorAll(secSel),
            link = document.querySelectorAll(linkSel),
            ham = document.querySelector(hamSel);
            
      try{
         list.forEach((li, i) => { 
            li.addEventListener("mouseover", (e) => {
               link[i].setAttribute("id", "active__li");
               if(cat[i]) {
                  ham.style.width = `400px`
                  cat[i].classList.add("cat__active")
               }
            })
         })
         list.forEach((li, i) => {
            li.addEventListener("mouseout", (e) => {
               link[i].removeAttribute("id", "active__li");
               if(cat[i]) {
                  ham.style.width = `max-content`
                  cat[i].classList.remove("cat__active")
               }
            })
         })
      }catch(err){}
   }
   cat(".hamburger__menu>ul>li", ".cat", ".hamburger__menu", ".hamburger__menu>ul>li>a", '.cat>li>a')

   const addReview = (triggerSel, addSel, exitSel) => {
      const trigger = document.querySelector(triggerSel),
            add = document.querySelector(addSel),
            exit = document.querySelector(exitSel)
            try{
               trigger.addEventListener("click", () => {
                  add.classList.add("my__review_active")
                  exit.classList.add("my__review__exi__active")
               })
               exit.addEventListener("click", () => {
                  add.classList.remove("my__review_active")
                  exit.classList.remove("my__review__exi__active")
               })
            }catch(err){}
            
            
   }
   addReview(".add_review", ".my__review", ".my__review__exit")
})