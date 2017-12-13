import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

class Layout extends React.PureComponent {
  componentDidMount = () => {
    if (this.navigationLayout.offsetWidth <= 1024) {
      this.navigationLayout.classList.add('is-small-screen')
    } else {
      this.navigationLayout.classList.remove('is-small-screen')
    }
  }

  render() {
    const {
      children,
      className,
      style,
      scrollHeader,
      fixedHeader,
      fixedDrawer,
      fixedTabs,
      upgraded,
    } = this.props

    const classesContainer = ClassNames('mdl-layout__container', {
      'has-scrolling-header': scrollHeader,
    })

    const classesLayout = ClassNames(
      'mdl-layout',
      'mdl-js-layout',
      {'is-upgraded': upgraded},
      {'mdl-layout--fixed-header': fixedHeader},
      {'mdl-layout--fixed-drawer': fixedDrawer},
      {'mdl-layout--fixed-tabs': fixedTabs},
      className,
    )

    return (
      <div className={classesContainer}>
        <div
          className={classesLayout}
          style={style}
          ref={div => {
            this.navigationLayout = div
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  scrollHeader: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  fixedDrawer: PropTypes.bool,
  fixedTabs: PropTypes.bool,
  upgraded: PropTypes.bool,
}

Layout.defaultProps = {
  className: '',
  style: {},
  scrollHeader: false,
  fixedHeader: false,
  fixedDrawer: false,
  fixedTabs: false,
  upgraded: false,
}

export default Layout
