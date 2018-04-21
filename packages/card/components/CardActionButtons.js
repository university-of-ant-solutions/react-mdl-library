import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class CardActionButtons extends React.PureComponent {

  render() {
    const {children: childrenProp, className, style, type: Type, ...other} = this.props

    const children = React.Children.map(childrenProp, (child, key) => {
      if (child.type && child.type.displayName === 'Button') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-card__action mdc-card__action--button', child.props.className),
        })
      }
      return child
    })

    const classes = ClassNames(
      'mdc-card__action-buttons',
      className,
    )
    return (
      <div className={classes} style={style} {...other}>
        {children}
      </div>
    )
  }
}

CardActionButtons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

CardActionButtons.defaultProps = {
  className: '',
  style: {},
}

CardActionButtons.displayName = 'CardActionButtons'

export default CardActionButtons