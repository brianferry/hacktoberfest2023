import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './hack-email.css';

/**
 * Email
 * @slot - Place element content here
 */
@customElement('hack-email')
export class HackEmail extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-email': HackEmail;
  }
}
