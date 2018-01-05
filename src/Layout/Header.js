import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import FontIcon from '../FontIcon'

class Header extends React.PureComponent {
  render() {
    const {
      children,
      className,
      style,
      transparent,
      scroll,
      waterfall,
      hideTop,
      isTabsHidden,
    } = this.props

    const classes = ClassNames(
      'mdl-layout__header',
      {'mdl-layout__header--transparent': transparent},
      {'mdl-layout__header--scroll': scroll},
      {'mdl-layout__header--waterfall': waterfall},
      {'mdl-layout__header--waterfall-hide-top': hideTop},
      {'is-casting-shadow is-compact': isTabsHidden && waterfall},
      className,
    )

    return (
      <header className={classes} style={style}>
        {children}
      </header>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  transparent: PropTypes.bool,
  scroll: PropTypes.bool,
  waterfall: PropTypes.bool,
  hideTop: PropTypes.bool,
  isTabsHidden: PropTypes.bool,
}

Header.defaultProps = {
  className: '',
  style: {},
  transparent: false,
  scroll: false,
  waterfall: false,
  hideTop: false,
  isTabsHidden: false,
}

export default Header
