const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
require("./mongoose")
const generateShortId = require("./shorturlgenerator/shorturlgenerator")
const {URL} = require("./models/url")
const validUrl = require("valid-url")

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
            var incomingURL = req.body
            if(!validUrl.isUri(incomingURL)){ return res.send({"error" : "Invalid URL"})}
            var url = new URL(incomingURL)
            url.short = generateShortId()
        }
        
        const Url  = await url.save()
        res.status(201).send(Url)
    }catch(error){
        res.send(error)
    }
})


app.get("/url", async (req, res) => {
  try {
    const entry = await URL.findOne({ short: req.query.short });

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    let redirectUrl = entry.long;

    // Ensure URL has http/https prefix
    if (
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    ) {
      redirectUrl = "https://" + redirectUrl;
    }

    // Check if it's a valid URL
    if (!validUrl.isUri(redirectUrl)) {
      return res.status(400).json({ error: "Invalid original URL" });
    }

    // Redirect to valid URL
    res.redirect(redirectUrl);

  } catch (error) {
    console.error("Error in redirect route:", error);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(PORT , ()=>{
    console.log(`app is up and running on ${PORT}`)
})