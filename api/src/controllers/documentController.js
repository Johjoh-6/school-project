const Document = require("../models/document.model");

class DocumentController {
    async create(req, res) {
        const document = new Document(req.body);
        try {
            await document.save();
            res.status(201).send(document);
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }

    async get(req, res) {
        try {
            const documents = await Document.find();
            res.send(documents);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async getById(req, res) {
        const _id = req.params.id;
        try {
            const document = await Document.findById(_id);
            if (!document) {
                return res.status(404).send();
            }
            res.send(document);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async update(req, res) {
        const _id = req.params.id;
        try {
            const document = await Document.findByIdAndUpdate(_id, req.body);
            if (!document) {
                return res.status(404).send({ error: "cannot find document" });
            }
            res.send(document);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async delete(req, res) {
        const _id = req.params.id;
        try {
            const document = await Document.findByIdAndDelete(_id);
            if (!document) {
                return res.status(404).send({ error: "cannot find document" });
            }
            res.send(document);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }
}

module.exports = new DocumentController();