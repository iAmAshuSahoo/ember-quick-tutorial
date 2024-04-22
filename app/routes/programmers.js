import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Ankush Dharkar', 'Dan Abramov', 'Brandon Eich'];
  }
}
