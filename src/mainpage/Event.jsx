import React from 'react';

const Event = (props) => {
  /**
 * Returns the sum of a and b
 * @param {props.event} an event item
 * @returns rendered event list item
 */
 console.log(props);
  return (
    <article className="eventdetail">
        <div class='eventlistbox'>
          <h3>Eventheader</h3>
            <div>eventTime: Date,{props.event}</div>
            <a>location: String, link to map</a>
            <p> full event description</p>
        </div>
    </article>
  );
};

//Even schema for reference
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
