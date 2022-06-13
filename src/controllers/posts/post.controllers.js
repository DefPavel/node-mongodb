import Posts from "../../models/posts.js";
import Users from "../../models/users.js";
/**
 * Создать новый пост
 */
export const createPost = async (req, res) => {
    try {
        if(!(req.body.body && req.body.title)) {     
            throw new Error('Post is empty!');
        }
        if(!req.params.idUser) {     
            throw new Error('User Id is empty!');
        }
        const userId = await Users.findById(req.params.idUser);
        const payload = {
            title: req.body.title,
            body: req.body.body,
            user: userId._id,
        }
        const post = await Posts.create(payload);
        res.status(200).send(post);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};
/**
 * Получить все посты на юзера
 */
export const getPostsByUser = async (req, res) => {
    try {
        if(!req.params.idUser) {
            throw new Error('Not fount User Id');
        }
        const userId = await Users.findById(req.params.idUser);
        // Поиск по полю user
        const post = await Posts.find({user : userId._id});
        res.status(200).send(post);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};
/**
 * Удалить пост
 */
export const deletePost = async (req, res) => {
    try {
        if(!req.params.id) {
            throw new Error('Not fount Post Id');
        }
        const post = await Posts.findByIdAndDelete(req.params.id);
        res.status(200).send(post);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};