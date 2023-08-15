# CRUD de Gerenciador de Tarefas

Nesta atividade prática, você criará um sistema CRUD (Create, Read, Update, Delete) para um gerenciador de tarefas simples usando a linguagem JavaScript. O sistema permitirá que o usuário crie, liste, atualize e exclua tarefas. **O foco principal é praticar a criação das operações CRUD (Create, Read, Update, Delete) em JavaScript usando funções, objetos, array e os métodos que aprendemos nas aulas.**

O desenvolvimento desse sistema deve atender alguns requisitos:

**Criação de Tarefa:**

[x] Crie uma função chamada **`createTask(title, description)`** que recebe o titulo e descrição como parâmetro e permite adicionar uma nova tarefa à lista.

[x] A função deve verificar se o título da tarefa é fornecido. Se não for, deve exibir uma mensagem de erro indicando que o título é obrigatório.

[x] A nova tarefa deve ser um objeto com as propriedades: **`title`**, **`description`** e **`completed`** (inicializado como **`false`**).

## Listagem de Tarefas

[x] Crie uma função chamada **`listTasks()`** que exiba uma lista formatada de todas as tarefas cadastradas.

[x] Percorra o array de tarefas e mostre o índice, título, descrição e o status (concluída ou não) de cada tarefa.

## Atualização de Status de Tarefa:

[x] Crie uma função chamada **`updateTaskStatus(index, completed)`** que permita atualizar o status de conclusão de uma tarefa.

[x] Verifique se o índice informado existe e, em seguida, atualize a propriedade **`completed`** da tarefa correspondente para o valor fornecido.

## Atualização de Tarefa:

[x] Crie uma função chamada **`updateTask(index, newTitle, newDescription)`** que permita atualizar o título e a descrição de uma tarefa existente.

[x] Verifique se o índice fornecido é válido e se o novo título é fornecido. Se não for, exiba mensagens de erro apropriadas.

[x] Atualize o título e a descrição da tarefa selecionada com os valores fornecidos.

## Exclusão de Tarefa:

[ ] Crie uma função chamada **`deleteTask(index)`** que permita excluir uma tarefa da lista.

[ ] Verifique se o índice fornecido é válido e, em seguida, remova a tarefa correspondente da lista.
