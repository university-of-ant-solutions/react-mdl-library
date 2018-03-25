
const FOCUSABLE_ELEMENTS =
'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'

export const cssClasses = {
  OPEN: 'mdc-drawer--open',
  ANIMATING: 'mdc-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock',
}

export const strings = {
  DRAWER_SELECTOR: '.mdc-drawer--temporary .mdc-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS,
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close',
}
