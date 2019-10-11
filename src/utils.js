export const MD_TYPE = {
  "HEADER_1": "HEADER_1",
  "HEADER_2": "HEADER_2",
  "HEADER_3": "HEADER_3",
  // "HEADER_4": "HEADER_4",
  // "HEADER_5": "HEADER_6",
  // "HEADER_6": "HEADER_6",
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

    default: {
      isValidMDStatus = false
    }
  }

  return { isValidMDStatus, MDType }
}

