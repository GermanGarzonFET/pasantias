import UsuariosSchema from '../models/usuarios.model';



const getUsers = async(req, res, next) => {
    const userData = await UsuariosSchema.find();
    res.status(200).json(userData);
};
const getUser = async(req, res) => {
    const id_user = req.params.id;
    const userData = await UsuariosSchema.findById(id_user, (err, data) => {
        
        if (err) {
            res.status(400).json({ message: "user no encontrado" });
            return;


        }
        if (!data) {
            res.status(400).json({ message: "user no existe" });


        } else {
            return data
        }
    });
    console.log(userData);
    res.status(200).json(userData);


}
const addUser = (req, res) => {
    const { nombre, email, pass, roles } = req.body;
    res.json({ message: 'get add' })
}
const editUser = (req, res) => {
    res.json({ message: 'get edit' })
}
const deleteUser = (req, res) => {
    res.json({ message: 'get delete' })
}



module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}