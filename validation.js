import { ObjectId } from "mongodb"
import xss from "xss"

function checkUsername(username){
    if(!username) throw "No username provided"
    if(typeof username!=='string') throw "Username must be a string"
    username=xss(username.trim())
    if(username.length<3) throw "Username must be at least 3 characters long"

    return username
}

function checkPassword(password){
    if(!password) throw "No password provided"
    if(typeof password!=='string') throw "Password must be a string"
    password=xss(password.trim())
    if(password.length<3) throw "Password must be at least 3 characters long"

    return password
}

function checkDisplayName(displayName){
    if(!displayName) throw "No displayName provided"
    if(typeof displayName!=='string') throw "displayName must be a string"
    displayName=xss(displayName.trim())
    if(displayName.length<3) throw "displayName must be at least 3 characters long"

    return displayName
}

function checkId(id){
    if(!id) throw "No ObjectId given"
    if(!ObjectId.isValid(id)) throw `${id} is not a valid ObjectId`
    return id
}

export default {
    checkUsername,
    checkPassword,
    checkDisplayName,
    checkId
}