import React from 'react'
import {storiesOf} from '@storybook/react'
import Chip, { ChipSet } from './index'
import {DocItem} from '../../stories/UIExplorer'

storiesOf('! Chip', module)
  .add('number badge on icon', () => (
    <ChipSet>
      <Chip>Chip one</Chip>
      <Chip>Chip two</Chip>
      <Chip>Chip three</Chip>
      <Chip>Chip four</Chip>
      <div className="mdc-chip">
        <i className="material-icons mdc-chip__icon mdc-chip__icon--leading">event</i>
        <div className="mdc-chip__text">Add to calendar</div>
      </div>
      <div class="mdc-chip">
        <div class="mdc-chip__text">Jane Smith</div>
        <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button">cancel</i>
      </div>
    </ChipSet>
  ))