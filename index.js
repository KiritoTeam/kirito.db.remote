client = require("./index");
client.config = require("./config");
const Urlbase = "https://npm-db-kiritodb.ecoguardiao.tech"

// Script by CroneGamesPlays Developer, NeoKurai Studios, ADS Sousa Group Corporation © 2020 - 2025 × Todos os direitos reservados.

const axios = require('axios');
//const fetch = require("node-fetch");

class KiritoDB {
  constructor(requiredString) {
    if (!requiredString) {
      throw new Error("Você deve informar uma key para poder proteger seus dados.");
    }
    this.requiredString = requiredString; // Armazena a string para uso posterior se necessário
  }

  //Métodos da class do KiritoDB

  async add(rota, valor) {
  try {
    if (!rota) {
      throw new Error("Você Deve Informar a Rota De Onde Será Salvo. Exemplo: 2030.carteira");
    }

    if (!valor || isNaN(valor) || !isFinite(valor)) {
      throw new Error("Você Deve Informar Um Valor Numérico Válido");
    }

    const api = await axios.get(`${Urlbase}/api/v1/db/add?id=${this.requiredString}&rota=${rota}&valor=${valor}`);

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
      if (!valor) {
        throw new Error("Você Deve Informar O Valor Que Será Salvo");
      }

      const api = await axios.get(`${Urlbase}/api/v1/db/sub?id=${this.requiredString}&rota=${rota}&valor=${valor}`);

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

      const api = await axios.get(`${Urlbase}/api/v1/db/delete?id=${this.requiredString}&rota=${rota}`);

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
      if (!valor) {
        throw new Error("Você Deve Informar O Valor Que Será Salvo");
      }

      const api = await axios.get(`${Urlbase}/api/v1/db/set?id=${this.requiredString}&rota=${rota}&valor=${valor}`);

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  async all() {
    try {
      const api = await axios.get(`${Urlbase}/api/v1/db/all?id=${this.requiredString}`);

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }
}

module.exports = KiritoDB;

require("./update");


process.on("uncaughtException", (err) => {
  console.log("Exceção não capturada: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});
