import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rental::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Rental::Image>
        template block text
      </Rental::Image>
    `);

    assert
      .dom('.image img')
      .exists();
  });
});
