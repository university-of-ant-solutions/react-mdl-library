export function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className)
  } else {
    node.className += ` ${className}`
  }
}

export function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className)
  } else {
    node.className = node.className.replace(
      new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
      ' ',
    )
  }
}
