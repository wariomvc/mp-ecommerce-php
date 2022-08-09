document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp(){
    addEventButton();
}

function addEventButton(){
    boton = document.querySelector("#mp-button");
    preferencia_id = document.querySelector("#preferencia")
    console.log(preferencia_id)
    console.log(boton)

        console.log("Click");
        const mp = new MercadoPago('APP_USR-d81f7be9-ee11-4ff0-bf4e-20c36981d7bf',{
            locale: 'es-AR'
        });


        mp.checkout({
            preference:{
                id: preferencia_id
            },
            render:{
                container: '.mp-button',
                label: 'Pagar',
            }
        })

}