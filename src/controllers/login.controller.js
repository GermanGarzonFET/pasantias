import UsuariosSchema from '../models/usuarios.model';
import jwt from 'jsonwebtoken';
import config from '../config';
import RolSchema from '../models/roles.model';

const register = async(req, res) => {
    const { nombre, email, pass, rol } = req.body;
    const newUsuario = new UsuariosSchema({
        nombre,
        email,
        pass: await UsuariosSchema.encryptPass(pass)
    });

    if (rol) {
        const foundRol = await RolSchema.find({ name: { $in: rol } });
        newUsuario.roles = foundRol.map(roles => roles._id)
    } else {
        const rol = await RolSchema.findOne({ name: "user" });
        newUsuario.roles = [rol._id]
    }

    const saveUsuario = await newUsuario.save();

    const token = jwt.sign({ id: saveUsuario._id }, config.SECRET_KEY, {
        expiresIn: 86400 //24 horas
    })


    res.json(token);

};

const iniciar = async(req, res) => {

    const { email, pass } = req.body;

    const usuarioExiste = await UsuariosSchema.findOne({ email: email }).populate("rol");
    if (!usuarioExiste) {
        res.status(400).json({ message: "email no found" });
        return;
    };

    const comparePass = await UsuariosSchema.comparePass(pass, usuarioExiste.pass);
    if (!comparePass) {
        return res.status(401).json({ token: null, message: 'contraseña mal' })
    }

    const token = jwt.sign({ id: usuarioExiste._id }, config.SECRET_KEY, {
        expiresIn: 86400 //24 horas
    });

    res.json(token);


};

module.exports = {
    register,
    iniciar

}