const Fli = require("../models/Fli.model");
// module.exports.index = (request, response) => {response.json({message: "Hello World"});}

module.exports.testFli = (req, res) => {
    res.json({
        msg: "This is the Fli api project"
    })
};
module.exports.getAllFli = (req, res) => {
    Fli.find()
        .then(allFli => {
            res.json({
                results: allFli
            })
        })
        .catch(err => {
            res.json({
                msg: "There has been an error",
                error: err
            })
        })
}
module.exports.newFli = (req, res) => {
    //request.body represents the form information
    Fli.create(req.body)
        .then(newFli => {
            res.json({
                results: newFli
            })
        })
        .catch(err => {
            res.json({
                msg: "There has been an error",
                error: err
            })
        })
}
module.exports.getOneFli = (req, res) => {
    Fli.findOne({
            _id: req.params.id
        })
        .then(oneFli => {
            res.json({
                results: oneFli
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}
module.exports.updateFli = (req, res) => {
    Fli.updateOne({
                _id: req.params.id
            }, //which quote to update
            req.body, //gets the form information needed to update our Fli
            {
                new: true,
                runValidators: true
            }
        )
        .then(updateFli => {
            res.json({
                results: updateFli
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}
module.exports.deleteFli = (req, res) => {
    Fli.deleteOne({
            _id: req.params.id
        }) //which quote to delete
        .then(deleteFli => {
            res.json({
                results: deleteFli
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}