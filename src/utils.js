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

