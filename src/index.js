import './index.css'

import { checkMarkdownSyntax } from './utils'

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
  /**
   * Default placeholder for Paragraph Tool
   *
   * @return {string}
   * @constructor
   */
  static get DEFAULT_PLACEHOLDER() {
    return '';
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: ParagraphData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph'
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

  selectNode(node) {
    if (document.body.createTextRange) {
      const range = document.body.createTextRange();

      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();

      // console.log('node.textContent: ', node.textContent);
      // console.log('node.childNodes: ', node.childNodes);
      // console.log('node.textContent.length: ', node.textContent.length);
      // console.log('node.textContent.length: ', node.textContent.trim().length);
      // range.collapse(true);
      // const startIndex = 6;
      // const endIndex = 7; // node.textContent.length;

      // range.setStart(node.childNodes[0], startIndex);
      // range.setEnd(node.childNodes[0], endIndex);

      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      // console.log('2 -->', range.extractContents());

      console.log('2 -->');
    } else {
      console.warn('Could not select text in node: Unsupported browser.');
    }
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

    const {textContent} = this._element;

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

      if(sel.anchorNode.parentNode.className === 'cdx-mention') {
        sel.anchorNode.parentNode.remove();
      }
    }
  }
  // NOTE:  html is string
  // see: https://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
  // demo: http://jsfiddle.net/jwvha/1/
  insertHtmlAtCaret(html) {
    let sel, range;

    if (window.getSelection) {
      // IE9 and non-IE
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();

        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        const el = document.createElement('div');

        el.innerHTML = html;
        var frag = document.createDocumentFragment(), node, lastNode;

        while ( (node = el.firstChild) ) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);

        // Preserve the selection
        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
  }

  // move caret to next n count
  moveCaret(win, charCount) {
    var sel, range;

    if (win.getSelection) {
      sel = win.getSelection();
      if (sel.rangeCount > 0) {
        var textNode = sel.anchorNode.parentNode; // sel.focusNode;

        // debugger;

        var newOffset = sel.focusOffset + charCount;

        // sel.collapse(textNode, Math.min(textNode.length, newOffset));
        sel.collapse(textNode, 3);
      }
    } else if ( (sel = win.document.selection) ) {
      if (sel.type != 'Control') {
        range = sel.createRange();
        range.move('character', charCount);
        range.select();
      }
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
    if(!isValidMDStatus) return false;

    // delete current block
    this.api.blocks.delete(curBlockIndex);

    // insert markdown related block
    switch(MDType) {
      case "MD_HEADER_1": {
        this.api.blocks.insert('header', {'level': 1}, {}, curBlockIndex);
        break;
      }
      case "MD_HEADER_2": {
        this.api.blocks.insert('header', {'level': 2}, {}, curBlockIndex);
        break;
      }
      case "MD_HEADER_3": {
        this.api.blocks.insert('header', {'level': 3}, {}, curBlockIndex);
        break;
      }
      default: {
        console.log("not supported")
      }
    }

    // set cursor to first char
    this.api.caret.setToBlock(curBlockIndex, 'start');
  }

  /**
   * handle mention (@)
   * @param ev {HTMLElementEvent}
   * @return {HTMLElementEvent}
   * @private
  */
  handleMention(ev) {
    if(ev.data === '@') {
      // return false
      const mention = '<span class="cdx-mention" contenteditable="false" id="cdx-mention" tabindex="1" style="opacity: 1;">.</span>';
      const mentionId = '#cdx-mention';

      this.insertHtmlAtCaret(mention);

      const spaceHolder = '&nbsp;';
      this.insertHtmlAtCaret(spaceHolder);
      this.insertHtmlAtCaret(spaceHolder);

      const mentionParent = document.querySelector(mentionId).parentElement
      console.log('mentionParent ', mentionParent.innerHTML )
      mentionParent.innerHTML = mentionParent.innerHTML.replace('@' + mention, mention)
      this.selectNode(document.querySelector(mentionId));
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

    div.addEventListener('input', (ev) => {
      this.handleMDShortcut(ev);
      this.handleMention(ev);
    });

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
      text : this.data.text + data.text
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
      tags: [ 'P' ]
    };
  }
}
