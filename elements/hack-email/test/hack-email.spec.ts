import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { HackEmail } from '@hack/elements/hack-email/hack-email.js';

describe('<hack-email>', function() {
  describe('simply instantiating', function() {
    let element: HackEmail;
    it('should upgrade', async function() {
      element = await createFixture<HackEmail>(html`<hack-email></hack-email>`);
      const klass = customElements.get('hack-email');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(HackEmail);
    });
  })
});
