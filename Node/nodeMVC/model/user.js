const fs = require("fs");
const dataPath = './data/user.json'

const createUsers = (postData) => {
    return fs.promises.readFile(dataPath, 'utf8')
    .then((data) => {
        const jsonData = JSON.parse(data)
        jsonData.push(postData)
        return jsonData
    })
    .catch((error) => console.log(error))
}

const updateUsers = (id, postData) => {
    return fs.promises.readFile(dataPath, 'utf8')
    .then((data) => {
        const jsonData = JSON.parse(data)
        const updateArr = jsonData.map(elem=> {
            if(elem.id == Number(id)){
                elem.firstName = postData.firstName,
                elem.lastName = postData.lastName
            }
            return elem
        })
        return updateArr
    })
    .catch((error) => console.log(error))
}

const deleteUser = (id) => {
    return fs.promises.readFile(dataPath, 'utf8')
    .then((data) => {
        const jsonData = JSON.parse(data)
        const dataObj = jsonData.filter(elem => elem.id != Number(id))
        return dataObj
    })
    .catch((error) => console.log(error))
}

const getUsersById = (id) => {
    return fs.promises.readFile(dataPath, 'utf8')
    .then((data) => {
        const jsonData = JSON.parse(data)
        const dataObj = jsonData.find(elem => elem.id == Number(id))
        return dataObj
    })
    .catch((error) => console.log(error))
}

const getAllUsers = () => {
    return fs.promises.readFile(dataPath, 'utf8')
    .then((data) => {
        const jsonData = JSON.parse(data)
        console.log(jsonData)
    })
    .catch((error) => console.log(error))
}

module.exports = {
    createUsers,
    updateUsers,
    deleteUser,
    getUsersById,
    getAllUsers
}