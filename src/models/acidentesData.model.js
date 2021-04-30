import { Schema, model } from 'mongoose';

const AccidentesDataSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    cc: {
        type: String,
        required: true
    },
    url:{
        type:String,
        default:null
        },
    eps: {
        type:String,
        default:null
        },
    fecha_accidente: Date,
    fecha_radicado: Date,
    tipo_contrato:{
        type:String,
        default:null
        },
    cargo_del_accidentado: {
        type:String,
        default:null
        },
    area_accidentado: {
        type:String,
        default:null
        },
    descripcion_accidente: {
        type:String,
        default:null
        },
    dias_perdidos: {
        type:String,
        default:null
        },
    estado_arl_positiva: {
        type:String,
        default:null
        },
    tipo_de_lesion:{
        type:String,
        default:null
        },
    agente_del_acidente: {
        type:String,
        default:null
        },
    parte_del_cuerpo_afectada: {
        type:String,
        default:null
        }
}, {
    timestamps: true
});

export default model("AccidentesData", AccidentesDataSchema);