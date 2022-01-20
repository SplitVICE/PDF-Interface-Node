module.exports = app => {
    app.get("/:file", (req, res) => {
        res.json({ status: req.params.file });
    });
};
