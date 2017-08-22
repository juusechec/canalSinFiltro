import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  cuid: { type: 'String', required: true},
  titulo: { type: 'String', required: true },
  autor: { type: 'String', required: true },
  descripcion: { type: 'String', required: true },
  url: { type: 'String', required: true },
  idsCategorias: [ {type: 'String', required: true} ],
  categorias: [ {type: 'String', required: true} ],
  fechaAgregado: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Video', videoSchema);
