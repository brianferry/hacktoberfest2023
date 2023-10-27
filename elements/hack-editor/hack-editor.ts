import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import { query } from 'lit/decorators/query.js';
import 'monaco-editor/min/vs/loader.js';

import styles from './hack-editor.css';

/**
 * Editor
 * @slot - Place element content here
 */
@customElement('hack-editor')
export class HackEditor extends LitElement {
  static readonly styles = [styles];

  @queryAssignedElements({ selector: 'template' }) private _slot!: HTMLElement;
  @query('#editor' ) private _editor!: HTMLElement;
  private _monacoEditor: unknown;

  get template() {
    return this._slot.innerHTML;
  }

  connectedCallback(): void {
    super.connectedCallback();
    /*
    this._monacoEditor = monaco.editor.create(this._editor, {
      automaticLayout: true,
      language: 'html',
      value: `<div>Hello World</div>`,
    });
    */
  }

  render() {
    return html`
      <div id="editor" style="overflow: hidden; width: 100%; height: 100%; position: absolute"></div>
      <slot hidden @slotchange="${this.#onSlotChange}"></slot>
    `;
  }

  #onSlotChange() {
    this.template;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-editor': HackEditor;
  }
}
