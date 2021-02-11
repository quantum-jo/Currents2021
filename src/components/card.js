import { React, Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const makeStyles = {
  iconA: {
    color:'white',
  },
  iconAactive: {
    color:'white',
    textDecoration:'underline'
  },
  cardStyle: {
    opacity:0.5,
    boxShadow: 'rgb(0,0,0) 10px -10px 0px -3px, #C724B1 10px -10px , #C724B1 0px 0px 44px 3px ',
    outline: '#C724B1 solid 2px',
    margin: 'auto',
  },
  cardStyleActive: {
    boxShadow: 'rgb(0,0,0) 10px -10px 0px -3px, #C724B1 10px -10px , #C724B1 0px 0px 44px 3px ',
    outline: '#C724B1 solid 2px',
    margin: 'auto'
  },
  cardContent: {
    background:'#151515'
  },
  cardWhite: {
    color:'white',
    height: '8vh'
  }
};


class card extends Component {
  render() {
    const { title, prize, description, meta, img, date, onClick } = this.props;
    const extra = meta === 'Event'?
    (  date === 'COMING SOON' ?
      <a style={ makeStyles.iconAactive } href="/events">
        <Icon name='calendar'/>
          {date} <br/>
      </a>: <a style={ makeStyles.iconA } href="/events">
      <Icon name='calendar'/>
        {date} <br/>
      <Icon name='rupee sign'/>
       Prizes Worth INR {prize}
    </a>
    ) : ( 
      <a style={ makeStyles.iconA } href="/">
        <Icon name='calendar'/>
         {date} <br/>
         <Icon name='rupee sign'/>
         {prize}
      </a>
    )

    return(
      <Card style={ date==='COMING SOON'? makeStyles.cardStyle:makeStyles.cardStyleActive } onClick={onClick} disabled >
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