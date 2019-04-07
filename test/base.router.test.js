const express = require('express');
const supertest = require('supertest');

const router = require('../web/routing/base.router');

it('should response on /', async () => {
    let app = express();
    router(app);

    const result = await supertest(app)
        .get('/')
        .expect(200);

         expect(result.body.status).toEqual('ok');
});
