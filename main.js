$(document).ready(function () {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);

        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        try {
            $.ajax(endpoint).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const numero = resposta.complemento
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
            $('#numero').val(numero);

            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        })
        } catch (error) {
            alert("Ocorreu um erro ao buscar um endereço tente novamente mais tarde.")
        }
        finally{
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 4000);
        }
    })
    
    $('#formulario-pedido').submit(function(evento){
        evento.preventDefault();
        
        if($('#nome').val().length == 0) {
            throw new Error('Digite o nome');
        }
    })
})