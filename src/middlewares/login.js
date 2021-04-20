import jwt, { verify } from 'jsonwebtoken';
import config from '../config';
import UserSchema from '../models/usuarios.model';
import RolesSchema from '../models/roles.model';

export const chekUserExisted = async(req, res, next) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const Nombre = await UserSchema.findOne({ nombre: nombre });
    const Email = await UserSchema.findOne({ email: email });
    if (Nombre) {
        return res.status(400).json({ message: "El  nombre de usuario ya existe" });
    };
    if (Email) {
        return res.status(400).json({ message: "El  email ya se encuentra en uso" });
    };
    next();

};

export const chekRoleExisted = async(req, res, next) => {
    const Roles = ["admin", "moderator", "user"];
    const rol = req.body.rol;
    console.log(rol);

    console.log(rol);

    if (rol) {
        for (let i = 0; i < rol.length; i++) {
            console.log(rol[i]);

            if (!Roles.includes(rol[i])) {
                /*                 console.log(rol[i]);
                 */
                return res.status(400).json({
                    message: `Role ${rol[i]} no existe`
                })
            }
        }
    }
    next();

};