import { ref, computed } from 'vue'
import logo from '../assets/logo.png'
import { filmesDestaque, filmesLancamento } from '../data/filmes'

export default {
  setup() {
    const busca = ref('')

    const filmesDestaqueLista = ref(filmesDestaque)
    const filmesLancamentoLista = ref(filmesLancamento)

    function filtrarFilmes(lista) {
      const termoBusca = busca.value.toLowerCase().trim()

      if (termoBusca === '') {
        return lista
      }

      return lista.filter(filme =>
        filme.titulo.toLowerCase().includes(termoBusca) ||
        filme.genero.toLowerCase().includes(termoBusca)
      )
    }

    const filmesDestaqueFiltrados = computed(() => {
      return filtrarFilmes(filmesDestaqueLista.value)
    })

    const filmesLancamentoFiltrados = computed(() => {
      return filtrarFilmes(filmesLancamentoLista.value)
    })

    function moverCarrossel(id, direcao) {
      const carrossel = document.getElementById(id)

      if (!carrossel) {
        return
      }

      carrossel.scrollBy({
        left: direcao * 280,
        behavior: 'smooth'
      })
    }

    return {
      logo,
      busca,
      filmesDestaque: filmesDestaqueLista,
      filmesLancamento: filmesLancamentoLista,
      filmesDestaqueFiltrados,
      filmesLancamentoFiltrados,
      moverCarrossel
    }
  }
}
