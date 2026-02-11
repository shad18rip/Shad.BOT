module.exports.run = async function ({ message, args, event, api }) {
    return message.reply("Quiz command executed!");
};

module.exports.config = {
    name: "quiz",
    role: 0
};
