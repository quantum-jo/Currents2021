import { React, Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const makeStyles = {
  iconA: {
    color:'white'
  },
  cardStyle: {
    boxShadow: 'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ',
    outline: 'rgb(255,20,147) solid 2px'
  },
  cardContent: {
    background:'#151515'
  },
  cardWhite: {
    color:'white'
  }
};


class card extends Component {
  render() {
    const { title, prize, description, meta, img, date, onClick } = this.props;
    const extra = meta === 'Event'?
    (
      <a style={ makeStyles.iconA } href="/">
        <Icon name='calendar'/>
          Date: {date} <br/>
        <Icon name='rupee sign'/>
         Prizes Worth INR {prize}
      </a>
    ) : ( 
      <a style={ makeStyles.iconA } href="/">
        <Icon name='calendar'/>
          Date: {date} <br/>
        <Icon name='user'/>
         Team of {prize}
      </a>
    )

    return(
      <Card style={ makeStyles.cardStyle } onClick={onClick} >
        <Image src={img} />
        <Card.Content style={ makeStyles.cardContent }>
          <Card.Header style={ makeStyles.cardWhite }>{title}</Card.Header>
          <Card.Meta style={ makeStyles.cardWhite }>
            <span>{meta}</span>
          </Card.Meta>
          <Card.Description style={ makeStyles.cardWhite }>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content style={ makeStyles.cardContent } extra>
          {extra}
        </Card.Content>
      </Card>
    );
  }
}

export default card