const mongoose = require('mongoose');
const config = require('../config');
const mongo_uri = process.env.MONGO_URI || config.mongo_uri;
mongoose.connect(mongo_uri);
