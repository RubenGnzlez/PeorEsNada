const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.send("Hola bb, u r in /movies/");
});

router.post('/', (request, response, next) => {
  response.send("Estaś en /movies/ -> Post")
});

router.put('/', (request, response, next) => {
  response.send("Estaś en /movies/ -> Put")
});

router.delete('/', (request, response, next) => {
  response.send("Estaś en /movies/ -> Delete")
});

module.exports = router;
