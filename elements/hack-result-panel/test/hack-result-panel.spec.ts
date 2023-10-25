import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { HackResultPanel } from '@hack/elements/hack-result-panel/hack-result-panel.js';

describe('<hack-result-panel>', function() {
  describe('simply instantiating', function() {
    let element: HackResultPanel;
    it('should upgrade', async function() {
      element = await createFixture<HackResultPanel>(html`<hack-result-panel></hack-result-panel>`);
      const klass = customElements.get('hack-result-panel');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(HackResultPanel);
    });
  })
});
