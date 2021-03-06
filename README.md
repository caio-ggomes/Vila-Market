# Projeto Final - CES-26
 
 ---

 # Vila Market

 O projeto consiste de um classificados para a vila militar contida na região do CTA.
 Este repositório serve apenas para fazer testes locais, os repositórios utilizados pelo Heroku adaptados deste se encontram em
https://github.com/renatocraf/projeto_ces26_front e https://github.com/renatocraf/projeto_ces26_back

É uma aplicação React com servidor Express na nuvem (https://vila-market-front.herokuapp.com/) contendo:

- Um formulário de cadastro para o usuário.

[!cadastro](https://user-images.githubusercontent.com/54087165/102116865-5b7f2e00-3e1c-11eb-815a-b4640203eab8.png)
- um formulário de login, com possibilidade de autenticação local ou via serviços do Google

![login](https://user-images.githubusercontent.com/54087165/102116672-0e9b5780-3e1c-11eb-88b3-88bd6a4a1acb.png)
- Um formulário para o usuário fazer um anúncio de seu produto.

![form_announcement](https://user-images.githubusercontent.com/54087165/102075196-a9783f80-3de4-11eb-9013-076010e6292b.png)
- Uma página para navegar entre os produtos anunciados.

![products](https://user-images.githubusercontent.com/54087165/102076872-2d332b80-3de7-11eb-97d8-c8f06726a168.png)

O produto/serviço está dividido em 6 categorias, e conteúdo de cada categoria pode ser vista ao fim da página, clicando na respectiva categoria. Para cada produto buscado, é apresentado seu nome, descrição, preço, telefone para contato, nome do vendedor e localização da venda provida com API do Google Maps

- Segurança para prevenir ataques conhecidos de ClickJacking, CSRF e injeção de código.

---

Foram utilizadas as seguintes tecnologias para produção do projeto:

- NodeJS
- HTML5
- CSS
- React
- Express
- Helmet
- Passport
- Postgres

---


