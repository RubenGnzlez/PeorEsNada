const espress = require('express');
const Movie = require('../models/movie');


function index(request, response, next) {
  const page = request.params.page ? request.params.page : 1;

  Movie.paginate({}, {page: page, limit: 3}, (err, objs)=>{
    if (err) {
      response.json({
        error: true,
        message: 'No se pudieron extraer a las películas',
        objs: {}
      });
    } else {
      response.json({
        error: false,
        message:'Lista de Películas',
        objs: objs
      });
    }
  });
}

function create(request, response, next) {
  const title = request.body.title;
  const genre = request.body.genre;
  const duration = request.body.duration;
  const director = request.body.director;

  let movie = new Movie();
  movie.title = title;
  movie.genre = genre;
  movie.duration = duration;
  movie.director = director;

  movie.save((err, obj)=>{
    if (err) {

    } else {
      response.json({
        error: false,
        message:'Lista de Películas',
        objs: obj
      });
    }
  });

  response.send("Estaś en /movies/ -> Post")
}

function update(request, response, next) {
  response.send("Estaś en /movies/ -> Put")
}

function remove(request, response, next) {
  response.send("Estaś en /movies/ -> Delete")
}

module.exports = {
  index, create, update, remove
}
