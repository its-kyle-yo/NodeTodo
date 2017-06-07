var configValues = require('./config.json');
module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configValues.host}/${configValues.collection}`;
    }
};
