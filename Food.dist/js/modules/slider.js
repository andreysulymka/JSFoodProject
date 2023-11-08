function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field,
}) {
  // slider

  const slider = document.querySelector(container);
  const prev = document.querySelector(prevArrow);
  const next = document.querySelector(nextArrow);
  const currentNumber = document.querySelector(currentCounter);
  const totalNumber = document.querySelector(totalCounter);
  const photoArr = document.querySelectorAll(slide);
  const slidesWrapper = document.querySelector(wrapper);
  const slidesField = document.querySelector(field);
  const width = window.getComputedStyle(slidesWrapper).width;
  let index = 1;
  let offset = 0;

  if (photoArr.length < 10) {
    totalNumber.textContent = `0${photoArr.length}`;
    currentNumber.textContent = `0${index}`;
  } else {
    totalNumber.textContent = photoArr.length;
    currentNumber.textContent = index;
  }

  slidesField.style.width = 100 * photoArr.length + "%";

  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  photoArr.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const indicators = document.createElement("ol");
  const dots = [];
  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  function changedSting(string) {
    return +string.replace(/\D/g, "");
  }

  for (let i = 0; i < photoArr.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener("click", () => {
    if (offset == changedSting(width) * (photoArr.length - 1)) {
      offset = 0;
    } else {
      offset += changedSting(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (index == photoArr.length) {
      index = 1;
    } else {
      index++;
    }

    if (photoArr.length < 10) {
      currentNumber.textContent = `0${index}`;
    } else {
      currentNumber.textContent = index;
    }

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[index - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = changedSting(width) * (photoArr.length - 1);
    } else {
      offset -= changedSting(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (index == 1) {
      index = photoArr.length;
    } else {
      index--;
    }

    if (photoArr.length < 10) {
      currentNumber.textContent = `0${index}`;
    } else {
      currentNumber.textContent = index;
    }
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[index - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      index = slideTo;
      offset = changedSting(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (photoArr.length < 10) {
        currentNumber.textContent = `0${index}`;
      } else {
        currentNumber.textContent = index;
      }

      dots.forEach((dot) => (dot.style.opacity = ".5"));
      dots[index - 1].style.opacity = 1;
    });
  });
}

// if (photoArr.length < 10) {
//   totalNumber.textContent = `0${photoArr.length}`;
// } else {
//   totalNumber.textContent = photoArr.length;
// }

// controlSlides(index);
// function controlSlides(n) {
//   if (n > photoArr.length) {
//     index = 1;
//   }

//   if (n < 1) {
//     index = photoArr.length;
//   }

//   if (index < 10) {
//     currentNumber.textContent = `0${index}`;
//   } else {
//     currentNumber.textContent = index;
//   }

//   photoArr.forEach((elem) => {
//     elem.style.display = "none";
//   });

//   photoArr[index - 1].style.display = "block";
// }

// function changeIndex(n) {
//   index += n;
// }

// prevArrow.addEventListener("click", () => {
//   changeIndex(-1);
// });
// nextArrow.addEventListener("click", () => plusIndex(1));

export default slider;
