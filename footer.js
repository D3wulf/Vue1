//accedemos a la app OJO NO USAR CAMELCASE Y TODO EN MINUSCULAS
app.component('footer-vue',{
    //los props van primero
    props:['valor','fecha'],
    //aqui escribimos el html
    template: /*html*/ `
    <div class=" bg-dark py-3 mt-2 text-white">
    <h3>{{valor}} </h3>
    <p>{{fecha}}</p>
    </div>

    `,
    data(){

        return{

            texto: 'Footer del sitio web',
            

        }
    }
});