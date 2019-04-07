const express = require('express');
const router = express.Router();

const dayjs = require('dayjs');

router.get('/api/calendar', (req,res) => {
    let dates = buildCalendar(req.query.month);
    let events =  [];
    dates.forEach((date) => {
    events.push(
        {
            date:date,
            events: [
                // {
                //     id: string(format=guid)
                //     title: string
                // }
            ]
        })
    })

    res.status(200).json({
        data: events
    });
});

function buildCalendar(month) {
    const date = new Date(month);

    const from = dayjs(dayjs(date).startOf('month').startOf('week').toDate());

    const calendarWidth = 7;
    const calendarHeight = 6;

    return Array
    .from({length: calendarWidth * calendarHeight})
    .map((_, index) => from.add(index + 1, 'day').toString());
}

module.exports = (app) => {
    app.use(router);
};

