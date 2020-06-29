const urlBase = 'http://'+window.location.hostname+':5000/api/revendedora';

const consomeApi = (parametro, routeMethod) => {
    return fetch(`${urlBase}/${parametro}`, { method: routeMethod, headers: { 'content-type': 'application/json' }})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json())
}

const ApiService = {
    CriaGestor: (nome, login, email, senha) => consomeApi(`gestor/new/${nome}/${login}/${email}/${senha}`, 'POST'),
    LoginGestor: (login, senha) => consomeApi(`gestor/${login}/${senha}`, 'POST'),
    GetAllCars : () => consomeApi(`get/all/cars`, 'GET'),
    GetCarById : (id) => consomeApi(`get/car/${id}`, 'GET'),
    AlteraSenha : (idGestor, senhaAtual, novaSenha) => consomeApi(`gestor/alterasenha/${idGestor}/${senhaAtual}/${novaSenha}`, 'PUT'),
    CadastraCarro: (idGestor, nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais) => 
        consomeApi(`new/car/${idGestor}/${nome}/${modelo}/${cor}/${tipoAbastecimento}/${ano}/${finalPlaca}/${kmAtual}
                   /${descricao}/${dadosAdicionais}`, 'POST'),
    AlteraCarro : (id, nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais) => 
        consomeApi(`edit/car/${id}/${nome}/${modelo}/${cor}/${tipoAbastecimento}/${ano}/${finalPlaca}/${kmAtual}
                    /${descricao}/${dadosAdicionais}`, 'PUT'),
    DeletaCarro : (id) => consomeApi(`delete/car/${id}`, 'DELETE'),
    GetNewCars : () => consomeApi(`get/new/cars`, 'GET'),
    GetSemiNewCars : () => consomeApi(`get/seminew/cars`, 'GET'),
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res
    }
}
export default ApiService