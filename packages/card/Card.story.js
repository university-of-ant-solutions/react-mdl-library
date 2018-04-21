import React from 'react'
import {storiesOf} from '@storybook/react'
import {DocItem} from '../../stories/UIExplorer'
import Card, { CardActions, CardActionButtons, CardActionIcons } from './index'
import Button from '../button'
import Icon from '../icon'
import './examples/demo.scss'

storiesOf('! Card', module)
  .add('basic', () => (
    <React.Fragment>
      <DocItem
        render={
        <Card className="demo-card">
          Simple
        </Card>
      }/>
      <DocItem
        render={
        <Card className="demo-card">
          <div className="mdc-card__media mdc-card__media--square">
            <div className="mdc-card__media-content">Title</div>
          </div>
          ... content ...
          <CardActions>
            <CardActionButtons>
              <Button>
                Action 1
              </Button>
              <Button>
                Action 2
              </Button>
            </CardActionButtons>
            <CardActionIcons>
              <Icon tabindex="0" role="button" title="Share">share</Icon>
              <Icon tabindex="0" role="button" title="More options">more_vert</Icon>
            </CardActionIcons>
          </CardActions>
        </Card>
      }/>
    </React.Fragment>
  ))
  .add('content blocks - rich media', () => (
    <React.Fragment>
      <DocItem
        render={
        <Card className="demo-card">
          <div className="my-card__media mdc-card__media mdc-card__media--16-9">
            <div className="mdc-card__media-content">Title</div>
          </div>
        </Card>
      }/>
    </React.Fragment>
  ))
  .add('content blocks - actions', () => (
    <React.Fragment>
      <DocItem
        render={
        <Card className="demo-card">
          <CardActions>
            <Button>
              Action 1
            </Button>
            <Button>
              Action 2
            </Button>
          </CardActions>
        </Card>
      }/>
      <DocItem
        render={
        <Card className="demo-card">
          <CardActions>
            <Icon
              tabindex="0"
              role="button"
              aria-pressed="false"
              aria-label="Add to favorites"
              title="Add to favorites"
              data-toggle-on='{"content": "favorite", "label": "Remove from favorites"}'
              data-toggle-off='{"content": "favorite_border", "label": "Add to favorites"}'>
              favorite_border
            </Icon>
            <Icon tabindex="0" role="button" title="Share">share</Icon>
            <Icon tabindex="0" role="button" title="More options">more_vert</Icon>
          </CardActions>
        </Card>
      }/>
      <DocItem
        render={
        <Card className="demo-card">
          <div className="mdc-card__actions mdc-card__actions--full-bleed">
            <a className="mdc-button mdc-card__action mdc-card__action--button" href="#">
              All Business Headlines
              <i className="material-icons" aria-hidden="true">arrow_forward</i>
            </a>
          </div>
        </Card>
      }/>
      <DocItem
        render={
        <Card className="demo-card">
          <CardActions>
            <CardActionButtons>
              <Button>
                Read
              </Button>
              <Button>
                Bookmark
              </Button>
            </CardActionButtons>
            <CardActionIcons>
              <Icon tabindex="0" role="button" title="Share">share</Icon>
              <Icon tabindex="0" role="button" title="More options">more_vert</Icon>
            </CardActionIcons>
          </CardActions>
        </Card>
      }/>
    </React.Fragment>
  ))
  .add('fully-featured', () => (
    <React.Fragment>
    <DocItem
      render={
        <section className="demo-card-collection">
          <Card className="demo-card">
            <a className="mdc-card__primary-action mdc-ripple-upgraded" href="#">
              <div className="mdc-card__media mdc-card__media--16-9 demo-card__media demo-card__media--16-9"></div>
              <div className="demo-card__primary">
                <h2 className="demo-card__title mdc-typography--title">Our Changing Planet</h2>
                <h3 className="demo-card__subtitle mdc-typography--subheading1">by Kurt Wagner</h3>
              </div>
              <div className="demo-card__secondary mdc-typography--body1">
                Visit ten places on our planet that are undergoing the biggest changes today.
              </div>
            </a>
            <div className="mdc-card__actions">
              <div className="mdc-card__action-buttons">
                <button className="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded mdc-theme--text-primary-on-primary">Read</button>
                <button className="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded mdc-theme--text-primary-on-primary">Bookmark</button>
              </div>
              <div className="mdc-card__action-icons">
                <i className="mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" tabindex="0" role="button" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites">favorite_border</i>
                <i className="material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" tabindex="0" role="button" data-mdc-ripple-is-unbounded="" title="Share">share</i>
                <i className="material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" tabindex="0" role="button" data-mdc-ripple-is-unbounded="" title="More options">more_vert</i>
              </div>
            </div>
          </Card>
        </section>
      }
    />
    <DocItem
    render={
      <section className="demo-card-collection">

        <Card className="mdc-card--stroked demo-card">
          <div className="demo-card-article-group-heading mdc-typography--subheading2">Headlines</div>

          <hr className="mdc-list-divider" />

          <a className="demo-card-article mdc-ripple-surface" href="#">
            <h2 className="demo-card-article__title mdc-typography--headline">Copper on the rise</h2>
            <p className="demo-card-article__snippet mdc-typography--body1">
              Copper price soars amid global market optimism and increased demand.
            </p>
          </a>

          <hr className="mdc-list-divider" />

          <a className="demo-card-article mdc-ripple-surface" href="#">
            <h2 className="demo-card-article__title mdc-typography--headline">U.S. tech startups rebound</h2>
            <p className="demo-card-article__snippet mdc-typography--body1">
              Favorable business conditions have allowed startups to secure more fundraising deals compared to last
              year.
            </p>
          </a>

          <hr className="mdc-list-divider" />

          <a className="demo-card-article mdc-ripple-surface" href="#">
            <h2 className="demo-card-article__title mdc-typography--headline">Asia's clean energy ambitions</h2>
            <p className="demo-card-article__snippet mdc-typography--body1">
              China plans to invest billions of dollars for the development of over 300 clean energy projects in
              Southeast Asia.
            </p>
          </a>

          <hr className="mdc-list-divider" />

          <div className="mdc-card__actions mdc-card__actions--full-bleed">
            <a className="mdc-button mdc-card__action mdc-card__action--button demo-card-action mdc-theme--text-primary-on-primary" href="#">
              All Business Headlines
              <i className="material-icons" aria-hidden="true">arrow_forward</i>
            </a>
          </div>
        </Card>
      </section>
    }/>
    <DocItem
    render={
      <section className="demo-card-collection">

        <Card className="demo-card demo-card--photo">
          <a className="mdc-card__primary-action demo-card__primary-action" href="#">
            <div className="mdc-card__media mdc-card__media--square demo-card__media">
              <div className="mdc-card__media-content demo-card__media-content--with-title">
                <div className="demo-card__media-title mdc-typography--subheading2">
                  Vacation Photos
                </div>
              </div>
            </div>
          </a>
          <div className="mdc-card__actions mdc-card__action-icons">
            <i className="mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon"
              tabindex="0"
              role="button"
              aria-pressed="false"
              aria-label="Add to favorites"
              title="Add to favorites"
              data-toggle-on='{"content": "favorite", "label": "Remove from favorites"}'
              data-toggle-off='{"content": "favorite_border", "label": "Add to favorites"}'>
              favorite_border
            </i>
            <i className="mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon"
              tabindex="0"
              role="button"
              aria-pressed="false"
              aria-label="Add bookmark"
              title="Add bookmark"
              data-toggle-on='{"content": "bookmark", "label": "Remove bookmark"}'
              data-toggle-off='{"content": "bookmark_border", "label": "Add bookmark"}'>
              bookmark_border
            </i>
            <i className="material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface"
              tabindex="0"
              role="button"
              data-mdc-ripple-is-unbounded
              title="Share">share</i>
          </div>
        </Card>
      </section>
    }/>

    <DocItem
    render={
      <section className="demo-card-collection">

        <Card className="demo-card demo-card--music">
          <a className="mdc-card__primary-action demo-card__primary-action" href="#">
            <div className="demo-card__music-row">
              <div className="mdc-card__media mdc-card__media--square demo-card__media demo-card__media--music"></div>
              <div className="demo-card__music-info">
                <div className="demo-card__music-title mdc-typography--headline">Rozes</div>
                <div className="demo-card__music-artist mdc-typography--body1">Under the Grave</div>
                <div className="demo-card__music-year mdc-typography--body1">(2016)</div>
              </div>
            </div>
          </a>
          <hr className="mdc-list-divider" />
          <div className="mdc-card__actions">
            <div className="mdc-card__action-buttons demo-card__action-buttons--text-only">Rate this album</div>
            <div className="mdc-card__action-icons">
              <i className="material-icons demo-card__action-icon--star"
                tabindex="0"
                role="button"
                title="1 star">
                star_border
              </i>
              <i className="material-icons demo-card__action-icon--star"
                tabindex="0"
                role="button"
                title="2 stars">
                star_border
              </i>
              <i className="material-icons demo-card__action-icon--star"
                tabindex="0"
                role="button"
                title="3 stars">
                star_border
              </i>
              <i className="material-icons demo-card__action-icon--star"
                tabindex="0"
                role="button"
                title="4 stars">
                star_border
              </i>
              <i className="material-icons demo-card__action-icon--star"
                tabindex="0"
                role="button"
                title="5 stars">
                star_border
              </i>
            </div>
          </div>
        </Card>
      </section>
    }/>
    </React.Fragment>
  ))
