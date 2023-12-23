function initSlide() {
  let swiperPrevBtn = document.querySelector(".swiper-prev");
  let swiperNextBtn = document.querySelector(".swiper-next");
  let swiperContent = document.querySelector(".swiper-content");

  let pos = 0;
  let itemWidth = +swiperContent.clientWidth;

  swiperNextBtn.addEventListener("click", () => {
    if (pos > itemWidth * -2) {
      pos -= itemWidth;
      swiperContent.style.transform = `translate3d(${pos}px, 0, 0)`;
    }
  });

  swiperPrevBtn.addEventListener("click", () => {
    if (pos < 0) {
      pos += itemWidth;
      swiperContent.style.transform = `translate3d(${pos}px, 0, 0)`;
      console.log(pos);
    }
  });
}

function initAccordion() {
  let accordionBtn = document.querySelectorAll(
    ".accordion .accordion-item .accordion-title h2"
  );

  let accordionItem = document.querySelectorAll(".accordion .accordion-item");

  accordionBtn.forEach((item) => {
    item.addEventListener("click", () => {
      accordionItem.forEach((item) => {
        item.classList.remove("is-active");
      });
      item.parentElement.parentElement.classList.add("is-active");
    });
  });
}

initSlide();
initAccordion();
