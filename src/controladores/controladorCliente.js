const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM persona;',(err,clientes) =>{
            if(err){
                res.json(err);
            }
            console.log(clientes);
            res.render('FormAltas',{
                data: clientes
            });
        });
    })
};


controller.guardar = (req,res) => {
    const data =req.body;
    console.log(req.body);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO persona VALUES(37,\''+data.nombre+'\',\''+data.pApellido+'\',\''+data.sApellido+'\',\''+data.fechaNac+'\',\''+data.genero+'\','+parseInt(data.pais)+','+parseInt(data.estado)+','+parseInt(data.colonia)+','+parseInt(data.municipio)+','+parseInt(data.calle)+','+parseInt(data.noExterior)+','+parseInt(data.noInterior)+','+parseInt(data.cp)+',\''+data.edoCivil+'\',\''+data.email+'\','+parseInt(data.tel)+','+parseInt(data.telcel)+',\''+data.curp+'\',\''+ data.nacionalidad+'\',\'NULL\');',(err,clientes)=> {
            if(err){
                res.json(err);
                res.send("error")
            }
            res.render('login',{
            });
        });
    });
}

module.exports = controller;