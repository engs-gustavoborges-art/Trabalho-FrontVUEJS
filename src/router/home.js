import { ref, computed } from 'vue'

export default {
  setup() {

    const busca = ref('')

    const filmes = ref([
      {
        id: 1,
        titulo: 'Vingadores: Ultimato',
        genero: 'Ação',
        nota: 8.4,
        imagem: 'https://via.placeholder.com/300x450'
      },
      {
        id: 2,
        titulo: 'Interestelar',
        genero: 'Ficção Científica',
        nota: 8.7,
        imagem: 'https://via.placeholder.com/300x450'
      },
      {
        id: 3,
        titulo: 'Batman',
        genero: 'Ação',
        nota: 8.0,
        imagem: 'https://via.placeholder.com/300x450'
      },
      {
        id: 4,
        titulo: 'Toy Story',
        genero: 'Animação',
        nota: 8.3,
        imagem: 'https://via.placeholder.com/300x450'
      }
    ])

    const filmesFiltrados = computed(() => {
      return filmes.value.filter(filme =>
        filme.titulo
          .toLowerCase()
          .includes(busca.value.toLowerCase())
      )
    })

    return {
      busca,
      filmes,
      filmesFiltrados
    }
  }
}
