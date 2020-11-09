const express = require("express");
const router = express.Router();
const Event = require("../models/events.model");

router.get("/",(req,res)=>{
    Event.find()
        .then((result)=>{
            res.json(result);
        })
        .catch((error)=>{
            console.log(error);
        })
});

router.get("/:id",(req,res)=>{
    Event.findById(req.params.id)
        .then((result)=>{
            res.json(result);
        })
        .catch((error)=>{
            console.log(error);
        })

});

module.exports = router;
