# Frontend - CKEditor 5 com Simple Upload Adapter

Este diretório contém o frontend de uma aplicação que utiliza o CKEditor 5 para edição de texto rico com suporte a upload de imagens. O editor é configurado para enviar imagens a um servidor backend Node.js (localizado na pasta `../server`) e exibi-las no editor.

## Tecnologias Utilizadas 🚀
Este projeto utiliza as seguintes tecnologias no frontend para criar uma experiência de edição de texto rico com upload de imagens:

- ![CKEditor 5](https://img.shields.io/badge/CKEditor_5-0078D4?style=for-the-badge&logo=ckeditor&logoColor=white)

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

- ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Estrutura
- **`index.html`**: Arquivo principal que inicializa o CKEditor 5 via CDN e configura o Simple Upload Adapter.

## Pré-requisitos
- Um navegador moderno (Chrome, Firefox, Edge, etc.).
- Um servidor local para rodar o arquivo HTML (ex.: `http-server` ou `live-server`).
- O backend Node.js (na pasta `../server`) deve estar rodando em `http://localhost:3000`.

## Instalação
1. **Certifique-se de que o backend está configurado**:
    - Veja o README na pasta `../server` para instruções de como rodar o servidor Node.js.
    - O backend deve estar ativo em `http://localhost:3000` antes de usar o frontend.

2. **Instale um servidor local (se necessário)**:
   - Caso você ainda não tenha uma ferramenta para servir arquivos estáticos, instale o `http-server` globalmente:
        ```bash
        npm install -g http-server

3. **Inicie o Servidor Local**:
    - Use o http-server para servir o index.html:
        ```bash
        npx http-server

4. **Acesse no Navegador**:
    - Abra o navegador e vá para a porta indicada.
    - O CKEditor será carregado com uma área de texto inicial contendo "Digite seu texto aqui!".

## Funcionalidades
- **Edição de Texto**: Suporte a negrito, itálico, tamanhos de fonte, cores de fonte e fundo, parágrafos, undo/redo.
- **Upload de Imagens**: Envia imagens ao servidor backend e as insere no editor.
- **Plugins Utilizados**:
- `Essentials`: Funcionalidades básicas do editor.
- `Bold, Italic, Font, Paragraph`: Formatação de texto.
- Image, ImageUpload, FileRepository: Suporte a imagens e upload.

## Configuração
- **CDN**: O CKEditor 5 é carregado via
`https://cdn.ckeditor.com/ckeditor5/44.3.0/ckeditor5.umd.js`.
- **Chave de Licença**: Usa uma chave gratuita (substitua por uma chave própria em produção, se necessário).
- **Simple Upload Adapter**:
- Configurado com uploadUrl: `http://localhost:3000/upload`.
- Inclui um adaptador personalizado (MyCustomUploadAdapterPlugin) para enviar imagens via fetch.
- **Toolbar**: Personalizada com botões para formatação e upload de imagens.

## Código Principal (index.html)
O arquivo index.html inclui:
- Carregamento do CKEditor via CDN.
- Configuração do editor com plugins e toolbar.
- Implementação do Simple Upload Adapter para integração com o backend.

## Depuração
- **Depuração abra o console (F12) e verifique**:
    - "Editor inicializado com sucesso!": Confirma o carregamento do CKEditor.
    - Erros de upload aparecem na aba "Network" (confira a requisição POST para /upload).
- **Erros Comuns**:
    - **Editor não carrega**: Verifique se o CDN está acessível e se o setTimeout de 100ms é suficiente (aumente para 500ms se necessário).
    - **Upload falha**: Confirme que o backend está rodando e que não há erros de CORS (o backend já inclui cors com origin: '*').

## Notas
- **Dependência do Backend**: O upload de imagens depende do servidor em ../server. Sem ele, o botão de upload não funcionará.

- **Parar os Servidores**:
    - Frontend: Use Ctrl + C no terminal do http-server.
    - Backend: Use Ctrl + C no terminal do node server.js.

- **Produção**:
    - Ajuste o uploadUrl para o domínio real do servidor (ex.: https://seuservidor.com/upload).
    - Considere usar HTTPS e restringir o CORS no backend (ex.: origin: 'https://seufrontend.com').

## Licença
- Este projeto usa o CKEditor 5 sob a licença gratuita <a href="https://ckeditor.com/legal/ckeditor-licensing-options/">(veja CKEditor License)</a>. Verifique os termos para uso comercial.
