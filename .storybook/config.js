import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import Container from './Container'

addDecorator(story => <Container story={story} />)

setOptions({
  name: 'React MDL Library',
})

// function loadStories() {
//   require('../stories/intro')
  // require('../stories/buttons')
  // require('../stories/cards')
  // require('../stories/chips')
  // require('../stories/tabs')
  // require('../stories/lists')
  // require('../stories/layouts')
  // require('../stories/bagdes')
  // require('../stories/dialogs')
  // require('../stories/transitions')
  // require('../stories/grids')
  // require('../stories/loading')
  // require('../stories/textfield')
  // You can require as many stories as you need.
// }


function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../src/', true, /\.story\.js?$/))
  requireAll(require.context('../packages/', true, /\.story\.js?$/))
}

configure(loadStories, module)