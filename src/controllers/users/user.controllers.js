import Users from "../../models/users.js"; // странно, почему jsonfig игнорирует src
/**
 * Получить всех юзеров
 */
export const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).send(users);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};
/**
 * Создать нового юзера
 */
export const createUser = async (req, res) => {
    try {
        if(!(req.body.name && req.body.email)) {     
            throw new Error('User Name or User Email is empty!');
        }
        const users = await Users.create(req.body);
        res.status(200).send(users);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};
/**
 * Получить найти Id и удалить юзера
 */
export const deleteUser = async (req, res) => {
    try {
        if(!req.params.id) {
            throw new Error('Not fount User Id');
        }
        const users = await Users.findByIdAndDelete(req.params.id);
        res.status(200).send(users);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};
/**
 * Получить юзера по Id
 */
export const findUserById = async (req, res) => {
    try {
        if(!req.params.id) {
            throw new Error('Not fount User Id');
        }
        const users = await Users.findById(req.params.id);
        res.status(200).send(users);

    } catch (e) {
        const error = new Error(e);
        res.status(500).send(error.message);
    }
};

