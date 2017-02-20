import React from 'react';
import Event from './Event.jsx';

const EventList = (props) => {
  console.log(props.eventlist, 'eventlist');
  return (
    <div>
      {props.eventlist.map(event =>{
          return <Event event={event} />
      })}
    </div>
  );
};

export default EventList;
