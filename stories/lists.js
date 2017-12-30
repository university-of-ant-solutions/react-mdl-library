import React from 'react'
import {storiesOf} from '@storybook/react'

import {
  // Avatar,
  IconButton,
  List,
  ListItem,
  FontIcon,
} from '../index'

function handleRequestDelete() {
  alert('You clicked the delete icon.') // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.') // eslint-disable-line no-alert
}

function onClick(evt) {
  evt.preventDefault()
  alert('onClick')
}

storiesOf('Lists', module)
  .add('simple list', () => (
    <List className="demo-list-item">
      <ListItem primaryContent="Bryan Cranston" />
      <ListItem primaryContent="Aaron Paul" />
      <ListItem primaryContent="Bob Odenkirk" />
    </List>
  ))
  .add('icon list', () => (
    <List className="demo-list-icon">
      <ListItem leftIcon={<FontIcon>person</FontIcon>} primaryContent="Bryan Cranston" />
      <ListItem leftIcon={<FontIcon>person</FontIcon>} primaryContent="Aaron Paul" />
      <ListItem leftIcon={<FontIcon>person</FontIcon>} primaryContent="Bob Odenkirk" />
    </List>
  ))
  // .add('avatars and actions', () => (
  //   <List type="div" className="demo-list-action">
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bryan Cranston</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Aaron Paul</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bob Odenkirk</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //     />
  //   </List>
  // ))
  // .add('avatars and controls', () => (
  //   <List type="div" className="demo-list-action">
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bryan Cranston</span>}
  //       secondaryAction={<IconButton icon="favorite" color="primary" />}
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Aaron Paul</span>}
  //       secondaryAction={<IconButton onClick={onClick} icon="close" color="primary" />}
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bob Odenkirk</span>}
  //       secondaryAction={<IconButton icon="favorite" color="primary" />}
  //     />
  //   </List>
  // ))
  // .add('two line', () => (
  //   <List type="div" className="demo-list-action">
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bryan Cranston</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //       subTitle="62 Episodes"
  //       secondaryInfo="Actor"
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Aaron Paul</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //       subTitle="62 Episodes"
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bob Odenkirk</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //       subTitle="62 Episodes"
  //     />
  //   </List>
  // ))
  // .add('three line', () => (
  //   <List type="div" className="demo-list-action">
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bryan Cranston</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //       secondaryText="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle."
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Aaron Paul</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //       secondaryText="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the 'Need For Speed' Movie."
  //     />
  //     <ListItem
  //       type="div"
  //       leftAvatar={
  //         <Avatar style={{marginRight: '16px', float: 'left'}}>
  //           <FontIcon style={{fontSize: '40px'}}>person</FontIcon>
  //         </Avatar>
  //       }
  //       primaryContent={<span>Bob Odenkirk</span>}
  //       secondaryAction={<FontIcon>star</FontIcon>}
  //       secondaryText="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called 'Better Call Saul'."
  //     />
  //   </List>
  // ))
