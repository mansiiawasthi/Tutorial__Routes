// const express = require("express");
// const hbs = require("hbs");
// const app = express();
// const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
// const routes = require('./routes/main')
// const Detail = require("./models/Details")
// const Slider = require("./models/slider")
// const Service = require("./models/Service")
//     // const Contact = require("./models/Contact")


// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.use('/static', express.static("public"))
// app.use('', routes);

// app.set('view engine', 'hbs')
// app.set("views", "views")
// hbs.registerPartials("views/partials")

// mongoose.connect("mongodb://127.0.0.1:27017/Website_tut", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("db connected");

//         // Detail.create({
//         //     brandName: "Info Technical Solution",
//         //     brandIconUrl: "https://logo.com/image-cdn/images/kts928pd/production/a195406f1cbf3510e8901abf512267d4a80d2230-359x359.png?w=1080&q=72",
//         //     links: [{
//         //             label: "Home",
//         //             url: "/"
//         //         },
//         //         {
//         //             label: "Services",
//         //             url: "/services"
//         //         },
//         //         {
//         //             label: "Gallery",
//         //             url: "/gallery"
//         //         },
//         //         {
//         //             label: "About",
//         //             url: "/about"
//         //         },
//         //         {
//         //             label: "Contact Us",
//         //             url: "/contact us"
//         //         },
//         //     ],
//         // });
//         // Slider.create(
//         //     [{
//         //             title: 'Learn Web Development in very easy manner.',
//         //             subTitle: 'Web development refers to the creating, building, and maintaining of websites.',
//         //             imageUrl: "/static/images/web_image.jpeg"
//         //         },
//         //         {
//         //             title: 'What is database?',
//         //             subTitle: 'A database is an organized collection of data, so that it can be easily accessed and managed.',
//         //             imageUrl: "/static/images/database_image.jpeg"
//         //         },
//         //         {
//         //             title: 'What about Node js?',
//         //             subTitle: 'Node js is runtime environment to execute javascript outside browser.',
//         //             imageUrl: "/static/images/inFuture_image.jpeg"
//         //         },
//         //     ])
//         // Service.create([{
//         //         icon: 'fab fa-accusoft',
//         //         title: 'Provide Best Courses',
//         //         description: 'We provide best courses that helps us student in placement and learning coding.',
//         //         linkText: 'https://www.learncodewithmansi.com',
//         //         link: 'Check'
//         //        linkText1: 'https://www.learncodewithmansi.com',
//         //        link1:'Rodmap'
//         //     },
//         //     {
//         //         icon: 'fab fa-affifliatetheme',
//         //         title: 'Learn Projects',
//         //         description: 'We provide best courses that helps us student in placement and learning coding.',
//         //         linkText: 'https://www.learncodewithmansi.com',
//         //         link: 'Learn'
//         //     },
//         //     {
//         //         icon: 'fab fa-affifliatetheme',
//         //         title: 'Learn Projects',
//         //         description: 'We provide best courses that helps us student in placement and learning coding.',
//         //         linkText: 'https://www.learncodewithmansi.com',
//         //         link: 'Learn'
//         //     },

//         // ])
//     })
//     .catch((err) => {
//         console.error("Error connecting to the database:", err);
//     });

// app.listen(process.env.PORT | 5556, () => {
//     console.log("server stared");
// });
const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require('./routes/main');
const Detail = require("./models/Details");
const Slider = require("./models/slider");
const Service = require("./models/Service");
const Contact = require("./models/Contact");
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static("public"));
app.use('', routes);

app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Website_tut", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected successfully");

    // Your database creation code here
})
.catch((err) => {
    console.error("Error connecting to the database:", err);
});

const port = process.env.PORT || 5556;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
