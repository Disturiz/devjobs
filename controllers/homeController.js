exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        nombrePagina: 'devJobs',
        tagline: 'Encuentra y Pública Trabajos para desarrolladores Web y IBM i', 
        barra: true,
        boton: true
    })
} 