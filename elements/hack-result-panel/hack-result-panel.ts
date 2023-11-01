import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property } from 'lit/decorators/property.js';

import '@rhds/elements/rh-accordion/rh-accordion.js';
import '@rhds/elements/rh-accordion/rh-accordion-header.js';
import '@rhds/elements/rh-accordion/rh-accordion-panel.js';
import '@rhds/elements/rh-alert/rh-alert.js';

import styles from './hack-result-panel.css';

type Result = {
  name: string;
  result?: string[];
  recommendation: string;
}

const scrollIntoView = (el: string) => {
  const hackApp = document.querySelector('hack-app');
  const element = hackApp?.shadowRoot?.querySelector(el);
  if (element) {
    element.scrollIntoView();
  }
};

/**
 * Result Panel
 * @slot - Place element content here
 */
@customElement('hack-result-panel')
export class HackResultPanel extends LitElement {
  static readonly styles = [styles];

  @property({ type: Array, reflect: true })
    result: Result[];

  constructor() {
    super();
    this.result = [];
  }

  render() {
    return html`
      <slot name="header"></slot>
      <slot name="subheader"></slot>
      <rh-accordion>
        ${this.result.map(result => html`
          <rh-accordion-header>${result.name}</rh-accordion-header>
          <rh-accordion-panel>
            ${result.result && result.result.length > 0 && html`
              ${result.result.map(r => html`
                ${unsafeHTML(r || '')}
              `)}
            `}
            <rh-alert state="success">
              <h3 slot="header">Recommendation</h3>
              ${unsafeHTML(result.recommendation)}
            </rh-alert>
          </rh-accordion-panel>
        `)}
      </rh-accordion>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-result-panel': HackResultPanel;
  }
}
