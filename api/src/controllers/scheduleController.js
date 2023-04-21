const Schedule = require("../models/schedule.model");

class ScheduleController {
    async create(req, res) {
        const schedule = new Schedule(req.body);
        try {
            await schedule.save();
            res.status(201).send(schedule);
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }

    async get(req, res) {
        try {
            const schedules = await Schedule.find().populate("Room").populate("Teacher").populate("ClassStudent");
            res.send(schedules);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async getById(req, res) {
        const _id = req.params.id;
        try {
            const schedule = await Schedule.findById(_id).populate("Room").populate("Teacher").populate("ClassStudent");
            if (!schedule) {
                return res.status(404).send();
            }
            res.send(schedule);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async update(req, res) {
        const _id = req.params.id;
        try {
            const schedule = await Schedule.findByIdAndUpdate(_id, req.body);
            if (!schedule) {
                return res.status(404).send({ error: "cannot find schedule" });
            }
            res.send(schedule);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async delete(req, res) {
        const _id = req.params.id;
        try {
            const schedule = await Schedule.findByIdAndDelete(_id);
            if (!schedule) {
                return res.status(404).send({ error: "cannot find schedule" });
            }
            res.send(schedule);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }
}

module.exports = new ScheduleController();