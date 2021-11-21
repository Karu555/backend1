// const authorise = (permission) => {
//   return (req, res, next) => {
//     const originalSendFunc = res.send.bind(res);
//     res.send = function (body) {
//       body.name = "Nrupul Dev";
//       console.log(body); // do whatever here
//       return originalSendFunc(body);
//     };
//     next();
//   };
// };


// const express = require('express');
// const app = express();

// get ;- retrive a list of item or a single item
// post :- save something on the server or the dp
// put / patch :- update an item, put replaces the items and patch appends to it
// delete:- when you want to delete an item

//middleware tp parse request body


// app.use(express.json)

// app.get('/', (req, res) => {
//     console.log("Home page get request");
// });

// app.post('/', (req, res) => {

//     console.log("req.nody", req.body)
//     console.log("Home page Post request");
// });



// function logger(req, res, next) {
//     console.log("logging beore");
//     next();
//     console.log("logging after");

// }

// app.listen(1234, () => {
//     console.log("Listening on port 1234")
// })


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Home page");
})

// app.get('/user', (req, res) => {
//     res.send("C:\Users\Karunesh Ranjan\Downloads\user.csv");
// })

app.listen(8000, () => {
    console.log("Listening on port 8000");
})