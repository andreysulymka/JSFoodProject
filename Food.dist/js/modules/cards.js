import { getResources } from "../services/services";

function cards() {
  // Використовуєм класи для карточок

  class NewCard {
    constructor(src, alt, subt, descr, price, parentElement, ...classes) {
      this.src = src;
      this.alt = alt;
      this.subt = subt;
      this.descr = descr;
      this.price = price;
      this.course = 37;
      this.classes = classes;
      this.parentElement = document.querySelector(parentElement);
      this.changetoUAH();
    }

    changetoUAH() {
      this.price = this.price * this.course;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `      
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.subt}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            `;
      this.parentElement.append(element);
    }
  }

  getResources("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new NewCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}

export default cards;
