# -prati-Codifica-Ex1

![Imagem da seleção de exercícios](https://github.com/user-attachments/assets/7fb4b5b0-a6a0-4c13-8d86-1b4029a35413)

Exercícios obrigatórios da tarefa 1 do curso prati+ Desenvolvimento Web

## Sumário

- [Requisitos](#Requisitos)
- [Instruções de uso](#instrucoes-uso)
  - [Opção 1 - Executando pelo terminal](#inst-uso-op1)
  - [Opção 2 - Executando no VSCode](#inst-uso-op2)

---

## <a name="requisitos"> Requisitos

- NodeJS na versão 13.2 ou superior
- Módulo "prompt-sync" instalado (utilize o comando "npm list" para ver se o módulo está instalado. Se não estiver, instale utilizando o comando "npm install prompt-sync")

---

## <a name="instrucoes-uso"> Instruções de uso

### <a name="inst-uso-op1"> Opção 1 - Executando pelo terminal

Abra o terminal do seu sistema operacional nesta pasta e execute o seguinte comando:

```console
node index.mjs
```

### <a name="inst-uso-op2"> Opção 2 - Executando no VSCode

Como está sendo usado o formato JS com suporte pra módulos, o terminal de DEBUG do VSCode não consegue executa-lo.

Para executar no VSCode, há 2 opções:

- [Utilizar o terminal do VSCode](#vscode-exec-terminal)

- [Configurar uma Task para executar o arquivo](#vscode-exec-task)

#### <a name="vscode-exec-terminal"> Utilizar o terminal do VSCODE

Abra o terminal do VSCODE no diretório destes arquivos e execute o comando

```console
node index.mjs
```

#### <a name="vscode-exec-task"> Configurar uma Task para executar o arquivo

Vá em "File -> Preferences -> User tasks" e adiciona uma nova task com esses valores:

```json
{
  "label": "Executar index.mjs",
  "type": "shell",
  "command": "node index.mjs"
}
```

Após isso, salve o arquivo. Certifique-se que o VSCODE está aberto na pasta deste diretório, vá em "Terminal -> Run task" e selecione a task chamada "Executar index.mjs"
