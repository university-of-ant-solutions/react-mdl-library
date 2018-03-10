import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {addClass, removeClass} from '../utils'

class Textfield extends React.PureComponent {
  onChange = () => {
    const currentRowCount = this.input.value.length
    const {error} = this.props
    const checkValidate = this.input.validity.valid

    if (currentRowCount > 0) {
      addClass(this.textField, 'is-dirty')
    } else {
      removeClass(this.textField, 'is-dirty')
    }
    if (error !== null && !checkValidate) {
      addClass(this.textField, 'is-invalid')
    } else if (error === null || checkValidate) {
      removeClass(this.textField, 'is-invalid')
    } else {
      removeClass(this.textField, 'is-invalid')
    }

    this.props.onChangeValue(this.input.value)
  }

  downHandler = () => {
    addClass(this.textField, 'is-focused')
  }

  upHandler = () => {
    removeClass(this.textField, 'is-focused')
  }

  componentDidMount = () => {
    const currentRowCount = this.input.value.length

    if (currentRowCount > 0) {
      addClass(this.textField, 'is-dirty')
    } else {
      removeClass(this.textField, 'is-dirty')
    }
  }

  render() {
    const {
      type,
      className,
      style,
      label,
      pattern,
      error,
      floatingLabel,
      rows,
      expandable,
      value,
    } = this.props
    const classes = ClassNames(
      'mdl-textfield',
      'mdl-js-textfield',
      'is-upgraded',
      {'mdl-textfield--floating-label': floatingLabel},
      {'mdl-textfield--expandable': expandable},
      className,
    )
    let children = null
    if (type === 'input') {
      children = (
        <input
          className="mdl-textfield__input"
          type="text"
          pattern={pattern}
          ref={input => {
            this.input = input
          }}
          onChange={this.onChange}
          value={value}
        />
      )
    }
    if (type === 'textarea') {
      children = (
        <textarea
          className="mdl-textfield__input"
          type="text"
          rows={rows}
          ref={input => {
            this.input = input
          }}
          onChange={this.onChange}
        />
      )
    }
    if (type === 'search') {
      children = (
        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-input">
          <i className="material-icons">search</i>
        </label>
      )
    }

    return (
      <form action="#">
        <div
          className={classes}
          style={style}
          ref={div => {
            this.textField = div
          }}
          onFocus={this.downHandler}
          onTouchStart={this.downHandler}
          onTouchEnd={this.upHandler}
          onBlur={this.upHandler}
        >
          {children}
          {expandable && label ? (
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-input" />
              <label className="mdl-textfield__label" htmlFor="sample-expandable">
                {label}
              </label>
            </div>
          ) : (
            <label className="mdl-textfield__label">{label}</label>
          )}
          {error !== null && <span className="mdl-textfield__error">{error}</span>}
        </div>
      </form>
    )
  }
}

Textfield.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
  pattern: PropTypes.string,
  error: PropTypes.string,
  rows: PropTypes.number,
  expandable: PropTypes.bool,
  floatingLabel: PropTypes.bool,
  onChangeValue: PropTypes.func,
  value: PropTypes.string,
}

Textfield.defaultProps = {
  type: 'input',
  className: '',
  style: {},
  label: '',
  pattern: '',
  error: null,
  rows: 1,
  expandable: false,
  floatingLabel: false,
  value: '',
}

export default Textfield
