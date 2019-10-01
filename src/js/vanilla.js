//SLIDER//

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 4000
});

//SLIDER

//GALLERY

const els = document.querySelectorAll(".slider__item__gallery");
const modal = document.querySelector(".modal-gallery");

modal.addEventListener("click", e => {
  if (e.target.classList.contains("modal-gallery")) {
    modal.classList.remove("modal-opened");
    setTimeout(() => {
      modal.classList.remove("modal-will-open");
    }, 250);
    $(".modal-gallery__slider").slick("unslick");
    while (modal.childNodes[1].firstChild) {
      modal.childNodes[1].removeChild(modal.childNodes[1].firstChild);
    }
  }
});

els.forEach(element => {
  element.addEventListener("click", e => {
    if (e.target.classList != "slider__item__gallery") {
      modal.classList.add("modal-will-open");
      setTimeout(() => {
        modal.classList.add("modal-opened");
      }, 10);
      element.childNodes.forEach(child => {
        if (child.nodeName === "IMG") {
          let newChild = child.cloneNode(false);
          modal.childNodes[1].append(newChild);
        }
      });
    }
    $(".modal-gallery__slider").slick();
  });
});

//GALLERY
