import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '@rhds/elements/rh-code-block/rh-code-block.js';
// @ts-ignore
import { CodeEditor } from '@lrnwebcomponents/code-editor/code-editor.js';

import '../hack-email/hack-email.js';
import '../hack-output/hack-output.js';

import styles from './hack-app.css';
import { query } from 'lit/decorators/query.js';
import { HackEmail } from '../hack-email/hack-email.js';

/**
 * App
 * @slot - Place element content here
 */
@customElement('hack-app')
export class HackApp extends LitElement {
  static readonly styles = [styles];

  @query('hack-email')
    hackEmail!: HackEmail | null;

  @query('#editor')
    editor!: CodeEditor | null;

  get #editorValue() {
    const email = this.hackEmail?.innerHTML.trim() || '';
    return email.replace(/(\n+\s*)+/g, '\n');
  }

  updated() {
    if (this.hackEmail && this.editor) {
      this.editor.editorValue = this.#editorValue;
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="input">
          <div class="preview">
            <hack-email>
              <html>
                <head>
                  <title>My Page</title>
                  <style>
                    main {
                      background-color: #bada55;
                      height: 100%;
                      display: flex;
                      flex-flow: column;
                    }
                    header,
                    header > h1{
                      background-color: #fff;
                      color: #000;
                    }
                  </style>
                </head>
                <body>
                  <header>
                    <h1>Welcome to My Page</h1>
                  </header>
                  <main>
                    <img src="https://via.placeholder.com/350x150" alt="placeholder">
                    <p>This is the body of my page.</p>
                  </main>
                  <footer>
                    <p>&copy; 2023 My Page</p>
                  </footer>
                </body>
              </html>
            </hack-email>
          </div>
          <div class="editor">
            <code-editor id="editor" language="html" read-only></code-editor>
          </div>
        </div>
        <div class="output">
          <hack-output></hack-output>
        </div>
      </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-app': HackApp;
  }
}
