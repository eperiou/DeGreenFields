import React, { Component } from 'react';
import EventDetail from './EventDetail';
import Nav from './nav.jsx';

class Map_Page extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      map: null,
      detailsBox: null,
    };
  }
  setDetailsBox (event) {
    this.setState.detailsBox({ event });
  }
  setEventList (events) {
    this.setState.eventList({eventList});
  }
  render() {
    return (
      <body>
        //nav bar will have the search and filter methods.
        <Nav />
        <main id="map">
          <section>
            //map will hold google maps
              <Map />
          </section>
          <article>
            //plan for object of event to be passed through
            <EventDetail Event={this.detailsBox}/>
          </article>
        </main>
        <sidebar>
          //want the eventlis items to update the Detailsbox on click
          <EventList setDetailsBox={this.setDetailsBox}/>
        </sidebar>
      </body>
    )
  }
}

export default Map_Page;
