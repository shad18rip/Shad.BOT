module.exports.run = async function ({ message, args, event, api }) {
    return message.reply("Imgur image command executed!");
};

module.exports.config = {
    name: "imgur",
    role: 0
};
