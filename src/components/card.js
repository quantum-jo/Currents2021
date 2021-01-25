import React, { Component } from 'react'
import { Card, Icon,Image } from 'semantic-ui-react'


class card extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    const { title , prize, description, meta , img ,date, onClick} = this.props;
    const extra = meta=='Event'?
    (
      <a style={{color:'white'}}>
        <Icon name='calendar'/>
        Date: {date} <br/>
        <Icon name='rupee sign'/>
         Prizes Worth INR {prize}
      </a>
    ) : ( <a style={{color:'white'}}>
      <Icon name='calendar'/>
        Date: {date} <br/>
        <Icon name='user'/>
         Team of {prize}

    </a>)
    return(
      <Card style={{'box-shadow':'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ','outline': 'rgb(255,20,147) solid 2px'}} onClick={onClick} >
      <Image src={img} />
      <Card.Content style={{background:'black'}}>
        <Card.Header style={{color:'white'}}>{title}</Card.Header>
        <Card.Meta style={{color:'white'}}>
          <span>{meta}</span>
        </Card.Meta>
        <Card.Description style={{color:'white'}}>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content style={{background:'black'}} extra>
        {extra}
      </Card.Content>
    </Card>
    )
}
}
export default card