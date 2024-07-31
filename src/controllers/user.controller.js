import { readFile } from '../utils/fileFunctions.js'

const allUsers = readFile('./src/models/users.json')

export const getAllUsers = (_, res) => {
    res.render("index", { users: allUsers });
}

export const getUserById = (req, res) => {
    let found = allUsers.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
}

export const createUser = (req, res) => {
    let items = allUsers.map(item => item.id);

    let newId = items.length > 0 ? Math.max.apply(Math, items) + 1 : 1;

    let newItem = {
        id: newId,
        name: req.body.name,
        author: req.body.author,
        page_number: req.body.page_number
    }

    allUsers.push(newItem);

    res.status(201).json({
        'message': "successfully created",
        allUsers
    });
}

export const updateUser = (req, res) => {
    let found = allUsers.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let updateUser = {
            id: found.id,
            name: req.body.name,
            author: req.body.author,
            page_number: req.body.page_number
        };

        let targetIndex = allUsers.indexOf(found);

        allUsers.splice(targetIndex, 1, updateUser);

        res.status(201).json({ 'message': "allUsers updated", allUsers });
    } else {
        res.status(404).json({
            'message': 'unable to insert book'
        });
    }
}

export const updateUserByPatch = (req, res) => {

}

export const deleteUserById = (req, res) => {
    let found = allUsers.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let targetIndex = allUsers.indexOf(found);
        allUsers.splice(targetIndex, 1);
        res.status(201).json({
            'message': "successfully deleted",
            allUsers
        });
    } else {
        res.status(404).json({
            'message': "book not found"
        });
    }
}
