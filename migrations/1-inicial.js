'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Artists", deps: []
 * createTable "Cards", deps: []
 * createTable "CardArtists", deps: []
 * createTable "CardCollections", deps: []
 * createTable "CardColors", deps: []
 * createTable "Collections", deps: []
 * createTable "Colors", deps: []
 * createTable "Keywords", deps: []
 * createTable "Prices", deps: []
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "inicial",
    "created": "2020-10-19T00:17:00.399Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Artists",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Cards",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "CardArtists",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "CardCollections",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "CardColors",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Collections",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Colors",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Keywords",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Prices",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
