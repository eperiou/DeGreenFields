import React from 'react';


const Event = (props) => {
/* setDetailsBox passed down from mappage
 * @param {props.event} an event item
 * @returns sets the Event details box to this event
 */
  function setDetailsBox() {
    props.setDetailsBox(props.event);
  }
  return (
    <select onClick={setDetailsBox} className="eventdetail">
      <div className="eventlistbox">
        <h3>Eventheader</h3>
        <div>eventTime: Date,{props.event}</div>
        <a>location: String, link to map</a>
        <p> full event description</p>
      </div>
    </select>

  );
};
//
// Event.propTypes = {
//   event: React.Proptypes.String.isRequired,
//   setDetailsBox: React.Proptypes.isRequired,
// };

export default Event;
/*
Even schema for reference
// username: String,
// eventTime: Date,
// location: String,
// createdAt: Date, // In the format of "2/16/2017, 8:28:03 PM"
// tags: Array,
// businessName: String,
// picLink: String, // Link to hosted picture
// busLink: String, // url to business' homepage
// description: String,
export default Event;
*/
