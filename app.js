let express = require('express');
let port = 3000;
let app = express();
let petshop = [
    {   id: 0,
        brand: "Purina One",
        name: "Purina One Indoor Advantage",
        type: "FOOD",
        price: 319
    },{   id: 1,
        brand: "CATTOY",
        name: "Kanimal Cat Teaser",
        type: "TOY",
        price: 89
    },{   id: 2,
        brand: "Dental Fresh",
        name: "Dental Fresh Original Formula for Cats",
        type: "HEALTHY",
        price: 280
    }
]

app.get('/', (req, res) => {console.log('Home Page !!'), res.send("Hello Home Page")});

app.get('/petshop', (req, res) => {
    console.log('Petshop Page !!')
    res.json(petshop) });

app.get('/crash', (req, res) => {
    console.log('>>>>>>> Web Crash!! <<<<<<<')
    res.send('CrasH!!')
    console.log('>>>>>>> Server down!! <<<<<<<')
    process.exit(1) });

app.listen(port, () => console.log('Server wtf runing  at PORT', port));


////////////////////////////////////////////////////////////////


// let express = require('express');
// let app = express();
// let petshop = [
//     {   id: 0,
//         brand: "Purina One",
//         name: "Purina One Indoor Advantage",
//         type: "FOOD",
//         price: 319
//     },{   id: 1,
//         brand: "CATTOY",
//         name: "Kanimal Cat Teaser",
//         type: "TOY",
//         price: 89
//     },{   id: 2,
//         brand: "Dental Fresh",
//         name: "Dental Fresh Original Formula for Cats",
//         type: "HEALTHY",
//         price: 280
//     }
// ]

// app.get('/', (req, res) => {console.log('Home Page !!'), res.send("Hello Home Page")});

// app.get('/petshop', (req, res) => {
//     console.log('Petshop Page !!')
//     res.json(petshop) });

// app.get('/crash', (req, res) => {
//     console.log('>>>>>>> Web Crash!! <<<<<<<')
//     res.send('CrasH!!')
//     console.log('>>>>>>> Server down!! <<<<<<<')
//     process.exit(1) });

// app.listen(process.env.PORT, () => console.log('Server running at PORT', process.env.PORT));