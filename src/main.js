import FilterView from './view/filter-view.js';
import {render} from './render.js';
import Presenter from './presenter/presenter.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const routePresenter = new Presenter({routeContainer: siteMainElement});

render(new FilterView(), siteHeaderElement);

routePresenter.init();
