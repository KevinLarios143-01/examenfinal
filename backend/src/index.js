const app = require('./config/server');
require('./app/ruta/color')(app);

app.listen(app.get('port'), () => console.log(`Servidor corriendo en ${app.get('port')}`));