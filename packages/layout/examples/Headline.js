import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import './headline.scss'

function Headline(props) {
  const {className, title, description} = props

  return (
    <div className="mdc-headline">
      <h2 className="mdc-headline__title mdc-typography--headline">{title}</h2>
      {description &&<h3 className="mdc-headline__subtitle mdc-typography--subheading2">{description}</h3>}
    </div>
  )
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

Headline.defaultProps = {}

Headline.displayName = 'Headline'

export default Headline
