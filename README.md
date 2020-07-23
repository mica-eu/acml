# acml

## Informações Gerais

Aplicação desenvolvida usando VueJS e NodeJS para consultar o status de rastreamento de encomendas compradadas no mercado livre e enviadas pela Azul Express.
A ideia da aplicação surgiu da necessidade de uma interface mais intuitíva, simples e responsiva para consultar as inforações de rastreamento.

Em resumo, existe uma pequena api que usa um módulo escrito para fazer *Web Scraping* no front da [aplicação oficial](https://hmg.onlineapp.com.br/EDIv2_rastreioML/Rastreio/MercadoLivre?TrackingNumber=2973783) e retornar esses dados em *JSON* para a aplicação feita em VueJS nesse repositório.

É possível ver a aplicação funcionando acessando https://acml.now.sh/?code=2973783

## Informações Técnicas

Infelizmente, rodar esta aplicação localmente se torna um pouco chata por causa das *funções serveless* da Vercel (Antiga "Zeit"). Já que eu estou fazendo uso de algumas funcionalidades deles, só é possível rodar a aplicação localmente depois de instalar o cli da Vercel e fazer login. 

Porém, é possível rodar a aplicação sem a api usando o próprio cli do Vue.
