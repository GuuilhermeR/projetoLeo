Nome do Projeto: Revendedora de Carros

Descrição: Site para mostrar carros novos e seminovos disponíveis na loja que estão a venda, tendo um controle por parte de um gestor que poderá cadastrar novos carros, deletar os carros, cadastrar um novo gestor e deletar a conta de um gestor.

Equipe: Guilherme Rüdiger e Matheus Horongoso

Funcionalidade Implementadas: Listagem de carros novos e seminovos, Exibição de detalhes dos carros, Login e senha do gestor, cadastro de gestor, cadastro de carros, edição de informações do carro, remoção do carro, remoção de conta do gestor, alteração de senha do gestor

Tecnologias Utilizadas: Nodejs e Reactjs

Passos Para Rodar o Projeto: 
1 - va até o diretório 'projetoLeo' pelo prompt nele execute o comando 'npm install' (para baixar as dependencias)
2 - agora va no diretorio 'client' e de novamente um 'npm install' (este demora um pouco mais)
3 - agora volte até o diretório 'projetoLeo' pelo prompt e nele execute o comando: 'npm run revendedora'

Pronto! espere até o site subir automaticamente!

OBS: A porta padrão esta em 80, se for necessário substituir apenas troque a porta no arquivo 'server.js' na raiz e reinicie a aplicação no prompt.

OBS2: A API Server roda na porta 5000, se for necessário substituir, alterar a primeira linha do arquivo 'ApiService.js' em /client/src/react/utils/ onde tem a porta e também substituir a linha 4 no package.json da raiz onde tem a propriedade proxy e então reiniciar a aplicação no prompt!
