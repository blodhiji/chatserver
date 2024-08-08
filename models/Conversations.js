const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
    members :{
        type: Array,
        required: true,
    },
})

const Conversations = mongoose.model('Conversation',ConversationSchema);

module.exports = Conversations;