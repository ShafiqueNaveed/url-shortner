const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
require("./mongoose")
const generateShortId = require("./shorturlgenerator/shorturlgenerator")
const {URL} = require("./models/url")


const app = express()
app.use(express.json())

app.use(express.static("public"))

PORT = process.env.PORT || 3000

app.post("/url" , async (req , res)=>{
    try{
        const preexits = await URL.findOne({long: req.body.long})
        if(preexits){
            return res.status(201).send(preexits)
        }else{
            var url = new URL(req.body)
            url.short = generateShortId()
        }
        
        const Url  = await url.save()
        res.status(201).send(Url)
    }catch(error){
        res.send(error)
    }
})

app.get("/url" , async (req , res)=>{
    const entry = await URL.findOne({short : req.query.short})
    if(!entry) return res.status(404).send("URL not Found")

    let redirectUrl = entry.long;
    
    if (!redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
      redirectUrl = "https://" + redirectUrl;
    }

    res.redirect(redirectUrl);
    
})


app.listen(PORT , ()=>{
    console.log(`app is up and running on ${PORT}`)
})