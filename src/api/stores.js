const URL = 'http://komercia.co/api/movil/tiendas/0'

function getStores()
{
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.tiendas)
    .then(tiendas => tiendas.map(tiendas=> {
      return {
        nombre: tiendas.nombre,
        logo: tiendas.logo,
        likes: 28,
        comments: 155
      }
    }))
}

export {getStores}
