const {Schema, model} = require('mongoose')

const commentSchema = new Schema({
    username: {
        type: String,
    },
    message:{
        type: String,
        required: true
    },
    commentedAt:{
        type: Date,
        default: Date.now
    }
    
})

const blogSchema = new Schema({
    title:{
        type: String,
        unique: true,
        minlength: 5,
    },
    content:{
        type: String,
        required: true,
        minlength: 50
    },
    category: {
        type: String,
        default: "General"
    },
    author:{
        type: String,
    },
    tags:{
        type: [String],
    },
    likes:{
        type: [String],
        default: []
    },
    comments: [commentSchema],

},

{
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

)

const blogModel = model("Blog", blogSchema)

const commentModel = model('comment', commentSchema)

module.exports = {commentModel, blogModel}
