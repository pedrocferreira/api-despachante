function PagamentoDao(connection) {
    const utf8 = require('utf8');
    this._connection = connection;
}
PagamentoDao.prototype.atualiza = function (pagamento, callback) {
    this._connection.query("UPDATE  pagamentos SET status =? where id = ?",[pagamento.status, pagamento.id] ,callback);
}

PagamentoDao.prototype.salva = function (pagamento, callback) {
    this._connection.query("INSERT INTO pagamentos SET ?", pagamento, callback);
}

PagamentoDao.prototype.buscaPorId = function (id, callback) {
    this._connection.query("select * from pagamentos where id = ?", [id], callback);
}
PagamentoDao.prototype.listar = function (pagamentos,callback) {
    this._connection.query("select * from pagamentos ", pagamento, callback);
}

module.exports = function () {
    return PagamentoDao;
};