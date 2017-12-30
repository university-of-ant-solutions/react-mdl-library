import { configure, addDecorator } from '@storybook/react';
import Container from './Container';

addDecorator(story => <Container story={story} />);

function loadStories() {
  require('../stories/test')
  require('../stories/buttons')
  require('../stories/cards')
  require('../stories/chips')
  require('../stories/tabs')
  require('../stories/lists')
  require('../stories/layouts')
  require('../stories/bagdes')
  require('../stories/dialogs')
  require('../stories/transitions')
  require('../stories/grids')
  require('../stories/loading')
  require('../stories/textfield')
  // You can require as many stories as you need.
}

configure(loadStories, module)