const logic = require('./server-logic.js');

module.exports = (app, express) => {

  app.get('/get/events', logic.getEvents);

  app.post('/post/event', logic.postEvent);
};
