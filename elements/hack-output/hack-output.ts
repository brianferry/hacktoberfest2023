import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { query } from 'lit/decorators/query.js';

import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-tabs/rh-tab.js';
import '@rhds/elements/rh-tabs/rh-tab-panel.js';

// import '@dds/webcomponents/dds-footnote/dds-footnote.js';
// import '@dds/webcomponents/dds-footnote/dds-footnote-item.js';

import '../hack-result-panel/hack-result-panel.js';

import '@rhds/elements/rh-alert/rh-alert.js';

import styles from './hack-output.css';
import { HackResultPanel } from '../hack-result-panel/hack-result-panel.js';

/**
 * Output
 * @slot - Place element content here
 */
@customElement('hack-output')
export class HackOutput extends LitElement {
  static readonly styles = [styles];

  @query('#color-contrast-results')
    colorContrastResults!: HackResultPanel | null;

  @query('#links-results')
    linksResults!: HackResultPanel | null;

  updated() {
    if (this.colorContrastResults) {
      this.colorContrastResults.result = [
        {
          name: 'Color contrast ratio is 4.03:1',
          result: ['<span>WCAG AA: <span style="color:red; display: inline-block;">FAIL</span></span>', '<span>WCAG AAA: <span style="color:red; display: inline-block;">FAIL</span></span>'],
          recommendation: 'Looks like the <rh-cta> element is on a background image. Recommend editing the background image to be darker and checking the email again.',
        },
        {
          name: 'Color contrast ratio is 4.03:1',
          result: ['<span>WCAG AA: <span style="color:red; display: inline-block;">FAIL</span></span>', '<span>WCAG AAA: <span style="color:red; display: inline-block;">FAIL</span></span>'],
          recommendation: 'Looks like the <rh-cta> element is on a background image. Recommend editing the background image to be darker and checking the email again.'
        },
        {
          name: 'Color contrast ratio is 4.03:1',
          result: ['<span>WCAG AA: <span style="color:red; display: inline-block;">FAIL</span></span>', '<span>WCAG AAA: <span style="color:red; display: inline-block;">FAIL</span></span>'],
          recommendation: 'Looks like the <rh-cta> element is on a background image. Recommend editing the background image to be darker and checking the email again.'
        },
      ];
    }
    if (this.linksResults) {
      this.linksResults.result = [
        {
          name: 'No underline',
          result: ['Links require an underline to be accessible.'],
          recommendation: 'Add an underline to the link.'
        },
        {
          name: 'Generic Link Text',
          result: ['Link contains generic text.'],
          recommendation: 'Add more descriptive link text.'
        },
        {
          name: 'Link text is too short',
          result: ['Link text is too short.'],
          recommendation: 'Add more descriptive link text.'
        },
        {
          name: 'Generic Link Text',
          result: ['Link contains generic text.'],
          recommendation: 'Add more descriptive link text.'
        },
      ];
    }
  }

  render() {
    return html`
      <rh-tabs>
        <rh-tab slot="tab">Color Contrast</rh-tab>
        <rh-tab-panel>
          <hack-result-panel id="color-contrast-results">  
            <h2 slot="header">Results</h2>
            <section slot="subheader">Your email has been checked and the tool found 3 color contrast errors.
             </section>
          </hack-result-panel>
        </rh-tab-panel>
        <rh-tab slot="tab">Header</rh-tab>
        <rh-tab-panel>
          <hack-result-panel>
            <h2 slot="header">Results</h2>
            <section slot="subheader">Your email has been checked and the tool found 0 header errors.</section>
          </hack-result-panel>
        </rh-tab-panel>
        <rh-tab slot="tab">Links</rh-tab>
        <rh-tab-panel>
          <hack-result-panel id="links-results">
            <h2 slot="header">Results</h2>
            <section slot="subheader">Your email has been checked and the tool found 4 link errors.</section>
          </hack-result-panel>
        </rh-tab-panel>
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
