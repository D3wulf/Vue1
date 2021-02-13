//el comienzo, para trabajar con vue, funcion create app + objeto
const app = Vue.createApp({
    //los Datos
    data(){

        //lo que se va devolviendo
        return{

            titulo: "Banco Marita",
            cantidad: 1000,
            enlace: "www.google.es",
            estado: true,
            servicios: ['estafas', 'engaños', 'comisiones','usura'],
            desactivar: false

        }
    },
    // Eventos
    methods: {

        agregarSaldo(){

            this.cantidad = this.cantidad + 100


        },
        disminuirSaldo(){

            
            if (this.cantidad === 0){
                alert("Estas pelao");
                this.desactivar= true;
                return;
            }
            this.cantidad = this.cantidad - 100;

        }




    },
    //calculos tienen que retornar alguna info siempre
    computed: {

        colorCantidad(){

            return this.cantidad > 500 ? 'text-success' : 'text-danger';
        },
        mayusTexto(){

            return this.titulo.toUpperCase()
        }

    }





})