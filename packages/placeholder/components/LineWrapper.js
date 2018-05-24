import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function LineWrapper({className, children}) {
  const classes = ClassNames('mdc-placeholder__line-wrapper', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

LineWrapper.displayName = 'placeholder(LineWrapper)'

export default LineWrapper
