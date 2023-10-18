const indexController = {}

indexController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ESTUDIANTE', (err, rowsEstudiantes) => {
            if (err) {
                res.json(err);
            }
            console.log(rowsEstudiantes);
            res.render('estudiante', {
                data: rowsEstudiantes
            })
        })
    })
}

indexController.saveE = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {

        conn.query('insert into estudiante set ?', [datos], (err, datosInsertados) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error al insertar datos en la base de datos ' + err);
            } else {
                res.redirect('/');
            }
        });



    });
};

indexController.deleteE = (req, res) => {

    let id = 0;
    id = req.params.id;
    // const id = req.body.id; // El identificador del registro a eliminar

    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al establecer conexión a la base de datos ' + err);
            return;
        }

        const sql = 'DELETE FROM estudiante WHERE id = ?';

        conn.query(sql, [id], (err, rowIdE) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error al eliminar el registro ' + err);
            } else {
                res.redirect('/');
            }
        });
    });
};

indexController.showE = (req, res) => {


}
//Exportamos el archivo
module.exports = indexController;