import User from "../models/UserModels.js";
//mengambil semua data user yang telah dibuat
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
        // mengisi body untuk melakukan input data user
        await User.create(req.body);
        res.status(201).json({msg:"User berhasil di tambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) => {
    try {
         // mengisi body untuk melakukan update data user sesuai id yang tersedia
        await User.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"data user berhasil di perbaharui"});
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