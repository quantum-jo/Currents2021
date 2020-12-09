const Events = require('../models/events.model');

exports.findAll = async (req, res) => {
    try{
        console.log("inside findall events function");
        const events = await Events.find();
        return res.status(200).json(events);
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}

exports.findByName = async (req, res) => {
    try {
        const events = await Events.find({ name:req.params.name });
        if(events)
        return res.status(200).json(events);
        else
         return res.status(404).json({ error : "Event  not found" });
        
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}