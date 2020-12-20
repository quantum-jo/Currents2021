import {React,Component} from "react";
import Navbar from "./Navbar.js";
import Card from "./card.js";
import Profile from "./profile.js";
import { Grid } from 'semantic-ui-react'
import _ from 'lodash'
const c="circuitrix"
const des="This is a great event"
const m="Event"
const im = 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'

class events extends Component {
  constructor(props) {
      super(props);
  }
  render(){
  const columns = _.times(10, (i) => (
    <Grid.Column key={i}>
      <Card title={c} description={des} meta={m} img ={im} />
    </Grid.Column>
  )) 
  return (
  <>
    <Navbar path="events" />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/326461/pexels-photo-326461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
            <Grid stackable columns={3}>
    {columns}
  </Grid>
            </div>
          </div>
        </section>
          </main>
    </>
  );
}
}

export default events;
