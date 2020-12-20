import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'


const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

class card extends Component {
  constructor(props) {
      super(props);
  }
  render(){
    const { title , description, meta , img , onClick} = this.props;
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