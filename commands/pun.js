module.exports = {
    name: 'pun',
    description: "funny puns",
    execute(message, args){

        const {puns} = require('./json/punsayings.json');
        var saypuns = puns[Math.floor(Math.random() * puns.length)];
        message.channel.send(saypuns);

    }
}
