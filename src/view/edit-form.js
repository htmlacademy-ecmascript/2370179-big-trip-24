import { createElement } from '../render.js';
import view from './view.js';

function createEditFormTemplate() {
  return '<section class="trip-events"></section>';
}

export default class EditView extends view{
  getTemplate() {
    return createEditFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
