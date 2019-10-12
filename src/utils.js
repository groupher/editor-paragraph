export const MD_TYPE = {
  "HEADER_1": "HEADER_1",
  "HEADER_2": "HEADER_2",
  "HEADER_3": "HEADER_3",
  "UNORDERED_LIST": "UNORDERED_LIST",
  "ORDERED_LIST": "ORDERED_LIST",
}

export const checkMarkdownSyntax = function(curBlock, data) {
  const blockText= curBlock.textContent.trim()
  let isValidMDStatus = true
  let MDType = ""

  switch(true) {
    case blockText=== '#' && data === ' ': {
      MDType = MD_TYPE.HEADER_1
      break
    }
    case blockText=== '##' && data === ' ': {
      MDType = MD_TYPE.HEADER_2
      break
    }

    case blockText=== '###' && data === ' ': {
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

    case blockText=== '-' && data === ' ': {
      MDType = MD_TYPE.UNORDERED_LIST
      break
    }

    case blockText=== '1' && data === ' ': {
      MDType = MD_TYPE.ORDERED_LIST
      break
    }

    default: {
      isValidMDStatus = false
    }
  }

  return { isValidMDStatus, MDType }
}

