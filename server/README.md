# Server - Backend Node.js para Upload de Imagens

Este diretório contém o backend de uma aplicação que utiliza Node.js com Express para receber uploads de imagens do CKEditor 5 (configurado no frontend em `../frontend`). O servidor salva os arquivos em uma pasta local e retorna URLs para exibição no editor.

## Tecnologias Utilizadas 🚀
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![Multer](https://img.shields.io/badge/Multer-FF0000?style=for-the-badge&logoColor=white)
- ![CORS](https://img.shields.io/badge/CORS-4285F4?style=for-the-badge&logoColor=white)

## Estrutura
- **`server.js`**: Arquivo principal do servidor Node.js.
- **`uploads/`**: Pasta criada automaticamente para armazenar as imagens enviadas.
- **`package.json`**: Arquivo de configuração do projeto Node.js com dependências.
- **`node_modules/`**: Pasta gerada pelo `npm install` com as bibliotecas necessárias.

## Pré-requisitos
- **Node.js**: Versão 14.x ou superior recomendada (verifique com `node -v`).
- **NPM**: Instalado junto com o Node.js (verifique com `npm -v`).

## Instalação
1. **Navegue até a pasta `server`**:
   ```bash
   cd server
   ```
2. **Instale os pacotes necessários**:
   ```bash
   npm install express multer cors
   ```
   Isso adiciona:
   - `express`: Framework web para Node.js.
   - `multer`: Middleware para lidar com uploads de arquivos.
   - `cors`: Suporte a Cross-Origin Resource Sharing.

3. **Instale o Nodemon (opcional, recomendado para desenvolvimento)**:
   ```bash
   npm install -g nodemon
   ```
   Isso permite reiniciar automaticamente o servidor ao detectar mudanças no código.

## Como Rodar
Siga estas etapas para executar o servidor e suportar o upload de imagens do CKEditor:

1. **Navegue até a pasta `server`**:
   ```bash
   cd server
   ```
2. **Inicie o servidor**:
   ```bash
   node server.js
   ```
   Ou, se estiver usando Nodemon:
   ```bash
   nodemon server.js
   ```
   Verifique a saída no terminal:
   ```
   Servidor rodando em http://localhost:3000
   ```

## Teste o Servidor
O servidor estará ativo em `http://localhost:3000`.

### Rotas Disponíveis:
- **`POST /upload`**: Recebe uploads de imagens do CKEditor.
- **`GET /uploads/nome-do-arquivo`**: Serve as imagens salvas (ex.: `http://localhost:3000/uploads/1234567890.jpg`).

**Nota**: Acessar `http://localhost:3000/` diretamente no navegador retornará `Cannot GET /`, pois não há uma rota GET na raiz (veja "Personalização" para adicionar uma).

## Funcionalidades
- **Upload de Imagens**: Recebe arquivos via `POST /upload`, salva na pasta `uploads` e retorna uma URL no formato:
  ```json
  { "url": "http://localhost:3000/uploads/nome-do-arquivo" }
  ```
- **Serviço de Arquivos Estáticos**: Disponibiliza as imagens salvas em `/uploads` para acesso via HTTP.
- **CORS**: Permite requisições de qualquer origem (configurado com `origin: '*'`).

## Configuração
- **Porta**: O servidor roda em `http://localhost:3000` (ajustável na variável `port` em `server.js`).
- **Pasta de Uploads**: Arquivos são salvos em `uploads/` no mesmo diretório do `server.js`.
- **Resposta do Upload**: Retorna um JSON compatível com o CKEditor:
  ```json
  { "url": "http://localhost:3000/uploads/1234567890.jpg" }
  ```

## Depuração
- **Terminal**: Verifique mensagens de erro ao iniciar o servidor (ex.: `MODULE_NOT_FOUND` indica dependências ausentes).
- **Teste Manual**:
  Use `curl` ou Postman para enviar um arquivo ao `POST /upload`:
  ```bash
  curl -X POST -F "upload=@caminho/para/imagem.jpg" http://localhost:3000/upload
  ```
  **Resposta esperada**:
  ```json
  { "url": "http://localhost:3000/uploads/1234567890.jpg" }
  ```
- **Navegador**: Abra a URL retornada (ex.: `http://localhost:3000/uploads/1234567890.jpg`) para verificar se a imagem é exibida.

## Notas
- **Dependência do Frontend**: Este servidor é projetado para trabalhar com o CKEditor em `../frontend`. Sem o frontend, ele apenas salva e serve arquivos.
- **Parar o Servidor**: Use `Ctrl + C` no terminal.
- **Produção**:
  - Ajuste a URL base (`http://localhost:3000`) para o domínio real.
  - Use HTTPS e restrinja o CORS (ex.: `origin: 'https://seufrontend.com'`).

## Personalização
- **Rota na Raiz**: Para evitar `Cannot GET /` ao acessar `http://localhost:3000/`, adicione uma mensagem:
  ```javascript
  app.get('/', (req, res) => {
      res.send('Servidor de upload do CKEditor rodando!');
  });
  ```
  Ou redirecione para o frontend:
  ```javascript
  app.get('/', (req, res) => {
      res.redirect('http://localhost:8080');
  });
  ```
- **Segurança**:
  Restrinja tipos de arquivos no Multer:
  ```javascript
  const upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
          const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
          if (allowedTypes.includes(file.mimetype)) {
              cb(null, true);
          } else {
              cb(new Error('Apenas imagens são permitidas!'));
          }
      }
  });
  ```

## Licença
Este projeto é um exemplo básico e não possui licença específica. As dependências (`express`, `multer`, `cors`) seguem suas respectivas licenças MIT.

