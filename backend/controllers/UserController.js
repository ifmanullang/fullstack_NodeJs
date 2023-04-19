import User from "../models/UserModels.js";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// mengambil data berdasarkan id yang di input
export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// membuat data user
export const createUser = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg:"User berhasil di tambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"data user berhasil di update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"data user berhasil di hapus"});
    } catch (error) {
        console.log(error.message);
    }
}