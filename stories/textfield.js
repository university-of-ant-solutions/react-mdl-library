import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  Textfield,
} from '../src/index'

storiesOf('Textfield', module)
  .add('default textfield', () => (
    <div>
      <Textfield label="Text..." style={{width: '500px'}} />
      <br />
      <Textfield
        label="Number..."
        pattern="-?[0-9]*(\.[0-9]+)?"
        error="Input is not a number!"
        style={{width: '500px'}}
      />
    </div>
  ))
  .add('floating label textfield', () => (
    <div>
      <Textfield label="Text" floatingLabel style={{width: '500px'}} />
      <br />
      <Textfield
        label="Number"
        pattern="-?[0-9]*(\.[0-9]+)?"
        error="Input is not a number!"
        floatingLabel
        style={{width: '500px'}}
      />
    </div>
  ))
  .add('multiple line textfield', () => (
    <Textfield type="textarea" label="Text lines..." rows={3} style={{width: '500px'}} />
  ))
  .add('expandable textfield', () => (
    <Textfield type="search" label="Expandable Input" expandable style={{width: '500px'}} />
  ))
