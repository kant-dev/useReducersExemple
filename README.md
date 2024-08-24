Lista de Tarefas com Reducer

Objetivo

    Desenvolver uma aplicação React onde você implementará uma lista de tarefas que permite adicionar, editar, remover e marcar tarefas como concluídas. O estado da lista será gerenciado com um reducer central, e as ações serão despachadas para atualizar o estado.

Requisitos
    
    Criar um reducer que gerencie as seguintes ações:
        - Adicionar uma nova tarefa.
        - Remover uma tarefa existente.
        - Marcar ou desmarcar uma tarefa como concluída.
        - Editar o texto de uma tarefa.
    
    Utilizar o hook useReducer para controlar o estado no componente principal.

    Criar os seguintes componentes:

        - TaskList.tsx: Renderiza a lista de tarefas.
        - TaskItem.tsx: Componente individual para cada tarefa, com botões para marcar como concluída, editar e remover.
        - TaskInput.tsx: Componente para inserir uma nova tarefa.

    Na página principal (App.js), exiba os componentes e permita que o usuário gerencie suas tarefas.

Dicas e Estrutura do Projeto

    Criando o Reducer (taskReducer.js):

        - Defina os tipos de ações: add, remove, completed, edit.
        - Implemente a lógica de cada ação dentro de um switch no reducer.

    Organizando os Componentes:

        - TaskList.tsx: Recebe as tarefas como props e renderiza uma lista de TaskItem.
        - TaskItem.tsx: Exibe o texto da tarefa e os botões para marcar, editar ou remover.
        - TaskInput.tsx: Componente controlado com um campo de texto e botão para adicionar tarefas.

    Utilizando o Reducer no Componente Principal (App.js):

        - Envolva a lógica de useReducer e passe as funções de dispatch para os componentes adequados.
        - Mantenha o estado da lista de tarefas centralizado no componente principal.

Tarefa

    Implemente esse projeto seguindo a estrutura sugerida e, se conseguir, adicione melhorias, como:

        Filtro para exibir apenas tarefas concluídas ou pendentes.
        Exibir uma contagem das tarefas concluídas.
        Estilização personalizada para tarefas concluídas.

O que você vai praticar?

    - Uso do hook useReducer para gerenciamento de estado.
    - Estruturação de componentes em React.
    - Despacho de ações para manipulação de estado centralizado.
    - Organização e reuso de código.
