const express = require("express");
const app = express();
const env = require("./config/env");
const path = require("path");
const serveIndex = require("serve-index");

app.use(express.static(path.join(__dirname, "../public"))); // Public files.
app.use("/", serveIndex("public")); // Showns index of files and directories here listed.

require("./libs/createFiles")();
require("./routes")(app);

app.listen(env.PORT, () => {
    console.log(`PDF Interface running on port ${env.PORT}`);
});
