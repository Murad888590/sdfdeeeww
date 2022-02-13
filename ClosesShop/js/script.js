window.addEventListener("DOMContentLoaded", () => {
   const getData = async(url) => {
      const res = await fetch(url);
      if(!res.ok) {
         console.log("Error")
      }
      return await res.json()
   }
   
   const postData = async(url, data) => {
      const res = await fetch(url, {
         method: "POST",
         // headers: {
         //    'Content-type': 'application/json'
         // },
         body: data
      });
      
      return await res.text()
   }
   
      const getCatalogGood = (wrapSel) => {
         const wrapper = document.querySelector(wrapSel);
         let count = 6;
         let ex = 0;

         const get = () => {
            getData('db/catalog.json')
            .then(res => {
          
               
               for (ex; ex<count; ex++) {
                  const good = document.createElement("div");
                  good.classList.add("catalog__good");
                  good.innerHTML = `
                  <div class="promotion__block__img">
                  <img src="${res.humans[ex].ImgSrc}" alt="">
               </div>
               <div class="promotion__block__footer">
                  <div class="promotion__price__block">
                     <div class="promotion__price">
                        <div class="promotion__curren__price">50.00 р</div>
                        <div class="promotion__old__price">65.00 р</div>
                     </div>
                     <div class="promotion__bock__desc">Блузка женская классная</div>
                     <button class="promotion__button">Подробнее
                        <img src="image/promotion/Arrow 9.png" alt="">
                     </button>
                  </div>
                  <div class="promotion__user">
                     <div class="promotion__user__touch">
                        <img src="image/header/clarity_heart-line.png" alt="">
                        <img src="image/header/clarity_shopping-bag-line.png" alt="">
                     </div>
                     <div class="promotion__user__stars">
                        <img src="image/promotion/Vector.png" alt="">
                        <img src="image/promotion/Vector.png" alt="">
                        <img src="image/promotion/Vector.png" alt="">
                        <img src="image/promotion/Vector.png" alt="">
                     </div>
                  </div>
               </div>
                  `
                  wrapper.appendChild(good)
                 
               }
                 
             
              
              
               
   
        
             
       
            })
         }

         get()

     

    
         document.querySelector(".catalog__more").addEventListener("click", () => {
               
               ex = count 
       
               count+=6
             
           
            
            get()
         })
            
            
            
    

      }

      getCatalogGood(".catalog__wrapper")

   const courusel = (innerSel, slidersSel, btnSel) => {
      try{  
         const 
               inner = document.querySelector(innerSel),
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
                
               })
 
      }catch (err){}
       
   }
   courusel (".reviews__inner", ".reviews__block",  '.reviews__arrow')
   courusel (".promotion__inner", ".promotion__block",  '.promotion__next')
    




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
                  ham.style.width = `420px`
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


      try{
         const senForm = (formSel, inputsSel) => {
         

            const form = document.querySelector(formSel),
                  inputs = document.querySelectorAll(inputsSel);
   
   
                  const clearInputs = () => {
                     inputs.forEach(input => {
                        input.value =  input.value.replace(input.value, "")
                     })
                  }
            let messages = {
               loading: "Подождите не много",
               succes: "Ваш отзыв отправлен",
               fail: "Что то пошло не так"
            }
   
            form.addEventListener('submit', (e) => {
               e.preventDefault();
               let statusmessage = document.createElement("div");
               statusmessage.classList.add("status")
               form.appendChild(statusmessage);
               statusmessage.textContent = messages.loading;
               let formData = new FormData(form);
               postData("server.php", formData)
               .then(res => {
                  
                  if(form.classList.contains("add_review_form")) {
                     document.querySelector(".thanks_block").style.display = "flex";
                     setTimeout(() => {
                        document.querySelector(".thanks_block").style.display = "none";
                     }, 2000);
                     statusmessage.style.display = "none"
                  } else {
                     statusmessage.textContent = messages.succes;
                     setTimeout(() => {
                        statusmessage.style.display = "none"
                     }, 2000)
                  }
               })
               .catch(() => {
                  statusmessage.textContent = messages.fail;
               })
               .finally(() => {
                  clearInputs();
     
               })
      
            })
           
         }
         senForm("#add_review_form", '#add_review_form input');
         senForm("#workWithUs", "#workWithUs input")
      }catch{}
  
})