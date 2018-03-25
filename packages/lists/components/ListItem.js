import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class ListItem extends Component {
  
  render() {
    const {children: childrenProp, className, primary, secondary, divider,  type: Type, ...other} = this.props
    const classes = ClassNames(
      'mdc-list-item',
      {'mdc-list-divider': divider},
      className,
    )

    if(divider) {
      other.role = 'separator'
    }

    let p = null
    if(primary && secondary) {
      p = (
        <span className="mdc-list-item__text">
          {primary}
          <span className="mdc-list-item__secondary-text">
            {secondary}
          </span>
        </span>
      )
    } else if(primary) {
      p = (
        <span className="mdc-list-item__text">
          {primary}
        </span>
      )
    } else if(secondary) {
      p = (
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__secondary-text">
            {secondary}
          </span>
        </span>
      )
    }

    const children = React.Children.map(childrenProp, child => {
      // if(isString(child)) {
      //   return (
      //     <span className="mdc-tab__icon-text">{child}</span>
      //   )
      // }
      // if (!React.isValidElement(child)) {
      //   return null
      // }
      if (child.type && child.type.displayName === 'Icon') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-list-item__graphic', child.props.className),
        })
      }
      return child
    })


    return (
      <Type className={classes} {...other}>
        {children}
        {p}
      </Type>
    )
  }
}

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  divider: PropTypes.bool,
  type: PropTypes.string,

}

ListItem.defaultProps = {
  divider: false,
  type: 'li',
}

ListItem.displayName = 'ListItem'

export default ListItem
