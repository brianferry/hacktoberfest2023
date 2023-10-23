import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-tabs/rh-tab.js';
import '@rhds/elements/rh-tabs/rh-tab-panel.js';

import styles from './hack-output.css';

/**
 * Output
 * @slot - Place element content here
 */
@customElement('hack-output')
export class HackOutput extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <rh-tabs>
        <rh-tab slot="tab">Color Contrast</rh-tab>
        <rh-tab-panel>Tab 1 content</rh-tab-panel>
        <rh-tab slot="tab">Header</rh-tab>
        <rh-tab-panel>Tab 2 content</rh-tab-panel>
        <rh-tab slot="tab">Links</rh-tab>
        <rh-tab-panel>Tab 3 content</rh-tab-panel>
        <rh-tab slot="tab">Reccomendations</rh-tab>
        <rh-tab-panel>Tab 4 content</rh-tab-panel>
      </rh-tabs>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-output': HackOutput;
  }
}
