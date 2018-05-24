import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function Rect({className}) {
  const classes = ClassNames('mdc-placeholder__rect', className)

  return (
    <div className={classes}/>
  )
}

Rect.displayName = 'placeholder(Rect)'

export default Rect
