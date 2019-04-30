const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://janicemanu:Ab179310@cluster0-gp5dq.mongodb.net/tester?retryWrites=true', { // Generate connection to database
    useNewUrlParser: true, // Parsing URL to the form mongodb needs
    useCreateIndex: true, // Auto generate Indexes from mongodb, to get access to the data
    useFindAndModify: false //  deprecated
})