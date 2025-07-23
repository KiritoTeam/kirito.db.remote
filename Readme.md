Para instalar a kirito.db.remote na sua aplicação basta utilizar 

```npm i kirito.db.remote```

No console.

# Rotas da database

```js
const KiritoDB = require("kirito.db.remote")
const db = new KiritoDB("database") //coloque sua key secret sem uma key secret não e possível utilizar a database

//Get na Db
await db.get(`Testeteetet.djdndj`)

//add na Db
db.add(`Teste.testeeee`, `90`)

//sub na db
db.sub(`Teste.trste`, `5`)


//set na db
db.set(`Teste.trste`, `10`)

//delete na db
db.delete(`Teste.trste`)


// pegar todos os dados da db
await db.all()

//Obs: Nas rotas de Get e All e necessário obrigatoriamente o uso de await
```

Agradecemos por utilizar nossa package.
