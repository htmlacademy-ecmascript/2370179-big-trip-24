import EditForm from '../view/edit-form.js';
import SortView from '../view/sort-view.js';
import RoutePointList from '../view/route-point-list.js';
import RoutePoint from '../view/route-point.js';
import RouteEditForm from '../view/route-edit-form.js';

import {render} from '../render.js';

export default class Presenter {
  routeComponent = new EditForm();
  routePointListComponent = new RoutePointList();

  constructor({routeContainer}) {
    this.routeContainer = routeContainer;
  }

  init() {
    render(this.routeComponent, this.routeContainer);
    render(new SortView(), this.routeComponent.getElement());
    render(this.routePointListComponent, this.routeComponent.getElement());
    render(new RouteEditForm (), this.routePointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RoutePoint (), this.routePointListComponent.getElement());
    }

  }
}
