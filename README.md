# Cetep News

## Projeto desenvolvido no CETEP Macaúbas

Este projeto foi desenvolvido por alunos do 3° ano de informática do Colégio Centro Territorial de Educação Profissional da Bacia do Paramirim, ele tem por objetivo fazer um blog jornalistico.
O projeto deve ter por resultado final uma página web que será um blog jornalistico, deve-se utilizar html, css e JavaScript para alcançar isso. 

### 1° passo
Foi defenido a versão que seria utilizada no projeto.
  - Utilizando o nvm, o gerenciador de versão do nodejs
  - Criamos o arquivo .nvmrc
  - Falamos a versão a ser utilizada, que nosso caso é lts/iron
  - E depois executamos o seguinte comando no terminal:
    
   ```bash
    nvm install
   ```
### 2° passo
Estilização de códigos e configuração do editor.
  - Instalamos as extenssões do Editor Config e o Prettier.
  - Criamos a pasta .editorConfig.
  - Definimos o tamanho do espaço:
    ```editorconfig
    raiz = true

    [*]
    indent_style = space
    indent_size = 2
    ```

### 3° passso 
  Criamos manifesto do projeto com o comando 
  ```bash
  npm init
  ```
  - Depois instalamos um linter, que foi o prettier, para estilizaçao de código para arquivos que já estão salvos.
  no modo desenvolvimento
  ```bash
  npm install prettier --save-dev
  ```
  - Criamos o **.gitignore** para ignorar o **node_modules**:
  ```editorconfig
  node_modules
  ```

### 4° passo
Criamos os testes automatizados
- Para isso instalamos o test runner, o **jest**.
- Rodando o seguinte comando:
  ```bash
   npm istall jest --sava-dev
  ```
- Executamos um teste vedadeiro na pasta **test**

### 5° passo
Criamos o arquivo `docker-compose.yaml`
  - Definimos a versão '3'
  - Criamos o servidor do Banco de Dados

Criamos o arquivo `database.js`
  - Possibilita conexão com o Banco de Dados
```
infra > database.js
```  




