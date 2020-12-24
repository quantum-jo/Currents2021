import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'


class card extends Component {
  constructor(props) {
      super(props);
  }
  render(){
    const { title , prize, description, meta , img , onClick} = this.props;
    const extra = (
      <a>
        <Icon name='trophy' />
         Prizes Worth INR{prize}
      </a>
    )
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