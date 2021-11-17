const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {String, required : true, unique: true},
    password: { String, required: true }
},{timestamps: true})

const User = model("user", userSchema)

module.exports = User