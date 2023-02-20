const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/suggestForm",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e+ `no connection`);
})

