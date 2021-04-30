import { Schema, model } from 'mongoose';

const EnfermedadesDataSchema = new Schema({
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
    fecha_ingreso_a_la_empresa: Date,
    cargo:{
        type:String,
        default:null
        },
    eps:{
        type:String,
        default:null
        },
    fondo_pension:{
        type:String,
        default:null
        },
    arl:{
        type:String,
        default:null
        },
    fecha_radicado:Date,
    diagnostico:{
        type:String,
        default:null
        },
    evaluacion_medica:{
        type:String,
        default:null
        },
    recomendaciones_laborales:{
        type:String,
        default:null
        },
    medico_general:{
        type:String,
        default:null
        },
    medico_especialista:{
        type:String,
        default:null
        },
    medico_laboral:{
        type:String,
        default:null
        },
    estado_arl_positivo:{
        type:String,
        default:null
        },
    fecha_entrega_arl_sura:Date,
    calificacion:{
        type:String,
        default:null
        },
    informe_dado_empleado:{
        type:String,
        default:null
        },
    informe_dado_arl:{
        type:String,
        default:null
        },
    area_sst:{
        type:String,
        default:null
        }
    
}, {
    timestamps: true
});

export default model("EnfermedadesData", EnfermedadesDataSchema);