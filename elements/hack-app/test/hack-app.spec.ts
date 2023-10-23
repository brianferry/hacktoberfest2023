import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { HackApp } from '@hack/elements/hack-app/hack-app.js';

describe('<hack-app>', function() {
  describe('simply instantiating', function() {
    let element: HackApp;
    it('should upgrade', async function() {
      element = await createFixture<HackApp>(html`<hack-app></hack-app>`);
      const klass = customElements.get('hack-app');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(HackApp);
    });
  })
});
