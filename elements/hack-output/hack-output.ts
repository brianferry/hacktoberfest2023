import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-tabs/rh-tab.js';
import '@rhds/elements/rh-tabs/rh-tab-panel.js';

import '@rhds/elements/rh-accordion/rh-accordion.js';
import '@rhds/elements/rh-accordion/rh-accordion-header.js';
import '@rhds/elements/rh-accordion/rh-accordion-panel.js';

import '@rhds/elements/rh-alert/rh-alert.js';

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
        <rh-tab-panel>
          <h2>Results</h2>
          <section>Your email has been checked and the tool found 3 color contrast errors.</section>

          <rh-accordion>
            <rh-accordion-header>Color contrast ratio is 4.03:1</rh-accordion-header>
            <rh-accordion-panel>
              <ul>
                <li>WCAG AA: FAIL</li>
                <li>WCAG AAA: FAIL</li>
              </ul>
                <rh-alert state="success">
                  <h3 slot="header">Reccomendation</h3>
                  <p>
                    Looks like the <rh-cta> element is on a background image. Recommend editing the background image to be darker and checking the email again.
                  </p>
                </rh-alert>
              </ul>
            </rh-accordion-panel>
            <rh-accordion-header>Color contrast ratio is 4.03:1</rh-accordion-header>
            <rh-accordion-panel>
              <ul>
                <li>WCAG AA: FAIL</li>
                <li>WCAG AAA: FAIL</li>

                <rh-alert state="success">
                  <h3 slot="header">Reccomendation</h3>
                  <p>
                    Looks like the <rh-cta> element is on a background image. Recommend editing the background image to be darker and checking the email again.
                  </p>
                </rh-alert>
              </ul>
            </rh-accordion-panel>
            <rh-accordion-header>Color contrast ratio is 4.03:1</rh-accordion-header>
            <rh-accordion-panel>
              <ul>
                <li>WCAG AA: FAIL</li>
                <li>WCAG AAA: FAIL</li>

                <rh-alert state="success">
                  <h3 slot="header">Reccomendation</h3>
                  <p>
                    Looks like the <rh-cta> element is on a background image. Recommend editing the background image to be darker and checking the email again.
                  </p>
                </rh-alert>
              </ul>
            </rh-accordion-panel>
          </rh-accordion>
        </rh-tab-panel>
        <rh-tab slot="tab">Header</rh-tab>
        <rh-tab-panel>
          <h2>Results</h2>
          <section>Your email has been checked and the tool found 0 header errors.</section>
        </rh-tab-panel>
        <rh-tab slot="tab">Links</rh-tab>
        <rh-tab-panel>
          <h2>Results</h2>
          <section>Your email has been checked and the tool found 4 link errors.</section>

          <rh-accordion>
            <rh-accordion-header>No underline</rh-accordion-header>
            <rh-accordion-panel>
              <p>Links require an underline to convey meaning in place of just using color.</p>

              <rh-alert state="success">
                <h3 slot="header">Reccomendation</h3>
                <p>Add an underline to the link.</p>
              </rh-alert>
            </rh-accordion-panel>
            <rh-accordion-header>Generic Link Text</rh-accordion-header>
            <rh-accordion-header>Link text is too short</rh-accordion-header>
            <rh-accordion-header>Generic Link Text</rh-accordion-header>
          </rh-accordion>
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
