
export const checkMarkdownSyntax = function(curBlock, data) {
  const blockText= curBlock.textContent.trim()
  let isValidMDStatus = true
  let MDType = ""

  switch(true) {
    case blockText=== '#' && data === ' ': {
      MDType = 'MD_HEADER_1'
      break
    }
    case blockText=== '##' && data === ' ': {
      MDType = 'MD_HEADER_2'
      break
    }

    case blockText=== '###' && data === ' ': {
      MDType = 'MD_HEADER_3'
      break
    }

    case blockText === '####' && data === ' ': {
      MDType = 'MD_HEADER_3'
      break
    }

    case blockText === '#####' && data === ' ': {
      MDType = 'MD_HEADER_3'
      break
    }

    case blockText === '######' && data === ' ': {
      MDType = 'MD_HEADER_3'
      break
    }

    default: {
      isValidMDStatus = false
    }
  }

  return { isValidMDStatus, MDType }
}

export const holder = 1
