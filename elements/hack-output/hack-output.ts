import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-tabs/rh-tab.js';
import '@rhds/elements/rh-tabs/rh-tab-panel.js';

import '@rhds/elements/rh-accordion/rh-accordion.js';
import '@rhds/elements/rh-accordion/rh-accordion-panel.js';
import '@rhds/elements/rh-accordion/rh-accordion-header.js';

import '../hack-result-panel/hack-result-panel.js';

import '@rhds/elements/rh-alert/rh-alert.js';

import styles from './hack-output.css';

import { ChatGPTResponse, GroupedSuggestions, Suggestion } from './types/response.js';

/**
 * Output
 * @slot - Place element content here
 */
@customElement('hack-output')
export class HackOutput extends LitElement {
  static readonly styles = [styles];

  #chatGptResponse: ChatGPTResponse | null = null;

  constructor() {
    super();
    this.#chatGptResponse = new ChatGPTResponse('', [
      {
        type: 'Header',
        suggestion: 'Consider using semantic heading tags (h1, h2, etc.) for better structure and accessibility.',
        shortDescription: 'Use semantic heading tags.'
      },
      {
        type: 'Links',
        suggestion: 'Make link text more descriptive. Avoid using \'Call To Action\' as link text.',
        shortDescription: 'Use descriptive link text.'
      }]
    );
  }


  render() {
    return html`
      <rh-tabs>
        ${this.#chatGptResponse?.groupedSuggestions.map((groupedSuggestion: GroupedSuggestions) => {
          return html`<rh-tab slot="tab">${groupedSuggestion.type}</rh-tab>
          <rh-tab-panel>
            <h2>Reccomendations</h2>
            <rh-accordion>
            ${groupedSuggestion.suggestions.map((suggestion: Suggestion) => {
              return html`
                  <rh-accordion-header>${suggestion.shortDescription}</rh-accordion-header>
                  <rh-accordion-panel>${suggestion.suggestion}</rh-accordion-panel>
              `;
            })}
          </rh-tab-panel>
          `;
       }
  )}
      </rh-tabs>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-output': HackOutput;
  }
}
