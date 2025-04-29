# -prati-Codifica-Ex1

## Requisistos

- NodeJS na versão 13.2 ou superior
- Módulo "prompt-sync" instalado (utilize o comando "npm list" para ver se o módulo está instalado. Se não estiver, instale utilizando o comando "npm install prompt-sync")

## Instruções de uso

### Opção 1

Abra o terminal do seu sistema operacional nesta pasta e execute o seguinte comando:

```console
node index.mjs
```

### Opção 2 (linux)

Com o terminal aberto nesta pasta, entre como super usuário(sudo su -) e execute o seguinte comando:

```console
chmod +x ./run.sh
```

após isso, execute este comando para iniciar:

```console
./run.sh
```

### Opção 3(VSCode)

Como está sendo usando o formato JS com suporte pra módulos, o terminal de DEBUG do VSCode não consegue executa-lo.

Para executar no VSCode, é preciso fazer um das seguintes opções:

- Utilizar o terminal do VSCode 

- Configurar uma Task e roda-la

#### Utilizar o terminal do VSCODE

Abra o terminal do VSCODE no diretório destes arquivos e execute o comando
```console
node index.mjs
```

#### Configurar uma task e roda-la
Vá em "File -> Preferences -> User tasks" e adiciona uma nova task com esses valores:

```json
 {
    "label": "Executar index.mjs",
    "type": "shell",
    "command": "node index.mjs"
 }
 ```

 Após isso, salve o arquivo, certifique-se que o VSCODE está aberto na pasta deste diretório, vá em "Terminal -> Run task" e selecione a task chamada "Executar index.mjs"