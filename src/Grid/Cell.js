import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import isNumber from 'lodash/isNumber'

function Cell(props) {
  const {
    children,
    className,
    style,
    col,
    colTablet,
    colPhone,
    hideDesktop,
    hidePhone,
    hideTablet,
  } = props

  const classes = ClassNames(
    `mdl-cell`,
    {
      [`mdl-cell--${col}-col`]: isNumber(col) && col > 0,
      [`mdl-cell--${colTablet}-col-tablet`]: isNumber(colTablet) && colTablet > 0,
      [`mdl-cell--${colPhone}-col-phone`]: isNumber(colPhone) && colPhone > 0,
      'mdl-cell--hide-desktop': hideDesktop,
      'mdl-cell--hide-phone': hidePhone,
      'mdl-cell--hide-tablet': hideTablet,
    },
    className,
  )

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  col: PropTypes.number,
  colTablet: PropTypes.number,
  colPhone: PropTypes.number,
  hideDesktop: PropTypes.bool,
  hidePhone: PropTypes.bool,
  hideTablet: PropTypes.bool,
}

Cell.defaultProps = {
  children: '',
  className: '',
  style: {},
  col: 0,
  colTablet: 0,
  colPhone: 0,
  hideDesktop: false,
  hidePhone: false,
  hideTablet: false,
}

export default Cell
