import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

class CardActionIcons extends React.PureComponent {

  render() {
    const {children: childrenProp, className, style, type: Type, ...other} = this.props

    const children = React.Children.map(childrenProp, (child, key) => {
      if (child.type && child.type.displayName === 'Icon') {
        return React.cloneElement(child, {
          className: ClassNames('mdc-card__action mdc-card__action--icon', child.props.className),
        })
      }
      return child
    })

    const classes = ClassNames(
      'mdc-card__action-icons',
      className,
    )
    return (
      <div className={classes} style={style} {...other}>
        {children}
      </div>
    )
  }
}

CardActionIcons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

CardActionIcons.defaultProps = {
  className: '',
  style: {},
}

CardActionIcons.displayName = 'CardActionIcons'

export default CardActionIcons