const mongoose = require('mongoose');
const URI= 'mongodb+srv://root:CristinaBelenguer@miclustersolvam.kurum.mongodb.net/circusLab?retryWrites=true&w=majority&appName=MiclusterSolvam'
mongoose.connect(URI)
.then(bd=>console.log('bd connected'))
.catch((err)=>console.log(err));
module.exports = mongoose;

