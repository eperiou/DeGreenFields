import React from 'react';
import Event from './Event.jsx';

const EventList = (props) => {
  return (
    <div>
      {props.eventlist.map(event =>{
          return <Event setDetailsBox={props.setDetailsBox} event={event} />
      })}
    </div>
  );
};

export default EventList;
