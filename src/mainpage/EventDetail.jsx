import React from 'react';

const EventDetail = (props) => {
  return (
    <article className="eventdetail">
      <img src="http://www.ufunk.net/wp-content/uploads/2013/03/thumbs-and-ammo-9.jpg" className="col-md-2"></img>
      <section className="eventdescription">
        <div class="col-md-3">
          <h3>Eventheader</h3>
            <div>username: String,</div>
            <div>eventTime: Date,</div>
            <a>location: String, link to map</a>
            <p> full event description</p>
        </div>
      </section>
    </article>
  );
}
//
//

// createdAt: Date, // In the format of "2/16/2017, 8:28:03 PM"
// tags: Array,
// businessName: String,
// picLink: String, // Link to hosted picture
// busLink: String, // url to business' homepage
// description: String,
// });
export default EventDetail;
