import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function Circle({className}) {
  const classes = ClassNames('mdc-placeholder__circle', className)

  return (
    <div className={classes}/>
  )
}

Circle.displayName = 'placeholder(Circle)'

export default Circle
