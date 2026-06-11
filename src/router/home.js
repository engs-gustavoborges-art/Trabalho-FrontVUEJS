import { ref, computed } from 'vue'
import logo from '../assets/logo.png'

export default {
  setup() {
    const busca = ref('')

    const filmesDestaque = ref([
      {
        id: 1,
        titulo: 'Vingadores: Ultimato',
        genero: 'Acao',
        nota: 8.4,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0H-sPJcAm4ulRUSqG616ghc_xURQminFr1Blt2nXRal4o7jPCGGQXuDhG51aY2Ou9smPc7NPRzZGfzhNrbcBKH4aTxgW8NTS3AAahT7Ey&s=10'
      },
      {
        id: 2,
        titulo: 'Interestelar',
        genero: 'Ficcao Cientifica',
        nota: 8.7,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpYdinhnmC-4qe3LDmRbu117twwCeXYH_vSTFS7OsYcFe_ep0IsbfqOwUJGANmKyjgLYNHY1OW2OrxJ4yvxmGxFPnd0ghS79V2GF0SIEUJw&s=10'
      },
      {
        id: 3,
        titulo: 'Batman',
        genero: 'Acao',
        nota: 8.0,
        imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/86/98/32/19870786.jpg'
      },
      {
        id: 4,
        titulo: 'Toy Story',
        genero: 'Animacao',
        nota: 8.3,
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg'
      }
    ])

    const filmesLancamento = ref([
      {
        id: 5,
        titulo: 'Panico 7',
        genero: 'Terror',
        nota: 7.0,
        imagem: 'https://m.media-amazon.com/images/M/MV5BY2QwMmVlNWEtNzFmZS00ZTEwLTg3M2UtNTU2NDVhYjkwNDY2XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg'
      },
      {
        id: 6,
        titulo: 'Avatar: O Caminho da Agua',
        genero: 'Aventura',
        nota: 7.5,
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/5/54/Avatar_The_Way_of_Water_poster.jpg'
      },
      {
        id: 7,
        titulo: 'Duna: Parte Dois',
        genero: 'Ficcao Cientifica',
        nota: 8.5,
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/5/52/Dune_Part_Two_poster.jpeg'
      },
      {
        id: 8,
        titulo: 'Divertida Mente 2',
        genero: 'Animacao',
        nota: 7.6,
        imagem: 'https://m.media-amazon.com/images/S/pv-target-images/aa61ae8fb015160d802c4d5cb4fe6858058ea76485c3498ed9ff431eee4fc83f.jpg'
      }
    ])

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
      return filtrarFilmes(filmesDestaque.value)
    })

    const filmesLancamentoFiltrados = computed(() => {
      return filtrarFilmes(filmesLancamento.value)
    })

    return {
      logo,
      busca,
      filmesDestaque,
      filmesLancamento,
      filmesDestaqueFiltrados,
      filmesLancamentoFiltrados
    }
  }
}
