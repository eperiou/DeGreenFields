import React, { Component } from 'react';
import EventDetail from './eventDetail.jsx';
import EventList from './eventList.jsx';
import Map from './Map.jsx';

class Map_Page extends Component {
  constructor() {
    super();
    this.state = {
      eventList: ['event1',   'event2', 'event3', 'event4', 'event5'],
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
        <nav class="navbar navbar-inverse navbar-fixed-top">
         <div class="container">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
             </button>
             <a class="navbar-brand" href="#">Project name</a>
           </div>
           <div id="navbar" class="collapse navbar-collapse">
             <ul class="nav navbar-nav">
               <li class="active"><a href="#">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#contact">Contact</a></li>
             </ul>
           </div>
         </div>
       </nav>

       <div class="container">
           <main id="map">
             <section>
               //map will hold google maps
                 <Map />
             </section>
             <section id="EventDetail">
               //plan for object of event to be passed through
               <EventDetail Event={this.detailsBox}/>
             </section>
           </main>
           <sidebar>
             //want the eventlis items to update the Detailsbox on click
             <EventList eventList={this.state.eventList} setDetailsBox={this.setDetailsBox}/>
           </sidebar>
         </div>
              //nav bar will have the search and filter methods.
      </body>
    )
  }
}

export default Map_Page;
