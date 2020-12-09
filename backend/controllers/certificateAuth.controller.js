const Certificate = require('../models/certificate.model');

let isInt = (value) => !isNaN(value) && (function(x) { return (x | 0) === x })(parseFloat(value)); 
 
exports.authenticate = async (req, res) => {
    try {
        let serialNo = req.params.serialNo;

        if (!isInt(serialNo))
            throw { name: 'InvalidNo', msg: 'Invalid Serial Number!' };
        
        let User = await Certificate.findOne({ 'serialNo': serialNo });

        if (!User) 
            throw { name: 'MissingUser', msg: 'No such User exists'};

        return res.status(200).json(User);

    } catch (err) {
        if (err.name == 'InvalidNo') 
            return res.status(400).json(msg);

        if (err.namme == 'MissingUser') 
            return res.status(409).json(msg);
    }
        
};
