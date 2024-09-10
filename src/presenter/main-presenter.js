import EditView from '../view/edit-form.js';
import SortView from '../view/sort-view.js';
import RoutePointListView from '../view/route-point-list-view.js';
import PointView from '../view/point-view.js';
import PointEditFormView from '../view/route-edit-form-view.js';

import {render} from '../render.js';

export default class MainPresenter {
  boardComponent = new EditView();
  routePointListComponent = new RoutePointListView();
  sortComponent = new SortView ();
  pointComponent = new PointView ();
  pointeditComponent = new PointEditFormView ();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(this.sortComponent, this.boardContainer, this.boardComponent.getElement());
    render(this.routePointListComponent, this.boardComponent.getElement());
    render(this.pointeditComponent, this.routePointListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(this.pointComponent, this.routePointListComponent.getElement());
    }

  }
}
