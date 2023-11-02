import { LitElement, html } from 'lit';
import { query } from 'lit/decorators/query.js';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './hack-email.css';

/**
 * Email
 * @slot - Place element content here
 */
@customElement('hack-email')
export class HackEmail extends LitElement {
  static readonly styles = [styles];

  @query('slot')
    slot!: any;

  @query('#container')
    container!: any;

  // When the component is updated, copy all the content from the slot into the container
  // And then delete the slot
  //

  updated() {
    const slotNodes = this.slot.assignedNodes();
    slotNodes.forEach((node: any) => {
      if (node.innerHTML) this.container.innerHTML += node.innerHTML;
    });
    this.slot.remove();
  }

  render() {
    return html`
      <slot></slot>
      <div id="container"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-email': HackEmail;
  }
}
