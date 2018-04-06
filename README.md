# Load Image

Plugin para carregamento parcial de imagens em jQuery. Carrega apenas as imagens que estão visíveis no navegador e as restantes carrega na rolagem da página conforme forem entrando na área visível do site.

## Como usar?

### Coloque a classe load-image na tag img
```
<img class="load-image" src="" alt="Lorem pixel">

```
### Coloque no atributo src="" a imagem do loading
```
<img class="load-image" src="img/loading.svg" alt="Lorem pixel">

```
### Adicione um atributo data-src="" com o caminho da imagem a ser carregada
```
<img class="load-image" src="img/loading.svg" data-src="http://lorempixel.com/400/200/" alt="Lorem pixel">

```
### Mova o arquivo jquery.load-image.js para o seu projeto

### Adicione o script do jQuery e do plugin antes do fechamento da tag body
> Exemplo:
```
<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>
<script src="js/jquery.load-image.js"></script>
```

### Faça a chamada do plugin antes do fechamento da tag body
```
<script>
  $('.load-image[data-src]').loadImage();
</script>
```

## Configurações
### Desconto
Um número inteiro que definirá com quantos pixels antes do topo da imagem ficar visível na tela a imagem será carregada.
```
Parâmetro: desconto
Tipo: integer
Padrão: 0
```
> Exemplo:
```
<script>
  $('.load-image[data-src]').loadImage({
    desconto: 500
  });
</script>
```

## Licença

MIT License (MIT)

Copyright © 2018 Alex Fabiano Ricioli
