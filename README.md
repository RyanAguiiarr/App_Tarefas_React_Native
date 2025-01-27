# Minhas Tarefas - App de Lista de Tarefas

Este é um aplicativo de lista de tarefas simples e intuitivo desenvolvido com **React Native** e **Expo**. O objetivo é ajudar os usuários a gerenciar suas tarefas do dia a dia de forma prática.

## Funcionalidades

- **Adicionar Tarefas**: Crie tarefas facilmente para organizar seu dia.
- **Excluir Tarefas**: Remova tarefas concluídas ou que não são mais necessárias.
- **Armazenamento Local**: Suas tarefas são salvas localmente utilizando o `AsyncStorage` para que estejam disponíveis mesmo após fechar o aplicativo.
- **Interface Animada**: Uso da biblioteca `react-native-animatable` para uma experiência visual fluida e interativa.
- **Modal de Cadastro**: Uma interface modal para adicionar novas tarefas rapidamente.

## Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento do app.
- **Expo**: Ambiente para simplificar o desenvolvimento e testes.
- **AsyncStorage**: Para persistência local de dados.
- **react-native-animatable**: Para animações simples e dinâmicas.
- **Ionicons**: Ícones modernos e atrativos.

## Estrutura do Projeto

- **`App.js`**: Componente principal contendo toda a lógica do aplicativo.
- **`src/components/TaskList`**: Componente reutilizável para renderizar a lista de tarefas.
- **`assets/`**: Pasta para recursos estáticos, como imagens.

## Como Executar

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados.
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/minhas-tarefas.git

   Instale as dependências:
bash
Copiar
Editar
npm install
Inicie o projeto:
bash
Copiar
Editar
expo start
Abra o aplicativo no emulador ou no seu dispositivo físico usando o QR Code gerado pelo Expo.
Capturas de Tela
Lista de Tarefas: Visualização das tarefas cadastradas.
Cadastro de Tarefa: Tela para adicionar novas tarefas.
Adicione capturas de tela do aplicativo aqui.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

Licença
Este projeto está licenciado sob a MIT License.
