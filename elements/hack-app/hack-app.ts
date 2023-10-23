import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import '../hack-email/hack-email.js';
import '../hack-output/hack-output.js';

import styles from './hack-app.css';

/**
 * App
 * @slot - Place element content here
 */
@customElement('hack-app')
export class HackApp extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <div class="container">
        <section class="left">
          <section class="preview">
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
          </section>
          <section class="editor">
            <h1>Editor</h1>
            <main>test</main>
            <p>HTML is a language for describing web pages...</p>
          </section>
        </section>
        <section class="right">
          <section class="output">
            <hack-output></hack-output>
          </section>
        </section>
      </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hack-app': HackApp;
  }
}
