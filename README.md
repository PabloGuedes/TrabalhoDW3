ERP Financeiro - Desenvolvimento Web 3

Este projeto é um sistema de ERP Financeiro desenvolvido na disciplina de Desenvolvimento Web 3. O sistema utiliza a arquitetura Cliente-Servidor, com um backend em Node.js e um frontend em HTML, CSS, JavaScript e Bootstrap.

O sistema oferece funcionalidades como:

• Login com autenticação JWT.
• Listagem de registros financeiros.
• Adição, edição e exclusão de registros financeiros.
• Soft delete (os registros excluídos permanecem no banco de dados, mas com a flag removido = true).
----------------------------------------------------------------------------------------------------
Tecnologias Utilizadas

Backend:

• Node.js
• Express
• JWT (Json Web Token)
• PostgreSQL
• Dotenv

Frontend:

• HTML
• CSS
• JavaScript
• Bootstrap
-----------
Como Executar o Projeto

1. Configurar o Banco de Dados
• Certifique-se de ter o PostgreSQL instalado.
• Crie um banco de dados com o nome definido no arquivo .env (trabalhodw3 por padrão).
• Execute o script SQL em backend/database/databaseConfig.sql para criar a tabela financeiro.
---------------------------------------------------------------------------------------------
2. Configurar o Backend

Navegue até a pasta backend: cd backend

Instale as dependências: npm install

Crie um arquivo .env na raiz de backend e configure-o como segue:

APP_NAME=SrvBackend
SECRET_API=(Chave secreta aqui)
DB_NAME=trabalhodw3
DB_USER=postgres
DB_PASS=postdba
DB_HOST=localhost
DB_PORT=5432

Inicie o servidor backend: node app.js

Verifique a mensagem no terminal: Servidor rodando na porta 3000
----------------------------------------------------------------
3. Configurar o Frontend

Navegue até a pasta frontend: cd frontend

Instale as dependências: npm install

Inicie o servidor frontend: node bin/www

Verifique a mensagem no terminal:

Servidor rodando na porta 5000
Acesse o sistema em: http://localhost:5000/html/login.html
----------------------------------------------------------
Principais Arquivos e Suas Funções

Backend
1. app.js (backend):

• Configura o servidor backend e define o roteamento base.
• Carrega o middleware para proteger rotas com JWT.

2. financeiroController.js:

• Contém toda a lógica de negócios (CRUD) para o módulo financeiro.

Exemplos:
• getFinanceiros: Retorna os registros financeiros com removido = false.
• deleteFinanceiro: Marca um registro como removido = true.

3. authenticateToken.js:

• Middleware que verifica se o usuário está autenticado usando JWT.

4. databaseConfig.js:

• Configura a conexão com o banco de dados PostgreSQL.

Frontend
1. app.js (frontend):

• Configura o servidor frontend para servir os arquivos estáticos e gerenciar rotas.

2. app.js (public/js):

• Contém a lógica de interação do frontend com o backend.

Exemplos:
• Funções para carregar, criar, editar e excluir registros financeiros.

3. login.html:

• Página inicial do sistema onde o usuário faz login.

4. financeiro.html:

• Página principal do controle financeiro, onde o usuário pode adicionar novos registros.

5. editar_financeiro.html:

• Página dedicada para editar um registro financeiro existente.

6. style.css:

• Define o estilo visual do sistema.
------------------------------------
Funcionalidades de Segurança

• Autenticação JWT: Apenas usuários autenticados podem acessar as rotas protegidas.
• Proteção de Rotas no Frontend: Usuários não logados são redirecionados automaticamente para a página de login.
• Soft Delete: Registros excluídos são marcados como removido = true e não são exibidos no frontend.
----------------------------------------------------------------------------------------------------
Explicação de Funcionalidades Importantes

1. Autenticação com JWT:

• O token JWT é gerado no login e armazenado no localStorage do navegador.
• O middleware authenticateToken.js valida o token em todas as requisições protegidas.

2. Soft Delete:

• Em vez de excluir permanentemente os registros, o sistema apenas marca o campo removido como true. Isso permite recuperar dados se necessário.

3. Modularização do Backend:

• Cada funcionalidade está separada por módulos (financeiroController, authenticateToken, etc.), facilitando a manutenção e o entendimento.

4. Frontend Dinâmico:

• A interação entre frontend e backend é feita por fetch, permitindo atualizar a lista de registros em tempo real após adições, edições ou exclusões.
-------------
Testando o Sistema

1. Acesse http://localhost:5000/html/login.html.

2. Use as credenciais:

Usuário: qwe
Senha: qwe

Testar CRUD de Registros

• Após o login, acesse a página de controle financeiro.
• Adicione, edite e exclua registros para verificar o funcionamento do sistema.
-------------------------------------------------------------------------------
Conclusão

Este projeto foi desenvolvido utilizando boas práticas de desenvolvimento web, com foco na modularização, segurança e usabilidade. Ele atende aos requisitos de CRUD para um sistema financeiro e pode ser expandido para incluir outras funcionalidades.