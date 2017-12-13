import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function Loading(props) {
  const {className, style} = props

  const classes = ClassNames(
    `mdl-progress`,
    `mdl-js-progress`,
    `mdl-progress__indeterminate`,
    `is-upgraded`,
    className,
  )

  return (
    <div className={classes} style={style}>
      <div className="progressbar bar bar1" style={{width: '0%'}} />
      <div className="bufferbar bar bar2" style={{width: '100%'}} />
      <div className="auxbar bar bar3" style={{width: '0%'}} />
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Loading.defaultProps = {
  className: '',
  style: {},
}

export default Loading
