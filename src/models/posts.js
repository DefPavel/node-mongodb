import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true, 
        default: 'Пусто',
    },
    body: {
        type: String,
        required : true, 
        default: 'Пусто',
    },
    user: {
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId // Ключ объекта
    },
    create_at: {
        type: Date,
        default: Date.now

    }
});

const Posts = mongoose.model('posts', postsSchema);
export default Posts;