const CHAVE_FAVORITOS = 'filmesFavoritos'

export function buscarFavoritos() {
  return JSON.parse(localStorage.getItem(CHAVE_FAVORITOS) || '[]')
}

export function filmeEstaFavoritado(id) {
  return buscarFavoritos().includes(id)
}

export function adicionarFavorito(id) {
  const favoritos = buscarFavoritos()

  if (!favoritos.includes(id)) {
    favoritos.push(id)
  }

  localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
}

export function removerFavorito(id) {
  const favoritos = buscarFavoritos().filter(filmeId => filmeId !== id)

  localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
}
