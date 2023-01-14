const axios = require("axios")
const key = require("../keys/index")

const findService = {
  async find(qeury) {
    const reqString = `${key.FIN_STRING_WB}&query=${qeury}`
    const axiosRequest = await axios.get(reqString)
    return axiosRequest.data
  },
}

module.exports = findService
