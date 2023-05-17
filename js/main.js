$(document).ready(function() {
    $('#carrossel-imagens').slick({
        autoplay: true, 
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00.000-000');

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            }
        },
            messages:{
                nome:'Este campo é obrigatório',
                cpf:'Este campo é obrigatório',
                endereco:'Este campo é obrigatório',
                email:'Este campo é obrigatório',
            },
            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                console.log(camposIncorretos);
                if (camposIncorretos){
                    alert(`Existem campos incorretos`)
                }
            }
    })
    $('.lista-servicos button').click(function(){
        const destino = $('#contato');

        const nomeProduto = $(this).parent().find('h3').text();

        $('#produtoInteresse').val(nomeProduto)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
})