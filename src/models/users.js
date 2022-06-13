import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, // Тип поля
        required : true, // Обязательное ли
        default: 'Не указано', // По дефолту
        unique: true, // Уникальность
    },
    email: {
        type: String,
        required: true,
        default: 'Не указано',
        unique: true,
    },
});

const Users = mongoose.model('users', userSchema);
export default Users;