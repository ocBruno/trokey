export const state = () => ({
  anuncios: [
    'Anuncio 1',
    'Anuncio 2',
    'Anuncio 3'
  ]
})

export const mutations = {
  add (state, title) {
    state.anuncios.push(title)
  }
}

export const getters = {
  anuncios(state) {
    return state.anuncios
  }
}
