const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM persona;',(err,clientes) =>{
            if(err){
                res.json(err);
            }
            console.log(clientes);
            res.render('Login');
        });
    })
};


controller.consultar = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM persona p WHERE email_personal = \'archundiadaniel17@gmail.com\';',(err,clientes) =>{
            if(err){
                res.json(err);
            }

            console.log(clientes);
            res.render('3evaluacion',{
                data: clientes
            });
        });
    })
};


controller.logear = (req,res) => {
    const data =req.body;
    console.log(req.body);
    
    req.getConnection((err,conn) => {
            conn.query('SELECT * FROM persona p WHERE email_personal = \''+data.email+'\';',(err,clientes) =>{
                data2 : clientes;
                if(err){
                    res.render('Login');
                    alert("Datos Incorrectos");
                }
                console.log(clientes)
                if(data.email == clientes[0].email_personal){
                    res.render('Principal',{
                        data: clientes
                    });
                    console.log(clientes);
                }else{
                res.render('Login');}
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