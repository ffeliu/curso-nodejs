/*
0 - Obter um usuário
1 - Obter o nro de telefone a partir do seu ID
2 - obter o endereço do usuario
*/

function obterUsuario(callback) {
    setTimeout( function() {
        return callback(null, {
            id: 1,
            nome: 'Feliu',
            data: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout( function() {
        return callback(null, {
            telefone: '1111-1111',
            ddd: '11'
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout( function() {
        return callback(null, {
            logradouro: 'rua cururu',
            numero: 234
        })
    }, 2000);
}


function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario);
}

obterUsuario( function resolverUsuario(erro, usuario) {

    if(erro) {
        console.error('Problema ao recuperar usuaario', erro);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {

        if(erro1) {
            console.error('Problema ao recuperar telefone', erro1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {

            if(erro2) {
                console.error('Problema ao recuperar endereco', erro2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.logradouro}, ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
});
