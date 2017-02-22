import React from 'react';
import Event from './Event';

const EventList = props =>
  <div>
    {props.eventlist.map(event =>
      <Event setDetailsBox={props.setDetailsBox} event={event} />,
    )}
  </div>;

// EventList.propTypes = {
//   eventlist: React.Proptypes.Array.isRequired,
//   setDetailsBox: React.Proptypes.isRequired,
// };
export default EventList;
