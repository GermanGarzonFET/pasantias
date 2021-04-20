import jwt from 'jsonwebtoken';
import conf from '../config';
import UsuariosSchema from '../models/usuarios.model';
import RolesSchema from '../models/roles.model';
import LibroSchema from '../models/libro.model';
import ComentariosSchema from '../models/comentarios.model';



export const verifyToken = async(req, res, next) => {

    try {
        const token = req.headers["x-token"];

        if (!token) {
            return res.status(403).json({ message: 'no token' });

        };
        const decode = jwt.verify(token, conf.SECRET_KEY);
        req.userId = decode.id;

        const userData = await UsuariosSchema.findById(req.userId, { pass: 0 });
        if (!userData) {
            return res.status(403).json({ message: 'no user found' });
        };

        next();

    } catch (error) {
        return res.status(401).json({ message: "sin autorizacion", error });

    }

};


export const isAdmin = async(req, res, next) => {
    const userData = await UsuariosSchema.findById(req.userId);
    const roles = await RolesSchema.find({ _id: { $in: userData.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "admin") {
            next();
            return;
        }
    }
    return res.status(403).json({ message: "requiere el rol admin  " });
};

export const isModerator = async(req, res, next) => {
    const userData = await UsuariosSchema.findById(req.userId);
    const roles = await RolesSchema.find({ _id: { $in: userData.roles } });

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "moderator") {
            next();
            return;
        }
    }
    return res.status(403).json({ message: "requiere el rol moderator  " });
};



export const verifyLibro = async(req, res, next) => {
    try {
        const idLibro = req.params.id;

        const dataLibro = await LibroSchema.findById(idLibro);
        if (dataLibro == null) {
            return res.status(400).json({ message: "El libro no existe" });

        }
        next();

    } catch (error) {
        return res.status(400).json({ message: "El libro no existe" });

    }
};

export const verifyUserComent = async(req, res, next) => {
    const id_comentario = req.params.id;
    console.log(req.userId);
    const dataComentario = await ComentariosSchema.findById(id_comentario);
    console.log(dataComentario.id_usuario);
    if (dataComentario.id_usuario == req.userId) {
        next();
    } else {
        res.status(400).json({ message: 'no es el usuario' });
    }
};