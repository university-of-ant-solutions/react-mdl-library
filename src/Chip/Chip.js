import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import isString from 'lodash/isString'
import FontIcon from '../FontIcon'

class Chip extends React.Component {
  handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation()
    const {onRequestDelete} = this.props
    if (onRequestDelete) {
      onRequestDelete(event)
    }
  }

  render() {
    const {
      avatar: avatarProp,
      label,
      className,
      deleteIcon: deleteIconProp,
      type,
      onClick,
      onRequestDelete,
    } = this.props
    let classes = ClassNames('mdl-chip', className)
    let deleteIcon = null
    if (onRequestDelete && deleteIconProp && React.isValidElement(deleteIconProp)) {
      deleteIcon = (
        <button onClick={this.handleDeleteIconClick} type="button" className="mdl-chip__action">
          {deleteIconProp}
        </button>
      )
    } else if (deleteIconProp && React.isValidElement(deleteIconProp)) {
      deleteIcon = (
        <button type="button" className="mdl-chip__action">
          {deleteIconProp}
        </button>
      )
    } else if (onRequestDelete) {
      deleteIcon = (
        <button onClick={this.handleDeleteIconClick} type="button" className="mdl-chip__action">
          <FontIcon>cancel</FontIcon>
        </button>
      )
    }
    let avatar = null
    if (avatarProp && React.isValidElement(avatarProp)) {
      avatar = React.cloneElement(avatarProp, {
        className: ClassNames('mdl-chip__contact', avatarProp.props.className),
      })
    }
    if (avatarProp) {
      classes = ClassNames(classes, 'mdl-chip--contact')
    }
    if (deleteIconProp || onRequestDelete) {
      classes = ClassNames(classes, 'mdl-chip--deletable')
    }
    if (type === 'button') {
      return (
        <button onClick={onClick} className={classes}>
          {avatar}
          <span className="mdl-chip__text">{label}</span>
          {deleteIcon}
        </button>
      )
    }
    return (
      <span onClick={onClick} className={classes}>
        {avatar}
        <span className="mdl-chip__text">{label}</span>
        {deleteIcon}
      </span>
    )
  }
}

Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: PropTypes.node,
  /**
   * The content of the label.
   */
  label: PropTypes.string,
  /**
   * Custom delete icon. Will be shown only if `onRequestDelete` is set.
   */
  deleteIcon: PropTypes.element,

  className: PropTypes.string,

  type: PropTypes.oneOf(['span', 'button']),

  onClick: PropTypes.function,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onRequestDelete: PropTypes.function,
}

// Specifies the default values for props:
Chip.defaultProps = {
  label: '',
  className: '',
  type: 'span',
}

export default Chip
