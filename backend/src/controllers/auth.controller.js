import { readFile } from '../utils/fileFunctions.js'

const allUsers = readFile('./src/models/users.json')

export const signIn = (req, res) => {

    console.log(req.body)
    
    let found = allUsers.find(function (item) {
        return item.phone === parseInt(req.body.phone);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }

}