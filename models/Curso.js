const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    tutor: {
        type: String,
        required: true
    },
    temas: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Curso', CursoSchema);