module.exports = function (app) {
    app.get("/api/get-word/", function (req, res) {
        var SATWords = require('sat-words')

        SATWords.getWords(function (words) {
            let word = words[Math.floor(Math.random() * words.length - 1)];
            console.log(word);
            res.json(word);
        })
    });
}