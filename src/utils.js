export const ANCHOR = {
  'SPACE': '&nbsp;',
  'INLINE_MD': 'inline_tmp_anchor',
}

export const MD_TYPE = {
  "HEADER_1": "HEADER_1",
  "HEADER_2": "HEADER_2",
  "HEADER_3": "HEADER_3",
  "UNORDERED_LIST": "UNORDERED_LIST",
  "ORDERED_LIST": "ORDERED_LIST",
  "QUOTE": "QUOTE",
  "CODE": "CODE",
}

// see https://www.markdownguide.org/basic-syntax/
const MD_REG = {
  BOLD: new RegExp(/\*\*(.*?)\*\*/),
  BOLD2: new RegExp(/__(.*?)__/),
  ITALIC: new RegExp(/_(.*?)_/),
  ITALIC2: new RegExp(/\*(.*?)\*/),
  // NOTE:  marker is extended
  MARKER: new RegExp(/==(.*?)==/),
  INLINECODE: new RegExp(/\`(.*?)\`/)
}

/**
 * TODO
 *
 * @param {{data: ParagraphData, config: object, api: object}}
 *   data — previously saved data
 *   config - user config for Tool
 *   api - Editor.js API
 */
export const checkMarkdownSyntax = function(curBlock, data) {
  const blockText = curBlock.textContent.trim()
  let isValidMDStatus = true
  let MDType = ""

  // TODO:  length check if blockText.length > 6 break

  switch(true) {
    case blockText === '#' && data === ' ': {
      MDType = MD_TYPE.HEADER_1
      break
    }
    case blockText === '##' && data === ' ': {
      MDType = MD_TYPE.HEADER_2
      break
    }

    case blockText === '###' && data === ' ': {
      MDType = MD_TYPE.HEADER_3
      break
    }

    case blockText === '####' && data === ' ': {
      MDType = MD_TYPE.HEADER_3
      break
    }

    case blockText === '#####' && data === ' ': {
      MDType = MD_TYPE.HEADER_3
      break
    }

    case blockText === '######' && data === ' ': {
      MDType = MD_TYPE.HEADER_3
      break
    }

    case blockText === '-' && data === ' ': {
      MDType = MD_TYPE.UNORDERED_LIST
      break
    }

    case blockText === '1' && data === ' ': {
      MDType = MD_TYPE.ORDERED_LIST
      break
    }
    
    case blockText === '>' && data === ' ': {
      MDType = MD_TYPE.QUOTE
      break
    }

    case blockText === '```': {
      MDType = MD_TYPE.CODE
      break
    }

    default: {
      isValidMDStatus = false
    }
  }

  return { isValidMDStatus, MDType }
}

export const markdownBlockConfig = function(type) {
  switch(type) {
    case MD_TYPE.HEADER_1: 
      return {
        type: 'header',
        toolData: {'level': 1},
        config: {},
      }
    case MD_TYPE.HEADER_2: 
      return {
        type: 'header',
        toolData: {'level': 2},
        config: {},
      }
    case MD_TYPE.HEADER_3: 
      return {
        type: 'header',
        toolData: {'level': 3},
        config: {},
      }
    
    case MD_TYPE.UNORDERED_LIST: 
      return {
        type: 'list',
        toolData: {'style': 'unordered'},
        config: {},
      }

    case MD_TYPE.ORDERED_LIST: 
      return {
        type: 'list',
        toolData: {'style': 'ordered'},
        config: {},
      }
    
    case MD_TYPE.QUOTE: 
      return {
        type: 'quote',
        toolData: {},
        config: {},
      }

    case MD_TYPE.CODE: 
      return {
        type: 'code',
        toolData: {},
        config: {},
      }

    default: {
      return { isInvalid: false, type: '', toolData: '', config: '' }
    }
  }
}

// inline markdown syntax
export const checkInlineMarkdownSyntax = function(curBlock, data) {
  const blockText = curBlock.textContent.trim()
  const { BOLD, BOLD2 } = MD_REG

  const boldTexts = blockText.match(BOLD) || blockText.match(BOLD2)
  if(boldTexts) {
    const content = boldTexts[0]
    const rawContent = boldTexts[1]

    return { isValid: true, md: content, html: `<b>${rawContent}</b>` }
  }

  return { isValid: false, text: ''}
  // blockText.match(boldReg) ...
  // then return replace string
}


  // NOTE:  html is string
  // see: https://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
  // demo: http://jsfiddle.net/jwvha/1/
  export const insertHtmlAtCaret = function(html) {
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

  // select a html node
  export const selectNode = function(node) {
    if (document.body.createTextRange) {
      const range = document.body.createTextRange();

      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();

      // range.collapse(true);
      // const startIndex = 6;
      // const endIndex = 7; // node.textContent.length;

      // range.setStart(node.childNodes[0], startIndex);
      // range.setEnd(node.childNodes[0], endIndex);

      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      // console.log('2 -->', range.extractContents());
    } else {
      console.warn('Could not select text in node: Unsupported browser.');
    }
  }

  // move caret to next n count
  export const moveCaret = function(win, charCount) {
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


