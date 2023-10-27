import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { HackEditor } from '@hack/elements/hack-editor/hack-editor.js';

describe('<hack-editor>', function() {
  describe('simply instantiating', function() {
    let element: HackEditor;
    it('should upgrade', async function() {
      element = await createFixture<HackEditor>(html`<hack-editor></hack-editor>`);
      const klass = customElements.get('hack-editor');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(HackEditor);
    });
  })
});
