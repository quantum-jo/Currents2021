const Workshops = require('../models/workshops.model');

//Return all the workshops
exports.findAll = async (req, res) => {
    try{
        const workshops = await Workshops.find();
        return res.status(200).json(workshops);       
    }catch (err) {
        return res.status(500).send("Internal Server Error");
    }
};

//Return the details of specific workshops
exports.findOne = async (req, res) => {
    try{
        const workshop = await Workshops.find({name: req.params.title});
        if(workshop) 
            return res.status(200).json(workshop);
        else 
            return res.status(200).json("Workshop not found");       
    }catch (err) {
        return res.status(500).json("Internal Server Error");
    }
};