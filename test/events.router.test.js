const express = require('express');
const supertest = require('supertest');
const dayjs = require('dayjs');

const router = require('../web/routing/events.router');
const eventModel = require('../models/event-model');

const ajv = require('ajv');
const ajw = ajv();

let app;

beforeEach(() => {
    app = express();
    router(app);
});

it('should response on /api/event/', async () => {
    let model = new eventModel();

    model.title = "Event One";
    model.description = "Event number first";
    model.time = "2019-04-07";
    model.notification = true;

    const result = await supertest(app)
        .post('/api/event')
        .expect(200);

    expect(result.status).toEqual(200);
});

it('should save event on POST /api/event', async () => {
    const res = await supertest(app)
        .post('/api/event')
        .send(fake())
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)

    expect(res.body.id).not.toBeNull();
    expect(res.body.id).toEqual(jasmine.any(String));

    const list = await EventModel.find({ title: 'test-event-title' });
    expect(list.length).toEqual(1);
});