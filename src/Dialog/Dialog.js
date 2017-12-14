import React from 'react'
import ClassNames from 'classnames'
import isString from 'lodash/isString'
import PropTypes from 'prop-types'

function Dialog(props) {
  const {
    actionsFullWidth,
    title,
    actions,
    children,
    className,
    style,
    open,
    close,
    disableBackdrop,
    styleBackdrop,
  } = props

  const classes = ClassNames('mdl-dialog', className)
  const classesObfuscator = ClassNames('mdl-layout__obfuscator', {'is-visible': open})
  let titleDialog
  if (isString(title)) {
    titleDialog = React.cloneElement(<h4>{title}</h4>, {
      className: ClassNames('mdl-dialog__title'),
    })
  }
  if (title && React.isValidElement(title)) {
    titleDialog = React.cloneElement(title, {
      className: ClassNames('mdl-dialog__title', title.props.className),
    })
  }
  let actionsDialog
  if (actions) {
    actionsDialog = React.cloneElement(<div>{actions}</div>, {
      className: ClassNames('mdl-dialog__actions', {
        'mdl-dialog__actions--full-width': actionsFullWidth,
      }),
    })
  }
  if (disableBackdrop) {
    return (
      <dialog key={0} className={classes} style={style} open={open}>
        {titleDialog}
        <div className="mdl-dialog__content">{children}</div>
        {actionsDialog}
      </dialog>
    )
  }
  return [
    <dialog key={0} className={classes} style={style} open={open}>
      {titleDialog}
      <div className="mdl-dialog__content">{children}</div>
      {actionsDialog}
    </dialog>,
    <div key={1} className={classesObfuscator} onClick={close} style={styleBackdrop} />,
  ]
}

Dialog.propTypes = {
  actions: PropTypes.node,
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool,
  actionsFullWidth: PropTypes.bool,
  close: PropTypes.func.isRequired,
  disableBackdrop: PropTypes.bool,
  styleBackdrop: PropTypes.object,
}

Dialog.defaultProps = {
  actions: null,
  title: null,
  children: null,
  className: '',
  style: {},
  open: false,
  actionsFullWidth: false,
  disableBackdrop: false,
  styleBackdrop: {},
}

export default Dialog
