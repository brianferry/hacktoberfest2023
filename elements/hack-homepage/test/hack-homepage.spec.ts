import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { HackHomepage } from '@hack/elements/hack-homepage/hack-homepage.js';

describe('<hack-homepage>', function() {
  describe('simply instantiating', function() {
    let element: HackHomepage;
    it('should upgrade', async function() {
      element = await createFixture<HackHomepage>(html`<hack-homepage></hack-homepage>`);
      const klass = customElements.get('hack-homepage');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(HackHomepage);
    });
  })
});
