import AcidentesSchema from '../models/acidentesData.model';

const getAll= async(req,res)=>{
    const Data = await AcidentesSchema.find();
    res.status(200).json(Data);
}

const getOne = async(req,res)=>{
    let id= req.params.id;
    const data = await AcidentesSchema.findById(id,(err,data)=>{
        if(err){
            res.status(400).json({ message: "datos no encontrados" });
            return;
        }
        if(!data){
            res.status(400).json({ message: "datos no existentes" });    
        }else{
            return data
        }


    });

    res.status(200).json(data)
}

const addAccidente = async(req, res) => {
    const { 
        nombres,
        apellidos,
        cc,
        url,
        eps,
        fecha_accidente,
        fecha_radicado,
        tipo_contrato,
        cargo_del_accidentado,
        area_accidentado,
        descripcion_accidente,
        dias_perdidos,
        estado_arl_positiva,
        tipo_de_lesion,
        agente_del_acidente,
        parte_del_cuerpo_afectada

    } = req.body;
    const newData=  new AcidentesSchema({
        nombres,
        apellidos,
        cc,
        url,
        eps,
        fecha_accidente,
        fecha_radicado,
        tipo_contrato,
        cargo_del_accidentado,
        area_accidentado,
        descripcion_accidente,
        dias_perdidos,
        estado_arl_positiva,
        tipo_de_lesion,
        agente_del_acidente,
        parte_del_cuerpo_afectada
    })


    const saveAccidenteData =await newData.save();
    res.status(201).json(saveAccidenteData);
}

const editAccidente = async(req,res)=>{

    let id = req.params.id;
    try {
        const upData= await AcidentesSchema.findByIdAndUpdate(id,req.body, {
            new: true
        });
        res.status(200).json(upData);

    } catch (error) {
        res.status(400).json({message:"error al editar"});
        return

    }
}

const deleteAccidente = async(req,res)=>{
    let id = req.params.id;
    try {
        await AcidentesSchema.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "error al eliminar" });
    }
    res.status(200).json({ message: "ok" });

}


module.exports={
    getAll,
    getOne,
    addAccidente,
    editAccidente,
    deleteAccidente
}