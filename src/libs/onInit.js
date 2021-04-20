import RolesSchema from '../models/roles.model';


export const createRoles = async() => {
    try {
        const contador = await RolesSchema.estimatedDocumentCount();

        if (contador > 0) return;
        const values = await Promise.all([
            new RolesSchema({ name: 'user' }).save(),
            new RolesSchema({ name: 'moderator' }).save(),
            new RolesSchema({ name: 'admin' }).save(),
        ]);

        console.log(values);

    } catch (error) {
        console.log(error);
    }


}