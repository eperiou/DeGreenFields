import React from 'react';
import Event from './event.jsx';

const EventList = (props) => {
  console.log(props, 'eventlist');
  return (
    <div>
      {props.eventList.map(event =>{
        <Event event={event} />
      })}
    </div>
  );
};

export default EventList;
