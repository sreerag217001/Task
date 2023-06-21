const db = require('./db')

//getUsers details

const allUsers = () => {
    return db.User.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    users: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'No data is available'
                }
            }
        }
    )
}

//Signup users
const addUser = (id, name, email, password) => {
    return db.User.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: 'User is already exist'
            }
        } else {
            const newUser = new db.User({
                id,
                name,
                email,
                password
            })
            newUser.save()
            return{
                statusCode:200,
                message:"New user added succesfully"
            }
        }
    })
}


module.exports = {
    allUsers,
    addUser,
}