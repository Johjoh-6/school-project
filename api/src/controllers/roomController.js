const Room = require('../models/room.model.js');

class RoomController {
    async create(req, res) {
        const room = new Room(req.body);
        try {
            await room.save();
            res.status(201).send(room);
        } catch (error) {
            res.status(400).send({"error": error});
        }
    }

    async get(req, res) {
        try {
            const rooms = await Room.find();
            res.send(rooms);
        } catch (error) {
            res.status(500).send({"error": error});
        }
    }

    async getById(req, res) {
        const _id = req.params.id;
        try {
            const room = await Room.findById(_id);
            if (!room) {
                return res.status(404).send();
            }
            res.send(room);
        }
        catch (error) {
            res.status(500).send({"error": error});
        }
    }

    async update(req, res) {
        const _id = req.params.id;
        try {
            const room = await Room.findByIdAndUpdate(_id, req.body);
            if(!room) {
                return res.status(404).send({"error": "cannot find room"});
            }
            res.send(room);
        }
        catch (error) {
            res.status(500).send({"error": error});
        }
    }

    async delete(req, res) {
        const _id = req.params.id;
        try {
            const room = await Room.findByIdAndDelete(_id);
            if (!room) {
                return res.status(404).send({"error": "cannot find room"});
            }
            res.send(room);
        }
        catch (error) {
            res.status(500).send({"error": error});
        }
    }
}

module.exports = new RoomController();