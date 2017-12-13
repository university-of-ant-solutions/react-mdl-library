import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import Button from './Button'
import FontIcon from '../FontIcon'

function IconButton(props) {
  const {className, icon, color, disabled, ripple, ...other} = props
  const classes = ClassNames('mdl-button--icon', className)
  return (
    <Button className={classes} color={color} disabled={disabled} ripple={ripple} {...other}>
      <FontIcon>{icon}</FontIcon>
    </Button>
  )
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  ripple: PropTypes.bool,
}

IconButton.defaultProps = {
  className: '',
  icon: '',
  color: '',
  disabled: false,
  ripple: false,
}

export default IconButton
