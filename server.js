let express = require("express");
let app = express();

app.get('/', (req, res)=>{
    res.send("App Running on port 3000");
})

app.listen(3000);