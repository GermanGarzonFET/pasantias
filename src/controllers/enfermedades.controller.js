import EnfermedadesSchema from '../models/enfermedadesData.model';

const getAll= async(req,res)=>{
    const Data = await EnfermedadesSchema.find();
    res.status(200).json(Data);
}

const getOne = async(req,res)=>{
    let id= req.params.id;
    const data = await EnfermedadesSchema.findById(id,(err,data)=>{
        if(err){
            res.status(400).json({ message: "datos no encontrados" });
            return;
        }
        if(!data){
            res.status(400).json({ message: "datos no existentes" });    
            return;
        }else{
            return data
        }
    });

    res.status(200).json(data)
}

const addEnfermedades = async(req, res) => {
    console.log('entre al add enfermedades')
        const { 
            nombres,
            apellidos,
            cc,
            fecha_ingreso_a_la_empresa,
            cargo,
            eps,
            fondo_pension,
            arl,
            fecha_radicado,
            diagnostico,
            evaluacion_medica,
            recomendaciones_laborales,
            medico_general,
            medico_especialista,
            medico_laboral,
            estado_arl_positivo,
            fecha_entrega_arl_sura,
            calificacion,
            informe_dado_empleado,
            informe_dado_arl,
            area_sst
        } = req.body;
        const newData=  new EnfermedadesSchema({
            nombres,
            apellidos,
            cc,
            fecha_ingreso_a_la_empresa,
            cargo,
            eps,
            fondo_pension,
            arl,
            fecha_radicado,
            diagnostico,
            evaluacion_medica,
            recomendaciones_laborales,
            medico_general,
            medico_especialista,
            medico_laboral,
            estado_arl_positivo,
            fecha_entrega_arl_sura,
            calificacion,
            informe_dado_empleado,
            informe_dado_arl,
            area_sst
    
        })
        const saveEnfermedadesData = await newData.save();
        res.status(201).json(saveEnfermedadesData);

}

const editEnfermedades = async(req, res)=>{

    let id = req.params.id;
    try {
        const upData= await EnfermedadesSchema.findByIdAndUpdate(id,req.body, {
            new: true
        });
        res.status(200).json(upData);

    } catch (error) {
        res.status(400).json({message:"error al editar"});
        return

    }
}

const deleteEnfermedades = async(req,res)=>{
    let id = req.params.id;
    try {
        await EnfermedadesSchema.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "error al eliminar" });
    }
    res.status(200).json({ message: "ok" });

}

module.exports={
    getAll,
    getOne,
    addEnfermedades,
    editEnfermedades,
    deleteEnfermedades
}

