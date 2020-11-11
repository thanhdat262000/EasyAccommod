

module.exports.index = (req, res) => {
    res.send('Show all apartments');
}

module.exports.pagination = (req, res) => {
    res.send('Page ' + req.params.id);
}