import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { HackOutput } from '@hack/elements/hack-output/hack-output.js';

describe('<hack-output>', function() {
  describe('simply instantiating', function() {
    let element: HackOutput;
    it('should upgrade', async function() {
      element = await createFixture<HackOutput>(html`<hack-output></hack-output>`);
      const klass = customElements.get('hack-output');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(HackOutput);
    });
  })
});
