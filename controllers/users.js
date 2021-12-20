import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        console.log(users);

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);

    console.log(user);
    console.log(newUser);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}