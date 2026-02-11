module.exports.run = async function ({ message, args, event, api }) {
    return message.reply("IMGBB image command executed!");
};

module.exports.config = {
    name: "imgbb",
    role: 0
};
