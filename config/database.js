const crypto = require('crypto').randomBytes(256).toString();


module.exports = {
    uri: `mongodb://localhost:27017/` +this.db,
    secret: crypto,
    db: 'meanstack-angular2'
}