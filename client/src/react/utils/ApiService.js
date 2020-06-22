const urlBase = 'http://'+window.location.hostname+':5000/api/revendedora';

const consomeApi = (parametro, routeMethod) => {
    return fetch(`${urlBase}/${parametro}`, { method: routeMethod, headers: { 'content-type': 'application/json' }})
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json())
}

const ApiService = {
    CriaGestor: (nome, login, email, senha) => consomeApi(`gestor/new/${nome}/${login}/${email}/${senha}`, 'POST'),
    LoginGestor: (login, senha) => consomeApi(`gestor/${login}/${senha}`, 'POST'),
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText)
        }
        return res
    }
}
export default ApiService