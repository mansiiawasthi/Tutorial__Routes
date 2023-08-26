// const express = require('express')
// const { route } = require('express/lib/application')
// const Detail = require("../models/Details")
// const Slider = require("../models/slider")
// const Service = require("../models/Service")
// const Contact = require("../models/Contact")
// const routes = express.Router()
const express = require('express');
const path = require('path');  // Make sure to require the 'path' module

const { route } = require('express/lib/application');
const Detail = require("../models/Details");
const Slider = require("../models/slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const routes = express.Router();

// Debugging code to check resolved paths
console.log("__dirname:", __dirname);
console.log("Resolved path:", path.resolve('../models/slider'));
routes.get("/", async(req, res) => {
    const details = await Detail.findOne({
        "_id": "64d91a93c213a234c99aae81"
    });
    // console.log(details)
    const slides = await Slider.find()
        // console.log(slides)
    const services = await Service.find()

    res.render("index", {
        details: details,
        slides: slides,
        services: services
    });
});
routes.get('/gallery', async(req, res) => {
    const details = await Detail.findOne({
        "_id": "64d91a93c213a234c99aae81"
    });
    res.render("gallery", {
        details: details
    });
});
//Process contact form
routes.post("/process-contact-form", async(request, response) => {
    console.log("form is submitted");
    console.log(request.body);
    //save the data in database
    try {
        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    } catch (e) {
        console.log(e)
        response.redirect("/")
    }
})

module.exports = routes;