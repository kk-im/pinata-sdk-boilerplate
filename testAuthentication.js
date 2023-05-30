// dotenv package setup goes here

require('dotenv').config();
const { PINATA_API_KEY, PINATA_SECRET_KEY } = process.env;

// pinata SDK setup goes here
const pinataSDK = require('@pinata/sdk')
const pinata = new pinataSDK( PINATA_API_KEY, PINATA_SECRET_KEY );

// testAuthentication
pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});