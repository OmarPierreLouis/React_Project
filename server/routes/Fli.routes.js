const FliController = require('../controllers/Fli.controller');

module.exports = (app) => {
    app.get('/api/Fli', FliController.testFli);
    app.get('/api/Fli/get', FliController.getAllFli);
    app.post('/api/Fli/new', FliController.newFli);
    app.get('/api/:id', FliController.getOneFli);
    app.put('/api/Fli/:id', FliController.updateFli);
    app.delete('/api/Fli/:id', FliController.deleteFli);
}
