import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function Line({className}) {
  const classes = ClassNames('mdc-placeholder__line', className)

  return (
    <div className={classes}/>
  )
}

Line.displayName = 'placeholder(Line)'

export default Line
