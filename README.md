# PokeSearch

Aplicacao web criada com Angular para buscar informacoes de Pokemons usando a PokeAPI.

## Sobre o projeto

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web 1.

Mais do que um produto final complexo, ele foi pensado como uma experiencia pratica de aprendizado do Angular: entender a estrutura do framework, componentizacao, consumo de API, formularios e fluxo de dados no template.

Por esse motivo, algumas partes da aplicacao ficaram mais simples de proposito. A ideia principal foi priorizar o aprendizado e a consolidacao dos conceitos do framework durante a primeira experiencia com Angular.

## Objetivos de aprendizado

- Praticar estrutura de projeto em Angular
- Consumir dados de API REST com servicos
- Trabalhar com sinais e renderizacao no template
- Montar fluxo de busca por nome/ID
- Implementar navegacao entre registros (anterior/proximo)

## Funcionalidades atuais

- Busca de Pokemon por nome ou numero
- Exibicao de dados principais (id, nome, peso, altura, imagem)
- Navegacao para o Pokemon anterior e proximo
- Interface simples para facilitar a leitura e evolucao do codigo

## Tecnologias

- Angular 21
- TypeScript
- RxJS
- Tailwind CSS
- Lucide Icons

## Como executar

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Abra no navegador:

```text
http://localhost:4200
```

## Scripts uteis

```bash
npm start   # executa o projeto em modo desenvolvimento
npm run build   # gera build de producao
npm test    # executa os testes
```

## Estrutura principal

```text
src/app/
	layout/
	pokemon/
		poke-resquests.ts
		pokemon.ts
		pokemon.html
```


## Creditos

- API: https://pokeapi.co
- Framework: https://angular.dev
