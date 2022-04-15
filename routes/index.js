//Määritetään tarpeelliset moduulit.
const express = require('express');
const https = require("https");
const router = express.Router();

//Määritetään ohjelman käynistyessä käynistyvän sivun.
router.get('/', function (req, res, next) {
    res.render('index');
});
/*Määritetään get-metodi, joka a) ottaa yhteyttää Oxfordin
sanakirja API:iin, 2) lähettää sille hakusanan, ja
3) lähettää takaisin index-sivulle vastaanotetun JSON-tiedoston.
*/
router.get('/dictionary', function (req, res) {
    var app_id = "a4aafff4";
    var app_key = "e4def02d31d4870158a97f1faebd1447";
    var wordId = req.query.value
    console.log(wordId)
    var options = {
        host: 'od-api.oxforddictionaries.com',
        port: '443',
        path: '/api/v2/entries/en-gb/' + wordId,
        method: "GET",
        headers: {
            'app_id': app_id,
            'app_key': app_key
        }
    }
    https.get(options, (resp) => {
        let body = '';
        resp.on('data', (d) => {
            body += d;
        });
        resp.on('end', () => {
            res.send(body)
        });
    });
});
module.exports = router;