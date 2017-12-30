import React from 'react'
import {storiesOf} from '@storybook/react'

import {
  Button,
  IconButton,
  FontIcon,
  Card,
  CardTitle,
  CardSupportingText,
  CardMedia,
  CardAction,
  CardMenu,
} from '../index'

const demoCard = {
  demoCardWide: {
    width: '512px',
  },
  demoCardWideTitle: {
    color: '#fff',
    height: '176px',
    background:
      'url("https://raw.githubusercontent.com/google/material-design-lite/mdl-1.x/docs/_assets/demos/welcome_card.jpg") center / cover',
  },
  demoCardWideMenu: {
    color: '#fff',
  },
  demoCardSquare: {
    width: '320px',
    height: '320px',
  },
  demoCardSquareTitle: {
    color: '#fff',
    background:
      'url("https://raw.githubusercontent.com/google/material-design-lite/mdl-1.x/docs/_assets/demos/dog.png") bottom right 15% no-repeat #46B6AC',
  },
  demoCardImage: {
    width: '256px',
    height: '256px',
    background:
      'url("https://raw.githubusercontent.com/google/material-design-lite/mdl-1.x/docs/_assets/demos/image_card.jpg") center / cover',
  },
  demoCardImageAction: {
    height: '52px',
    padding: '16px',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  demoCardImageFilename: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
  },
  demoCardEvent: {
    width: '256px',
    height: '256px',
    background: '#3E4EB8',
  },
  demoCardEventTitle: {
    alignItems: 'flex-start',
    color: '#fff',
  },
  demoCardEventAction: {
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
  },
}

storiesOf('Card', module)
  .add('basic card', () => (
    <Card className="mdl-shadow--2dp">
      <CardTitle titleText="Welcome" />
      <CardMedia
        src="https://netdna.webdesignerdepot.com/uploads/2015/07/featured_mdl.jpg"
        style={{width: '330px'}}
      />
      <CardSupportingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus
        eleifend lacinia...
      </CardSupportingText>
      <CardAction border>
        <Button ripple color="accent">
          GET STARTED
        </Button>
      </CardAction>
    </Card>
  ))
  .add('demo card wide', () => (
    <Card className="mdl-shadow--2dp" style={demoCard.demoCardWide}>
      <CardTitle titleText="Welcome" style={demoCard.demoCardWideTitle} />
      <CardSupportingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus
        eleifend lacinia...
      </CardSupportingText>
      <CardAction border>
        <Button ripple color="primary">
          GET STARTED
        </Button>
      </CardAction>
      <CardMenu style={demoCard.demoCardWideMenu}>
        <IconButton icon="share" ripple />
      </CardMenu>
    </Card>
  ))
  .add('demo card square', () => (
    <Card className="mdl-shadow--2dp" style={demoCard.demoCardSquare}>
      <CardTitle expand titleText="Welcome" style={demoCard.demoCardSquareTitle} />
      <CardSupportingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus
        eleifend lacinia...
      </CardSupportingText>
      <CardAction border>
        <Button ripple color="primary">
          VIEW UPDATES
        </Button>
      </CardAction>
    </Card>
  ))
  .add('demo card image', () => (
    <Card className="mdl-shadow--2dp" style={demoCard.demoCardImage}>
      <CardTitle expand />
      <CardAction style={demoCard.demoCardImageAction}>
        <span style={demoCard.demoCardImageFilename}>Image.jpg</span>
      </CardAction>
    </Card>
  ))
  .add('demo card event', () => (
    <Card className="mdl-shadow--2dp" style={demoCard.demoCardEvent}>
      <CardTitle expand style={demoCard.demoCardEventTitle}>
        <h4 style={{marginTop: '0px'}}>
          Featured event:<br />
          May 24, 2016<br />
          7-11pm
        </h4>
      </CardTitle>
      <CardAction border style={demoCard.demoCardEventAction}>
        <Button ripple>
          <span style={{color: '#fff'}}>Add to Calendar</span>
        </Button>
        <div className="mdl-layout-spacer" />
        <FontIcon>event</FontIcon>
      </CardAction>
    </Card>
  ))
