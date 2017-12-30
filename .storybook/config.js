import { configure, addDecorator } from '@storybook/react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

function loadStories() {
  require('../stories/test')
  require('../stories/buttons')
  require('../stories/cards')
  require('../stories/chips')
  // require('../stories/tabs.js')
  // require('../stories/lists.js')
  // require('../stories/layouts.js')
  // require('../stories/bagdes.js')
  // require('../stories/dialogs.js')
  // require('../stories/transitions.js')
  // require('../stories/grids.js')
  // require('../stories/loading.js')
  // require('../stories/textfield.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)