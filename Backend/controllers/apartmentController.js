


module.exports.index = (req, res) => {
    res.send(req.query);
}

module.exports.renderId = (req, res) => {
    res.send('Render apartment with id ' + req.params.id)
}

module.exports.favorite = (req, res) => {
    res.send('Create a favorite apartment for a specific user')
}

module.exports.comment = (req, res) => {
    res.send('Create a comment apartment for a specific user')
}

module.exports.report = (req, res) => {
    res.send('Create a report apartment for a specific user')
}