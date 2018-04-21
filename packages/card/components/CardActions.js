import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class CardActions extends React.PureComponent {

  render() {
    const {children: childrenProp, className, style, type: Type, ...other} = this.props
    const classes = ClassNames(
      'mdc-card__actions',
      className,
    )
    const children = React.Children.map(childrenProp, (child, key) => {
      if (child.type && child.type.displayName === 'Button') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-card__action mdc-card__action--button', child.props.className),
        })
      }
      if (child.type && child.type.displayName === 'Icon') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-card__action mdc-card__action--icon', child.props.className),
        })
      }
      return child
    })
    return (
      <div className={classes} style={style} {...other}>
        {children}
      </div>
    )
  }
}

CardActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

CardActions.defaultProps = {
  className: '',
  style: {},
}

CardActions.displayName = 'CardActions'

export default CardActions