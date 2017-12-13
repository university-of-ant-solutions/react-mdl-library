import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

function HeaderRow(props) {
  const {children, className, style, title} = props

  const classes = ClassNames('mdl-layout__header-row', className)

  return (
    <div className={classes}>
      <span className="mdl-layout-title">{title}</span>
      {title !== '' && <div className="mdl-layout-spacer" />}
      {children}
    </div>
  )
}

HeaderRow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
}

HeaderRow.defaultProps = {
  className: '',
  style: {},
  title: '',
}

export default HeaderRow
