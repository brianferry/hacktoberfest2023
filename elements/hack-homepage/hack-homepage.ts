import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './hack-homepage.css';

/**
 * Homepage
 * @slot - Place element content here
 */
@customElement('hack-homepage')
export class HackHomepage extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-homepage': HackHomepage;
  }
}
