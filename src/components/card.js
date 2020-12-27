import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

class card extends Component {
  constructor(props) {
      super(props);
  }
  render(){
    const { title , prize, description, meta , img ,date, onClick} = this.props;
    console.log(img);
    const extra = meta=='Event'?
    (
      <a>
        <Icon name='calendar'/>
        Date: {date} <br/>
        <Icon name='trophy'/>
         Prizes Worth INR {prize}
      </a>
    ) : ( <a>
      <Icon name='calendar'/>
        Date: {date}
    </a>)
    return(
  <Card fluid
    image={img}
    header= {title}
    meta={meta}
    description= {description}
    extra={extra}
    onClick={onClick}
  />
    )
}
}
export default card