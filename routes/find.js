const express = require("express")
const findService = require("../services/findServices")
const router = express.Router()

router.post("/", async (req, res, next) => {
  try {
    const { query, myBrand } = req.body
    const response = await findService.find(query)
    const brands = response.data.products.map((i) => ({name:i.brand}))
    console.log(req.body)
    res.render("index", { brands, myBrand })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
