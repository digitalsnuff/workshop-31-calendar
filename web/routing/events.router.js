const express = require('express');
const router = express.Router();

const dayjs = require('dayjs');

async function createEvent(data) {
    const model = await EventModel.create(data);
    return model._id;
}

router.post('api/event', async (req, res) => {
    try {
        const params = req.body;

        if (!params) {
            throw new Error('body is not defined');
        }

        const id = await createEvent(params);
        res.json({ id });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('api/event', async (req, res) => {
    try {

        
    } catch(err) {

    }

}
});

module.exports = (app) => {
    app.use(router);
};

