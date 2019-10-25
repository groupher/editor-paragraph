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
  // BOLD_old: new RegExp(/\*\*(.*?)\*\*/),
  BOLD: new RegExp(/\*\*([\S]{1,})\*\*/),
  ITALIC: new RegExp(/__([\S]{1,})__/),
  // NOTE:  marker is extended
  MARKER: new RegExp(/==([\S]{1,})==/),
  INLINECODE: new RegExp(/\`([\S]{1,})\`/)
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

// parse the match info given by string.match(regex)
const parseMatchTexts = function(texts) {
  return {
    md: texts[0],
    content: texts[1],
    isValid:  true, // texts[1].length > 0
  }
}

// inline markdown syntax
export const checkInlineMarkdownSyntax = function(curBlock, data) {
  const blockText = curBlock.textContent.trim()
  const { BOLD, ITALIC, MARKER, INLINECODE } = MD_REG

  const boldTexts = blockText.match(BOLD)
  if(boldTexts) {
    const { isValid, md, content } = parseMatchTexts(boldTexts)
    return { isValid, md, html: `<b>${content}</b>` }
  }

  const markerTexts = blockText.match(MARKER)
  if(markerTexts) {
    const { isValid, md, content } = parseMatchTexts(markerTexts)
    return { isValid, md, html: `<mark class="cdx-marker">${content}</mark>` }
  }

  const italicTexts = blockText.match(ITALIC)
  if(italicTexts) {
    const { isValid, md, content } = parseMatchTexts(italicTexts)
    return { isValid, md, html: `<i>${content}</i>` }
  }

  const inlineCodeTexts = blockText.match(INLINECODE)
  if(inlineCodeTexts) {
    const { isValid, md, content } = parseMatchTexts(inlineCodeTexts)
    return { isValid, md, html: `<code class="inline-code">${content}</code>` }
  }

  return { isValid: false, text: ''}
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


