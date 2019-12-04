const request = require('request');
const cheerio = require('cheerio');

request('https://www.cs.utexas.edu/events', (error,response,html) => {
    if(!error && response.statusCode == 200){
        const page = cheerio.load(html);
        const fieldContent = page('.field-content');
        console.log(fieldContent.text());
    }
}); //takes a url

/*create an event, call events.insert() :
    calendarId is the calendar identifier and can either be the email address 
    of the calendar on which to create the event or a special keyword 'primary' 
    which will use the primary calendar of the logged in user. 

    event is the event to create with all the necessary details such as start and end. 
    The only two required fields are the start and end times.
    start.dateTime and end.dateTime fields. 
    For all-day events, use start.date and end.date instead.
    */
 