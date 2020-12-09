const Tronicals = require('../models/tronicals.model');

//Returns the details of all the tronicals
exports.findAll = async (req, res) => {
    try{
        const tronicals = await Tronicals.find();
        return res.status(200).json(tronicals);
    } catch (err) {
        res.status(500).json({ error : "Internal Server Error" });
    }
}

//Returns the detail of a tronical
exports.findOne = async(req, res) => {
    try {
        const tronical = await Tronicals.find({name: req.params['title']});
        if(tronical)
        return res.status(200).json(tronical);

        else
        return res.status(404).json({ error : "Tronical not found" });
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}

