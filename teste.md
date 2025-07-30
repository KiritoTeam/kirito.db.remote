## :package: O que é o `kirito.db.remote`?

É uma **database remota e simples** baseada em chave-valor (como um dicionário), ideal para **bots, APIs e projetos em Node.js**.

Você salva e acessa os dados usando "caminhos" como `"usuarios.1234.pontos"`.


## :tools: Como usar

### 1. **Importar e iniciar**

```js
const KiritoDB = require("kirito.db.remote")
const db = new KiritoDB("sua_key_secreta") // SEM a key secreta, nada funciona!
```


## :wrench: Métodos disponíveis

### :inbox_tray: `get`: pegar dados

```js
await db.get("usuarios.1234.pontos")
```

> Retorna o valor salvo na chave.
> :white_check_mark: Aceita qualquer tipo de dado.
> :warning: **Precisa de `await`**.


### :heavy_plus_sign: `add`: somar valor

```js
db.add("usuarios.1234.pontos", 10)
```

> **Soma um número** ao valor atual.
> :white_check_mark: **Só funciona com números**.
> :x: Se o valor for string, array, objeto, etc., vai dar erro.


### :heavy_minus_sign: `sub`: subtrair valor

```js
db.sub("usuarios.1234.pontos", 5)
```

> **Subtrai um número** do valor atual.
> :white_check_mark: **Só funciona com números**.


### :writing_hand: `set`: definir valor

```js
db.set("usuarios.1234.nome", "Arthur")
```

> Define um valor novo na chave, sobrescrevendo o que já tiver.
> :white_check_mark: **Aceita qualquer tipo de valor** (string, número...).
> :x: Se o valor for array, objeto., vai dar erro.


### :x: `delete`: apagar valor

```js
db.delete("usuarios.1234.pontos")
```

> Remove a chave e seu valor da database.


### :clipboard: `all`: pegar todos os dados

```js
await db.all()
```

> Retorna todos os dados salvos.
> :warning: **Precisa de `await`**.


## :warning: Observações importantes:

* **`add` e `sub` só funcionam com números.**
  Se tentar usar com strings ou objetos, vai dar erro.

* **`set` funciona com qualquer tipo de valor.**

* Métodos que **acessam dados** (`get` e `all`) precisam do **`await`** porque são assíncronos (esperam resposta do servidor).
