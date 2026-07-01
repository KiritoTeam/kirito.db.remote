client = require("./index");
client.config = require("./config");
const Urlbase = "https://kiritodb.adssousag.is-a.dev"

// Script by CroneGamesPlays Developer, NeoKurai Studios, ADS Sousa Group Corporation © 2020 - 2025 × Todos os direitos reservados.

const axios = require('axios');

class KiritoDB {
  constructor(requiredString) {
    if (!requiredString) {
      throw new Error("Você deve informar uma key para poder proteger seus dados.");
    }
    this.requiredString = requiredString;
  }

  // 🔹 Ping
  async ping() {
    try {
      let pingt = Date.now();
      await axios.post(`${Urlbase}/api/v4/db/add`, {
        id: "ping",
        rota: "ping",
        valor: 1
      });
      let pings = Date.now();
      return pings - pingt;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  // 🔹 Add
  async add(rota, valor) {
    try {
      if (!rota) throw new Error("Você Deve Informar a Rota.");
      if (!valor || isNaN(valor) || !isFinite(valor)) {
        throw new Error("Você Deve Informar Um Valor Numérico Válido");
      }

      const api = await axios.post(`${Urlbase}/api/v4/db/add`, {
        id: this.requiredString,
        rota,
        valor
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  // 🔹 Get
  async get(rota) {
    try {
      if (!rota) throw new Error("Você Deve Informar a Rota.");
      const api = await axios.post(`${Urlbase}/api/v4/db/get`, {
        id: this.requiredString,
        rota
      });
      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  // 🔹 Sub
  async sub(rota, valor) {
    try {
      if (!rota) throw new Error("Você Deve Informar a Rota.");
      if (!valor) throw new Error("Você Deve Informar O Valor.");

      const api = await axios.post(`${Urlbase}/api/v4/db/sub`, {
        id: this.requiredString,
        rota,
        valor
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  // 🔹 Delete
  async delete(rota) {
    try {
      if (!rota) throw new Error("Você Deve Informar a Rota.");

      const api = await axios.post(`${Urlbase}/api/v4/db/delete`, {
        id: this.requiredString,
        rota
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  // 🔹 Set
  async set(rota, valor) {
    try {
      if (!rota) throw new Error("Você Deve Informar a Rota.");
      if (!valor) throw new Error("Você Deve Informar O Valor.");

      const api = await axios.post(`${Urlbase}/api/v4/db/set`, {
        id: this.requiredString,
        rota,
        valor
      });

      return api.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }

  // 🔹 All
  async all() {
    try {
      const api = await axios.post(`${Urlbase}/api/v4/db/all`, {
        id: this.requiredString
      });
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
