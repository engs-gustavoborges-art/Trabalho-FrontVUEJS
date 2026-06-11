import { ref, computed } from 'vue'
import logo from '../assets/logo.png'

export default {
  setup() {

    const busca = ref('')

    const filmes = ref([
      {
        id: 1,
        titulo: 'Vingadores: Ultimato',
        genero: 'Ação',
        nota: 8.4,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0H-sPJcAm4ulRUSqG616ghc_xURQminFr1Blt2nXRal4o7jPCGGQXuDhG51aY2Ou9smPc7NPRzZGfzhNrbcBKH4aTxgW8NTS3AAahT7Ey&s=10'
      },
      {
        id: 2,
        titulo: 'Interestelar',
        genero: 'Ficção Científica',
        nota: 8.7,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpYdinhnmC-4qe3LDmRbu117twwCeXYH_vSTFS7OsYcFe_ep0IsbfqOwUJGANmKyjgLYNHY1OW2OrxJ4yvxmGxFPnd0ghS79V2GF0SIEUJw&s=10'
      },
      {
        id: 3,
        titulo: 'Batman',
        genero: 'Ação',
        nota: 8.0,
        imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/86/98/32/19870786.jpg'
      },
      {
        id: 4,
        titulo: 'Toy Story',
        genero: 'Animação',
        nota: 8.3,
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg'
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
      logo,
      busca,
      filmes,
      filmesFiltrados
    }
  }
}
