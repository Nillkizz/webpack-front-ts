import "./style.sass";

export class Menu {
  html: string
  el: HTMLDivElement

  constructor() {
    this.el = document.createElement('div');
    this.html = require('./menu.html').default

  }

  init() {

  }

  render() {
    this.el.id = "nillkizz_menu";
    this.el.innerHTML = this.html;
    document.body.appendChild(this.el);
  }
};