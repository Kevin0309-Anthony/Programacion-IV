var generarIdUnicoFecha = ()=>{
    let fecha = new Date();
    return Math.floor(fecha.getTime()/1000).toString(16);
};
var db_codigo_estudiante = new Vue({
    el: '#db_codigo_estudiante',
    data: {
        forms:{
            'autor':{mostrar:false},
           
        }
    },
});
document.addEventListener('DOMContentLoaded', e=>{
    let formularios = document.querySelectorAll('.mostrar').forEach(formulario=>{
        formulario.addEventListener('click', evento=>{
            let formulario = evento.target.dataset.form;
            db_codigo_estudiante.forms[formulario].mostrar = true;
        });
    });
});