import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // await render(hbs`<Rental::Image />`);

    // assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Rental::Image>
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      </Rental::Image>
    `);

    assert.dom('.image img').exists();
  });

  test('clicking on component toggle size', async function(assert) {
    await render(hbs`
      <Rental::Image>
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      </Rental::Image>
    `)
    assert.dom('button image').exists;
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');
  })
});
