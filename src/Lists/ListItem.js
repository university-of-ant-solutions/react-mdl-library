import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function ListItem(props) {
  let {leftIcon, secondaryText, subTitle, secondaryInfo, type: Type, onClick} = props
  const {leftAvatar, className, primaryContent, secondaryAction} = props
  let classes = ClassNames('mdl-list__item', className)
  if (leftIcon && React.isValidElement(leftIcon)) {
    leftIcon = React.cloneElement(leftIcon, {
      className: ClassNames('mdl-list__item-icon', leftIcon.props.className),
    })
  }
  if (subTitle) {
    subTitle = React.cloneElement(<span>{subTitle}</span>, {
      className: ClassNames('mdl-list__item-sub-title'),
    })
    classes = ClassNames('mdl-list__item--two-line', classes)
  }
  if (secondaryText) {
    secondaryText = React.cloneElement(<span>{secondaryText}</span>, {
      className: ClassNames('mdl-list__item-text-body'),
    })
    classes = ClassNames('mdl-list__item--three-line', classes)
  }
  if (secondaryInfo) {
    secondaryInfo = React.cloneElement(<span>{secondaryInfo}</span>, {
      className: ClassNames('mdl-list__item-secondary-info'),
    })
  }
  return (
    <Type className={classes} onClick={onClick}>
      <span className="mdl-list__item-primary-content">
        {leftIcon}
        {leftAvatar}
        {primaryContent}
        {subTitle}
        {secondaryText}
      </span>
      <span className="mdl-list__item-secondary-content">
        {secondaryInfo}
        <a className="mdl-list__item-secondary-action" href="#">
          {secondaryAction}
        </a>
      </span>
    </Type>
  )
}

ListItem.propTypes = {
  leftAvatar: PropTypes.node,
  leftIcon: PropTypes.node,
  primaryContent: PropTypes.node,
  secondaryText: PropTypes.node,
  subTitle: PropTypes.string,
  secondaryAction: PropTypes.node,
  secondaryInfo: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

// Specifies the default values for props:
ListItem.defaultProps = {
  children: '',
  type: 'li',
  leftAvatar: null,
  leftIcon: null,
  primaryContent: null,
  secondaryText: null,
  subTitle: '',
  secondaryAction: null,
  secondaryInfo: '',
  onClick: () => {},
}

export default ListItem
