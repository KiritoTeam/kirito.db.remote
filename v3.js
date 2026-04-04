client = require("./index");
client.config = require("./config");
const axios = require("axios");
const CryptoJS = require("crypto-js");

const Urlbase = "https://kiritodb.adssousag.is-a.dev/kiritodb/v3";
const secret = "12C42799B4271ECBFC8CC8C13BC86";

class KiritoDB {
  constructor(requiredString) {
    if (!requiredString) {
      throw new Error("Você deve informar uma key para proteger seus dados.");
    }
    this.requiredString = requiredString;
  }

  // 🔐 Função utilitária de criptografia segura
  criptografar(payload) {
    const stringJSON = JSON.stringify(payload);
    const encrypted = CryptoJS.AES.encrypt(stringJSON, secret).toString();
    return encodeURIComponent(encrypted); // compatível com URL
  }
  
async ping(ping) {
    try {
      let pingt = Date.now();
      const rota = "ping";
      const valor = "1";
      const data = this.criptografar({ id: this.requiredString, rota, valor });
      await axios.get(`${Urlbase}/api/v1/db/add?data=${data}`);
      let pings = Date.now();
      let ping = pings - pingt;

      return ping;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  }
  async get(rota) {
    if (!rota) throw new Error("Informe a rota.");

    const data = this.criptografar({ id: this.requiredString, rota });
    const api = await axios.get(`${Urlbase}/api/v1/db/get?data=${data}`);
    return api.data;
  }

  async set(rota, valor) {
    if (!rota || valor === undefined) throw new Error("Rota e valor são obrigatórios.");
    
    const data = this.criptografar({ id: this.requiredString, rota, valor });
    const api = await axios.get(`${Urlbase}/api/v1/db/set?data=${data}`);
    return api.data;
  }

  async add(rota, valor) {
    if (!rota || isNaN(valor)) throw new Error("Rota e valor numérico são obrigatórios.");

    const data = this.criptografar({ id: this.requiredString, rota, valor });
    const api = await axios.get(`${Urlbase}/api/v1/db/add?data=${data}`);
    return api.data;
  }

  async sub(rota, valor) {
    if (!rota || isNaN(valor)) throw new Error("Rota e valor numérico são obrigatórios.");

    const data = this.criptografar({ id: this.requiredString, rota, valor });
    const api = await axios.get(`${Urlbase}/api/v1/db/sub?data=${data}`);
    return api.data;
  }

  async delete(rota) {
    if (!rota) throw new Error("Informe a rota.");

    const data = this.criptografar({ id: this.requiredString, rota });
    const api = await axios.get(`${Urlbase}/api/v1/db/delete?data=${data}`);
    return api.data;
  }

  async all() {
    const data = this.criptografar({ id: this.requiredString });
    const api = await axios.get(`${Urlbase}/api/v1/db/all?data=${data}`);
    return api.data;
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
