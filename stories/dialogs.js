import React from 'react'
import {storiesOf} from '@storybook/react'

import SimpleDialog from './examples/SimpleDialog'
import SimpleDialogFullWidth from './examples/SimpleDialogFullWidth'
import DisplaysMultipleDialogs from './examples/DisplaysMultipleDialogs'
import SimpleDialogDisableBackdrop from './examples/SimpleDialogDisableBackdrop'

storiesOf('Dialogs', module)
  .add('simple dialog', () => <SimpleDialog />)
  .add('simple dialog with full width actions', () => <SimpleDialogFullWidth />)
  .add('displays multiple dialogs', () => <DisplaysMultipleDialogs />)
  .add('simple dialog disable backdrop', () => <SimpleDialogDisableBackdrop />)
