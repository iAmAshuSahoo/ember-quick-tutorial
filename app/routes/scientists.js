import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Marie Curie', 'Homie Bhaba', 'Abdul Kalam'];
  }
}
