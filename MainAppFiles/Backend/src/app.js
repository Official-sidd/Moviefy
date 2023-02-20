const express = require("express");
const path = require("path");
const app = express();
require("./db/conn")
const Suggestion = require("./models/suggestion");


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const styles_path = path.join(__dirname, "../public");
const images_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))
app.use(express.static(styles_path))
app.use(express.static(images_path))

app.get("/", (req,res) =>{
    res.send("hello from the server siddharth")
});

// app.get("/suggestion",(req,res) =>{
//     res.render()
// })

app.post("/suggestion", async (req,res) =>{
    try{
        // console.log(req.body.fname);
        // res.send(req.body.fname);

        const suggestUser = new Suggestion({
            fname : req.body.fname,
            lname : req.body.lname,
            email: req.body.email,
            suggestion: req.body.suggestion
        })
        const suggested=suggestUser.save();
        res.send("submit success")
        // res.status(201).render("/");


    }catch(error){
        res.status(400).send(error);
    }
})

// app.use(express.static(static_path))
// app.set("view engine","hbs");

// app.get("/", (req,res) =>{
//     res.render("index")
// });


//to view all the suggestions

app.get("/viewAll",(req,res)=>{
    Suggestion.find().then((result)=>{
        return res.send(result);
        }).catch((error)=>{
        console.log(error);
    })
})
    

app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
})
