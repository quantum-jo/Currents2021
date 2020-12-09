const Cca = require('../models/cca.model');

exports.apply = async (req, res) => {
    try {
        let user = {
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            college: req.body.college,
            branch: req.body.branch,
            year: req.body.year,
            por: req.body.por,
            mobile: req.body.mobile,
            perma_phone: req.body.perma_phone,
            curr_addr: req.body.curr_addr,
            perm_addr: req.body.perm_addr
        };

        let foundUser = await Cca.find(user.email).limit(1);

        if (foundUser) 
            throw { name: 'UserError', msg: 'Already Exists!'};
        
        await Cca.save(user);
        
        return res.status(200).json('Registered!');

    } catch(err) {
        if (err.name == 'UserError')
            return res.status(409).json(msg);
        else 
            return res.status(400).send("Invalid Details");
    }
};