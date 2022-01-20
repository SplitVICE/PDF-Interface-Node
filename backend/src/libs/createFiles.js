const fs = require("fs");
const path = require("path");

module.exports = () =>{
    if (!fs.existsSync(path.join(__dirname, "../files"))) {
        fs.mkdirSync(path.join(__dirname, "../files"));
    }

    if (!fs.existsSync(path.join(__dirname, "../../public"))) {
        fs.mkdirSync(path.join(__dirname, "../../public"));
    }
};
