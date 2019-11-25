
// import request from 'superagent'

// const CALENDAR_ID = '48n4se9ocvo2kemhtjh5g2cnfo@group.calendar.google.com'
// const API_KEY = 'AIzaSyAGXSfO4AHneqA-uKPl337RaJ1d0L61lQM'
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

// export function getEvents (callback) {
//   request
//     .get(url)
//     .end((err, resp) => {
//       if (!err) {
//         const events = []
//         JSON.parse(resp.text).items.map((event) => {
//           events.push({
//             start: event.start.date || event.start.dateTime,
//             end: event.end.date || event.end.dateTime,
//             title: event.summary,
//           })
//         })
//         callback(events)
//       }
//     })
// }
