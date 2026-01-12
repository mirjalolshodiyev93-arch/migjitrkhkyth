
let home = document.querySelector(".btn30")
let clickbox = document.querySelector(".div2")
let main = document.querySelector("main")
let remove = document.querySelector(".remove")

home.addEventListener("click", () => {
  clickbox.classList.add("active");
  main.classList.add("active");
})

remove.addEventListener("click", () => {
  clickbox.classList.remove("active");
  main.classList.remove("active");
})


let li_box4 = document.querySelector(".li_box4")

let sec3 = document.querySelector(".sec3")

sec3.addEventListener("click", () => {
  li_box4.classList.toggle("active");
})

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".btn_left",
    prevEl: ".btn_rigt",
  },
  // Ekran o'lchamiga qarab slaydlarni moslashtirish
  breakpoints: {
    // Ekran 320px dan katta bo'lganda (Telefon)
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // Ekran 768px dan katta bo'lganda (Planshet)
    649: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    900: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


const slider = document.getElementById('categorySlider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const scrollStep = 320;

nextBtn.addEventListener('click', () => {
  slider.scrollLeft += scrollStep;
});

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= scrollStep;
});


slider.addEventListener('scroll', () => {
  if (slider.scrollLeft <= 0) {
    prevBtn.classList.remove('active');
  } else {
    prevBtn.classList.add('active');
  }
});



let s = document.querySelector(".img_box")
let d = document.querySelector(".div10")

s.addEventListener("click", () => {
  d.classList.toggle("active");
})


console.log(d);



let productImg = document.querySelectorAll(".img_box1"),
  title = document.querySelectorAll(".p1"),
  desc = document.querySelectorAll(".span1"),
  Korinka = document.querySelector("#cart-display"),
  btn = document.querySelectorAll(".img_box2");

btn.forEach((item, id) => {
  item.addEventListener("click", () => {
    let newImgProduct = productImg[id].src;
    let newTitle = title[id].textContent;
    let newDesc = desc[id].textContent;

    // 1. Yangi mahsulot bloki yaratish
    let newProduct = document.createElement("div");
    newProduct.setAttribute("class", "item-prod");

    newProduct.innerHTML = `
      <div class="item-prod-img">
        <img src="${newImgProduct}" alt="no">
      </div>
      <article class="item-prod-info">
        <p>${newTitle}</p>
        <span>${newDesc}</span>
      </article>
      <button class="remove10">remove</button>
    `;



    let removeBtn = newProduct.querySelector(".remove10");


    removeBtn.addEventListener("click", () => {
      newProduct.remove();
    });


    Korinka.append(newProduct);
  });
});






/// Sahifa to'liq yuklanganini kutamiz
document.addEventListener('DOMContentLoaded', function () {

  // Elementlarni tanlab olamiz
  const signInBtn = document.querySelector('.btn2');
  const emailInput = document.querySelector('.input1');
  const passwordInput = document.querySelector('.input2');
  const checkbox = document.querySelector('#checkbox');
  const add1 = document.querySelector('.ar9')
  if (signInBtn) {
    signInBtn.addEventListener('click', function (event) {

      event.preventDefault();

      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();

      if (emailValue === "" || passwordValue === "") {
        add1.classList.add("active2")
        emailInput.classList.add("active2")
        setTimeout(() => {
          emailInput.classList.remove("active2")
          add1.classList.remove("active2")
        }, 2000);

        return;
      }

      if (!emailValue.includes('@')) {
        emailInput.classList.add("active2")
        setTimeout(() => {
          emailInput.classList.remove("active2")
        }, 2000);
        return;
      }

      if (passwordValue.length < 6) {
        add1.classList.add("active2")
        setTimeout(() => {
          add1.classList.remove("active2")
        }, 2000);
        return;
      }

      else {
        emailInput.classList.add("active")
        add1.classList.add("active")
        checkbox.classList.add("active")
        setTimeout(() => {
          emailInput.classList.remove("active")
          add1.classList.remove("active")
          checkbox.classList.remove("active")
        }, 2000);
        emailInput.value = "";
        passwordInput.value = "";
        checkbox.checked = false;
      }




    });
  } else {
    alert("error")
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.newsletter-form');
  const emailInput = container.querySelector('.newsletter-form input');
  const subscribeBtn = container.querySelector('.newsletter-form button');

  subscribeBtn.addEventListener('click', (e) => {

    e.preventDefault();

    const emailValue = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {

      emailInput.classList.remove('error');
      emailInput.classList.add('success');

      emailInput.value = "";


      setTimeout(() => {
        emailInput.classList.remove('success');
      }, 3000);

    } else {
      // AGAR XATO BO'LSA
      emailInput.classList.remove('success');
      emailInput.classList.add('error');


    }
  });
});




let productImg2 = document.querySelectorAll(".img_box1"),
  title2 = document.querySelectorAll(".p1"),
  desc2 = document.querySelectorAll(".span1"),
  Korinka2 = document.querySelector(".salom100"),
  btn2 = document.querySelectorAll(".yurak");
  gfr = document.querySelector(".commons1")

btn2.forEach((item, id) => {
  item.addEventListener("click", () => {
    gfr.classList.add("active")
    setTimeout(() => {
      gfr.classList.remove("active")
    }, 1500);
    let newImgProduct = productImg2[id].src;
    let newTitle = title2[id].textContent;
    let newDesc = desc2[id].textContent;

    let newProduct = document.createElement("div");
    newProduct.setAttribute("class", "tttt");

    newProduct.innerHTML = `
      <div class="item-prod-img">
        <img src="${newImgProduct}" alt="no">
      </div>
      <article class="item-prod-info2">
        <p>${newTitle}</p>
        <span>${newDesc}</span>
      </article>
      <button class="remove10">remove</button>
    `;



    let removeBtn = newProduct.querySelector(".remove10");


    removeBtn.addEventListener("click", () => {
      newProduct.remove();
    });


    Korinka2.append(newProduct);
  });
});


let sss = document.querySelector(".sec1")
let ssss = document.querySelector(".s")

sss.addEventListener("click", () => {
  ssss.classList.toggle("active")
})


const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

