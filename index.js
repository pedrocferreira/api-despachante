
var app = require('./config/cunstom-express')();

const utf8 = require('utf8');

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
