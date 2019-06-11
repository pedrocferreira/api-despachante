var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = function (app) {
    app.get('/apiscaj', function (req, res) {
        console.log('Recebida quequisisçao  de teste na porta 3000');
        console.log('Conectato API Scaj');
        res.send('<script> TEste</script>');

    });
    //Retorna toda lista completa de mercados  
    app.get('/apiscaj/orcamentos', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select * from orcamentos', (err, orcamentos) => {

            console.log('Select tudo :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');
            res.json(orcamentos);
        });
    })






    app.post('/apiscaj/inserir', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        var valorTotal = req.body.valorTotal;
        var placa = req.body.placa;
        var renavam = req.body.renavam;
        var lucro = req.body.lucro;
        var idcliente = req.body.idcliente;
        console.log("______________________________");
        console.log(id);
        console.log(valorTotal);
        console.log(placa);
        console.log(renavam);
        console.log(lucro);
        console.log("_________________________________");



        connection.query("INSERT INTO `orcamentos` (`id`, `valorTotal`, `placa`, `renavam`, `lucro`, `idcliente`) VALUES (NULL,  " + valorTotal +" ,  '" +placa+ "' , " +renavam+ ", " +lucro+ ", "+ idcliente +");", (err, mercados) => {
            console.log("Regitrado ");

            console.log(err);

        });


    })

    app.post('/apiscaj/contas/inserir', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        var nome = req.body.nome;
        var cpf = req.body.cpf;
        var placa = req.body.placa;
        var recebeu = req.body.recebeu;
        var nota = req.body.nota;

        connection.query("INSERT INTO `clientes` (`id`, `nome`, `cpf`, `placa`, `recebeu`, `nota`) VALUES (NULL,  '" + nome + "' ,  '" + cpf + "' , '" + placa + "', " + recebeu + ", '" + nota+"');", (err, mercados) => {
            console.log("Regitrado ");

            console.log(err);

        });

    });


    app.get('/apiscaj/orcamentos/lucro', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select sum(lucro) from orcamentos', (err, orcamentos) => {

            console.log('Select tudo :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');
            res.json(orcamentos);
           
        });
    })




    app.post('/apiscaj/orcamentos/delete', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
 

        connection.query("DELETE FROM orcamentos WHERE id = '" +id+ "' ");

        console.log("Deletado",id);
        



    

    });


    app.put('/apiscaj/orcamentos/edit', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        var valorTotal = req.body.valorTotal;
        var placa = req.body.placa;
        var renavam = req.body.renavam;
        var lucro = req.body.lucro;
        
        connection.query("UPDATE  orcamentos set  valorTotal = " + valorTotal + " , placa =  " + placa + ", renavam = " + renavam + " , lucro = " + lucro + "  WHERE id = '"+id+"' ;", (err, mercados) => {
            console.log("Editado ");

            console.log(err);




        });

       

        
    })
    
    app.post('/apiscaj/orcamentos/edit/return', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        connection.query("select * from orcamentos where id =  '" + id + "' ", (err, orcamentos) => {
            console.log("Editado ");
            res.json(orcamentos);
        });
    })


}



