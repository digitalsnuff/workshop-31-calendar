const express = require('express');
const supertest = require('supertest');
const router = require('../web/routing/calendar.router');

const ajv = require('ajv');
const ajw = ajv();

let app;

beforeEach(() => {
    app = express();
    router(app);
});

it('should response on /api/calendar/', async () => {
    const result = await supertest(app)
        .get('/api/calendar')
        .expect(200);

    expect(result.status).toEqual(200);
});

it('it should be consistent with calendar schema', async () => {
    const schema = require('../docs/schemas/calendar.scheme.json');
    const validate = ajw.compile(schema);

    const res = await supertest(app)
        .get('/api/calendar')
        .expect(200);

    const valid = validate(res.body);
    expect(valid).toBeTruthy();
    expect(validate.errors).not.toBeNull();
})
