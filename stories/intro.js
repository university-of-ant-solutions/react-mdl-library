import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('Intro', module)
  .add('message', () => (
    <header className="docs-layout-header mdl-layout__header is-casting-shadow">
      <div className="mdl-layout__header-row">
        <span className="docs-layout-title mdl-layout-title">
        <a href="./">
        Material
        <br />
        Design
        <br />
        Lite
        </a>
        </span>
      </div>
    </header>
  ))
