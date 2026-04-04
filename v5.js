client = require("./index");
client.config = require("./config");
const Urlbase = "https://kiritodb.adssousag.is-a.dev/dbv5"

// Script by CroneGamesPlays Developer, NeoKurai Studios, ADS Sousa Group Corporation © 2020 - 2025 × Todos os direitos reservados.

const axios = require("axios");

class KiritoDB {
  constructor(requiredString) {
    if (!requiredString) {
      throw new Error("Você deve informar uma key para poder proteger seus dados.");
    }
    this.requiredString = requiredString; // Armazena a string para uso posterior se necessário
  }

  //Métodos da class do KiritoDB
  async ping(ping) {
    try {
      let pingt = Date.now();
      // O endpoint /add no servidor agora espera um POST com body
      const api = await axios.post(`${Urlbase}/api/v1/db/add`, {
        id: "ping",
        rota: "ping",
        valor: 1
      });
      let pings = Date.now();
      let ping = pings - pingt;

      return ping;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async add(rota, valor) {
    try {
      if (!rota) {
        throw new Error("Você Deve Informar a Rota De Onde Será Salvo. Exemplo: 2030.carteira");
      }

      // Para operações de adição/subtração, o valor ainda deve ser numérico no cliente
      let numericValor = Number(valor);
      if (isNaN(numericValor) || !isFinite(numericValor)) {
        throw new Error("Você Deve Informar Um Valor Numérico Válido para a operação 'add'");
      }
      valor = numericValor; // Usar o valor numérico convertido

      // O endpoint /add no servidor agora espera um POST com body
      const api = await axios.post(`${Urlbase}/api/v1/db/add`, {
        id: this.requiredString,
        rota: rota,
        valor: valor
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async get(rota) {
    try {
      if (!rota) {
        throw new Error("Você Deve Informar a Rota De Onde Será Salvo. Exemplo: 2030.carteira");
      }

      // O endpoint /get continua sendo um GET com query parameters
      const api = await axios.get(`${Urlbase}/api/v1/db/get?id=${this.requiredString}&rota=${rota}`);

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async sub(rota, valor) {
    try {
      if (!rota) {
        throw new Error("Você Deve Informar a Rota De Onde Será Salvo. Exemplo: 2030.carteira");
      }
      
      // Para operações de adição/subtração, o valor ainda deve ser numérico no cliente
      let numericValor = Number(valor);
      if (isNaN(numericValor) || !isFinite(numericValor)) {
        throw new Error("Você Deve Informar Um Valor Numérico Válido para a operação 'sub'");
      }
      valor = numericValor; // Usar o valor numérico convertido

      // O endpoint /sub no servidor agora espera um POST com body
      const api = await axios.post(`${Urlbase}/api/v1/db/sub`, {
        id: this.requiredString,
        rota: rota,
        valor: valor
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async delete(rota) {
    try {
      if (!rota) {
        throw new Error("Você Deve Informar a Rota De Onde Será Salvo. Exemplo: 2030.carteira");
      }

      // O endpoint /delete no servidor agora espera um DELETE com body
      const api = await axios.delete(`${Urlbase}/api/v1/db/delete`, {
        data: { // Para DELETE com body, o axios usa a propriedade 'data'
          id: this.requiredString,
          rota: rota
        }
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async set(rota, valor) {
    try {
      if (!rota) {
        throw new Error("Você Deve Informar a Rota De Onde Será Salvo. Exemplo: 2030.carteira");
      }
      // O valor pode ser de qualquer tipo (objeto, array, string, number, boolean)
      if (valor === undefined) { // Usar undefined para verificar se o valor foi passado
        throw new Error("Você Deve Informar O Valor Que Será Salvo");
      }

      // O endpoint /set no servidor agora espera um POST com body
      const api = await axios.post(`${Urlbase}/api/v1/db/set`, {
        id: this.requiredString,
        rota: rota,
        valor: valor
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async all() {
    try {
      // O endpoint /all continua sendo um GET com query parameters
      const api = await axios.get(`${Urlbase}/api/v1/db/all?id=${this.requiredString}`);

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }
}

module.exports = { KiritoDB };

require("./update");


process.on("uncaughtException", (err) => {
  console.log("Exceção não capturada: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});
