import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ToolbarSection extends Component {

  render() {
    const {children, className, start, end, shrink, ...other} = this.props
    const classes = ClassNames(
      'mdc-toolbar__section',
      {'mdc-toolbar__section--align-start': start},
      {'mdc-toolbar__section--align-end': end},
      {'mdc-toolbar__section--shrink-to-fit': shrink},
      className,
    )

    return (
      <section className={classes} {...other}>
        {children}
      </section>
    )
  }
}

ToolbarSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  start: PropTypes.bool,
  end: PropTypes.bool,
  shrink: PropTypes.bool,
}

ToolbarSection.defaultProps = {
  start: false,
  end: false,
  shrink: false,
}

ToolbarSection.displayName = 'ToolbarSection'

export default ToolbarSection