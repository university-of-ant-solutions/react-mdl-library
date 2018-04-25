// http://youmightnotneedjquery.com/

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

export function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className)
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(node.className)
  }
}

export function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler)
  } else {
    el.attachEvent('on' + eventName, function(){
      handler.call(el)
    })
  }
}

export function removeEventListener(el, eventName, handler) {
  if (el.removeEventListener)
    el.removeEventListener(eventName, handler);
  else
    el.detachEvent('on' + eventName, handler);
}

export function registerDocumentKeydownHandler(handler) {
  if(!document) return
  document.addEventListener('keydown', handler)
}

export function deregisterDocumentKeydownHandler(handler) {
  if(!document) return
  document.removeEventListener('keydown', handler)
}

const TAB_DATA = 'data-mdc-tabindex';
const TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

export function makeElementUntabbable(el) {
  el.setAttribute('tabindex', -1)
}

// Save the tab state for an element.
export function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
// https://github.com/material-components/material-components-web/blob/3a1f1eae9d252e65615add7e9cabbe8bc3742412/packages/mdc-drawer/util.js#L84
export function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

// https://github.com/Metrime/randomID

export function randomID(len, pattern) {
  const possibilities = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    "~!@#$%^&()_+-={}[];',",
  ]
  let chars = ''

  const patternData = pattern || 'aA0'
  patternData.split('').forEach(a => {
    if (!isNaN(parseInt(a))) {
      chars += possibilities[2]
    } else if (/[a-z]/.test(a)) {
      chars += possibilities[0]
    } else if (/[A-Z]/.test(a)) {
      chars += possibilities[1]
    } else {
      chars += possibilities[3]
    }
  })

  let lenData = len || 30

  let result = ''

  while (lenData--) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return result
}
