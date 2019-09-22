## **Projeto da semana OmniStack 6.0 RocketSeat**

**O que é a semana?**
Durante essa semana construímos juntos uma aplicação do zero utilizando NodeJS no back-end, ReactJS no front-end e React Native no mobile, para descobrir na prática todas as vantagens dessa stack e porque essas tecnologias fazem tanto sentido juntas.

Você vai aprender como cada uma dessas tecnologias funcionam e como elas se integram, além de todos os critérios para a escolha dessas ferramentas. E finalmente, você vai entender como essa stack pode levar suas aplicações e a sua carreira de programador para o próximo nível.

**Objetivo**
O objetivo da sexta semana OmniStack foi construir uma solução para armazenamento/compartilhamento de arquivos na nuvem, parecido com dropbox, google drive e outros.

1. [Backend](#backend)
2. [Frontend Web](#web)
3. [Frontend Mobile](#mobile)

## Backend <a name="backend"></a>
 O backend consiste em um servidor capaz de receber requisições REST. Ele é capaz de receber arquivos dos clientes, armazenar e disponibilizar conforme acessados. 
  [Código fonte](https://github.com/FelipeAngelini/omnistack6-backend).
 
**Tecnologias utilizadas**
 - Desenvolvido em NodeJS;
 - Banco de dados não relacional MongoDB, com utilização do servidor MongoDB Atlas;
 - Módulo `express` para gerenciar as requisições REST;
 - Módulo `mongoose` para realizar a modelagem de objetos MongoDB;
 - Módulo `multer` para enviar as requisições em `multipart/form-data` necessário para o envio de arquivos;
 - Módulo `socket.io` para comunicação em tempo real entre os clientes;
 
 **Como instalar**
 1. Pré-requisitos -> Ter o NodeJS instalado e um gerenciar de pacotes NPM ou YARN;
 2. Clone o repositório;
````git clone https://github.com/FelipeAngelini/omnistack6-backend.git````
3. Baixe as dependências
**````npm install````** ou **````yarn````** 
4. Inicie o projeto
**````npm run start````** ou **````yarn start````** 
 
## Frontend web <a name="web"></a>
O frontend web consiste em uma pagina web, capaz de criar uma "pasta de trabalho" e enviar arquivos.
- [Código fonte](https://github.com/FelipeAngelini/omnistack6-frontend)
- [Teste online](https://omnistack-frontend-angelini.herokuapp.com/)

**Imagens**

![Tela principal](https://raw.githubusercontent.com/FelipeAngelini/omnistack6-frontend/master/images/image1.png)
![Tela de enviar arquivos](https://raw.githubusercontent.com/FelipeAngelini/omnistack6-frontend/master/images/image2.png)
![Tela com arquivos carregados](https://raw.githubusercontent.com/FelipeAngelini/omnistack6-frontend/master/images/image3.png)
**Tecnologias utilizadas**

 - Desenvolvido em ReactJS;
 - Módulo `axios` para realizar as requisições REST ao servidor;
 - Módulo `date-fns` para formatação de datas;
 - Módulo `react-router-dom`para realizar o roteamento entre as páginas;
 - Módulo `react-dropzone`, componente para selecionar ou arrastar os arquivos;
 - Módulo `socket.io·client` para comunicação em tempo real;
 
 **Como instalar**
 1. Pré-requisitos -> Ter o NodeJS instalado e um gerenciar de pacotes NPM ou YARN;
 2. Clone o repositório;
````git clone https://github.com/FelipeAngelini/omnistack6-frontend.git````
3. Baixe as dependências
**````npm install````** ou **````yarn````** 
4. Inicie o projeto
**````npm run start````** ou **````yarn start````** 

## Frontend mobile <a name="mobile"></a>
O frontend mobile consiste em um aplicativo mobile para Android e iOS, capaz de criar uma "pasta de trabalho" e enviar arquivos, semelhante ao frontend web, porem com toda a experiencia do usuário adaptada ao dispositivos móveis.
[Código fonte](https://github.com/FelipeAngelini/omnistack6-mobile)

**Imagens**

![Tela principal](https://raw.githubusercontent.com/FelipeAngelini/omnistack6-mobile/master/images/image1.png)
![Tela de enviar arquivos](https://raw.githubusercontent.com/FelipeAngelini/omnistack6-mobile/master/images/image2.png)

**Tecnologias utilizadas**

 - Desenvolvido em React Native;
 - Módulo `axios` para realizar as requisições REST ao servidor;
 - Módulo `date-fns` para formatação de datas;
 - Módulo `react-navigation`para realizar a navegação entre as telas;
 - Módulo `react-native-image-picker`, componente para capturar ou carregar imagens;
 - Módulo `react-native-file-viewer`, componente visualizar de forma nativa qualquer arquivo;  
 - Módulo `socket.io·client` para comunicação em tempo real;
 
 **Como instalar**
1. Pré-requisitos -> Ter o NodeJS instalado, um gerenciar de pacotes NPM ou YARN e o  React Native CLI configurado;
2. Clone o repositório;
````git clone https://github.com/FelipeAngelini/omnistack6-mobile.git````
3. Baixe as dependências
**````npm install````** ou **````yarn````** 
4. Inicie o projeto
````react-native run-android```` 
