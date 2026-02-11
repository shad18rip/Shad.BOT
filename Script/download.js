module.exports.run = async function ({ message, args, event, api }) {
    return message.reply("Download command executed!");
};

module.exports.config = {
    name: "download",
    role: 0
};
