const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/livraria', {
    authSource: "admin",
    user: "user",
    pass: "pass",
            }) 
            .then(() => {
                console.log('Database connection successful');
            })
            .catch((err) => {
                console.error('Database connection error');
                console.error(err);
            });


module.exports = mongoose;