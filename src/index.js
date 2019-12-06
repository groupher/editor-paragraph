import './index.css'

import {
  checkMarkdownSyntax,
  checkInlineMarkdownSyntax,
  MD_TYPE,
  ANCHOR,
  insertHtmlAtCaret,
  moveCaret,
  selectNode,
  markdownBlockConfig
} from './utils'

/**
 * Base Paragraph Block for the Editor.js.
 * Represents simple paragraph
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} ParagraphData
 * @description Tool's input and output data format
 * @property {String} text — Paragraph's content. Can include HTML tags: <a><b><i>
 */
export default class Paragraph {
  static get toolbox() {
    return {
      icon: '<svg width="14" t="1575341316491" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3017" width="200" height="200"><path d="M537.6 281.6H358.4v256h179.2a128 128 0 1 0 0-256zM256 153.6h332.8v1.28a256 256 0 0 1 0 509.44V665.6H358.4v204.8a51.2 51.2 0 0 1-51.2 51.2H256a51.2 51.2 0 0 1-51.2-51.2V204.8a51.2 51.2 0 0 1 51.2-51.2z" p-id="3018"></path></svg>',
      title: '段落'
    };
  };


  /**
   * Default placeholder for Paragraph Tool
   *
   * @return {string}
   * @constructor
   */
  static get DEFAULT_PLACEHOLDER() {
    return "输入 'Tab' 快捷插入内容";
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ParagraphData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph',
      mention: 'cdx-mention'
    };
    this.onKeyUp = this.onKeyUp.bind(this);

    /**
     * Placeholder for paragraph if it is first Block
     * @type {string}
     */
    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;
    this._data = {};
    this._element = this.drawView();

    this.data = data;
  }



  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    console.log('delete detect');
    this.deleteTagsIfNeed();

    const { textContent } = this._element;

    if (textContent === '') {
      this._element.innerHTML = '';
    }
  }

  // see: https://stackoverflow.com/questions/2920150/insert-text-at-cursor-in-a-content-editable-div
  // insertTextAtCursor(text)

  /**
   * delete tags like mention, ..
   * @return {void}
   * @private
  */
  deleteTagsIfNeed() {
    if (window.getSelection) {
      let sel = window.getSelection();
      // console.log("sel: ", sel)
      // console.log("sel.anchorNode.parentNode.nodeName: ", sel.anchorNode.parentNode.nodeName)
      // console.log("sel.anchorNode.parentNode.className", sel.anchorNode.parentNode.className)
      // console.log("sel.anchorNode.parentNode.remove: ", sel.anchorNode.parentNode.remove)

      if (sel.anchorNode.parentNode.className === this._CSS.mention) {
        sel.anchorNode.parentNode.remove();
      }
    }
  }

  handleInlineMDShortcut(ev) {
    const curBlockIndex = this.api.blocks.getCurrentBlockIndex();
    const curBlock = this.api.blocks.getBlockByIndex(curBlockIndex);

    const { isValid, md, html } = checkInlineMarkdownSyntax(curBlock, ev.data)
    if (isValid) {
      const INLINE_MD_HOLDER = `<span id="${ANCHOR.INLINE_MD}" />`

      // 改变 innerHTML 以后光标会到内容的最开始，需要埋一个点，完事后在选中
      insertHtmlAtCaret(INLINE_MD_HOLDER)
      ev.target.innerHTML = ev.target.innerHTML.replace(md, html)
      selectNode(document.querySelector(`#${ANCHOR.INLINE_MD}`));
      document.querySelector(`#${ANCHOR.INLINE_MD}`).remove()

      // 防止插入粗体以后以后输入一直是粗体。。
      insertHtmlAtCaret(ANCHOR.SPACE);
    }
  }

  // handle markdown shortcuts
  /**
   * handle markdown shortcuts
   * currently support header, list
   * @param ev {HTMLElementEvent}
   * @return {void}
   * @private
  */
  handleMDShortcut(ev) {
    const curBlockIndex = this.api.blocks.getCurrentBlockIndex();
    const curBlock = this.api.blocks.getBlockByIndex(curBlockIndex);

    const { isValidMDStatus, MDType } = checkMarkdownSyntax(curBlock, ev.data)
    if (!isValidMDStatus) return false;

    // delete current block
    const { isInvalid, type, toolData, config } = markdownBlockConfig(MDType)

    if (!isInvalid) {
      this.api.blocks.delete(curBlockIndex);
      this.api.blocks.insert(type, toolData, config, curBlockIndex);
      // set cursor to first char
      this.api.caret.setToBlock(curBlockIndex, 'start');
    }
  }

  /**
   * handle mention (@)
   * @param ev {HTMLElementEvent}
   * @return {HTMLElementEvent}
   * @private
  */
  handleMention(ev) {
    if (ev.data === '@') {
      const mentionClass = this._CSS.mention
      const mention = `<span class="${mentionClass}" contenteditable="false" id="${mentionClass}" tabindex="1" style="opacity: 1;">.</span>`;
      const mentionId = `#${mentionClass}`;

      insertHtmlAtCaret(mention);

      insertHtmlAtCaret(ANCHOR.SPACE);
      insertHtmlAtCaret(ANCHOR.SPACE);

      const mentionParent = document.querySelector(mentionId).parentElement
      console.log('mentionParent ', mentionParent.innerHTML)
      mentionParent.innerHTML = mentionParent.innerHTML.replace('@' + mention, mention)
      selectNode(document.querySelector(mentionId));
    }
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = true;
    div.dataset.placeholder = this._placeholder;

    div.addEventListener('keyup', this.onKeyUp);

    // const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    // let observer = new MutationObserver(myFunction);
    // observer.observe(element, {
    //   childList: true
    // });

    this.api.listeners.on(div, 'input', (ev) => {
      this.handleMDShortcut(ev);
      this.handleInlineMDShortcut(ev);
      this.handleMention(ev);
      // console.log('Button clicked!');
    }, true);

    // div.addEventListener('input', (ev) => {
    //   this.handleMDShortcut(ev);
    //   this.handleInlineMDShortcut(ev);
    //   this.handleMention(ev);
    // });

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }

  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   * @param {ParagraphData} data
   * @public
   */
  merge(data) {
    let newData = {
      text: this.data.text + data.text
    };

    this.data = newData;
  }

  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData) {
    if (savedData.text.trim() === '') {
      return false;
    }

    return true;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(toolsContent) {
    return {
      text: toolsContent.innerHTML
    };
  }

  /**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(event) {
    const data = {
      text: event.detail.data.innerHTML
    };

    this.data = data;
  }

  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */
  static get conversionConfig() {
    return {
      export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: true,
      }
    };
  }

  /**
   * Get current Tools`s data
   * @returns {ParagraphData} Current data
   * @private
   */
  get data() {
    let text = this._element.innerHTML;

    this._data.text = text;

    return this._data;
  }

  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */
  set data(data) {
    this._data = data || {};

    this._element.innerHTML = this._data.text || '';
  }

  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ['P']
    };
  }
}
