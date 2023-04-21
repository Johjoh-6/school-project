const Document = require("../models/document.model");
const User = require("../models/user.model");

class DocumentController {
    async create(req, res) {
        const idUser = req.user._id;
        try {
            const user = User.findById(idUser);
            if (!user) {
                return res.status(404).send({ error: "cannot find user" });
            }
            const document = new Document(req.body);
            await document.save();
            user.documents.push(document);
            await user.save();
            res.status(201).send(document);
        } catch (error) {
            res.status(400).send({ error: error });
        }
    }

    async getAll(req, res) {
        const idUser = req.user._id;
        try {
            const user = await User.findById(idUser);
            if (!user) {
                return res.status(404).send({ error: "cannot find user" });
            }
            if(user.role !== "staff"){
                return res.status(401).send({ error: "Unauthorized" });
            }
            const documents = await Document.find();
            res.send(documents);
        } catch (error) {
            res.status(500).send({ error: error });
        }
    }

    async get(req, res) {
        const idUser = req.user._id;
        try {
            const user = await User.findById(idUser).populate("document").select('documents');
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