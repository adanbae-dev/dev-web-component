import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'

import style from './my-element.scss?inline';
import TailwindElement from './shared/tailwind.element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends TailwindElement(style) {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button"
        class="bg-red-200 text-yellow-200 p-2 rounded-full text-2xl"
        >
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  // static styles = unsafeCSS(style);
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
