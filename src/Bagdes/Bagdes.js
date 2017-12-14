import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function Bagdes(props) {
  const {children, className, style, text, icon, overlap} = props
  const classes = ClassNames(
    'mdl-badge',
    {'material-icons': icon},
    {'mdl-badge--overlap': overlap},
    className,
  )
  return (
    <span className={classes} data-badge={text} style={style}>
      {children}
    </span>
  )
}

Bagdes.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  icon: PropTypes.bool,
  overlap: PropTypes.bool,
}

Bagdes.defaultProps = {
  className: '',
  style: {},
  text: '',
  icon: false,
  overlap: false,
}

export default Bagdes
