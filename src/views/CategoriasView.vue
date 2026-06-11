<template>
  <div class="categorias">

    <aside class="sidebar">
      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <nav class="menu">
        <router-link to="/home" class="menu-link">Inicio</router-link>
        <router-link to="/categorias" class="menu-link ativo">Categorias</router-link>
        <router-link to="/favoritos" class="menu-link">Favoritos</router-link>
        <router-link to="/login" class="menu-link">Sair</router-link>
      </nav>
    </aside>

    <main class="conteudo">
      <header class="hero-categorias">
        <div>
          <h1>Categorias</h1>
          <p>Explore os filmes separados por genero</p>
        </div>

        <div class="filtros">
          <input
            type="text"
            v-model="busca"
            placeholder="Pesquisar por filme ou genero..."
          >

          <select v-model="generoSelecionado">
            <option value="">Todos os generos</option>
            <option
              v-for="genero in generosDisponiveis"
              :key="genero"
              :value="genero"
            >
              {{ genero }}
            </option>
          </select>
        </div>
      </header>

      <section
        class="secao-genero"
        v-for="secao in secoesFiltradas"
        :key="secao.genero"
      >
        <div class="secao-topo">
          <h2>{{ secao.genero }}</h2>
          <div class="secao-acoes">
            <span>{{ secao.filmes.length }} filmes</span>

            <div class="controles">
              <button
                class="btn-carrossel"
                type="button"
                @click="moverCarrossel(idCarrossel(secao.genero), -1)"
              >
                &lsaquo;
              </button>

              <button
                class="btn-carrossel"
                type="button"
                @click="moverCarrossel(idCarrossel(secao.genero), 1)"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </div>

        <div class="carrossel-area">
          <div
            :id="idCarrossel(secao.genero)"
            class="carrossel"
          >
            <article
              class="card"
              v-for="filme in secao.filmes"
              :key="filme.id"
              @click="abrirFilme(filme)"
            >
              <img :src="filme.imagem" :alt="filme.titulo">

              <div class="info">
                <h3>{{ filme.titulo }}</h3>
                <p>{{ filme.genero }}</p>
                <span>Nota {{ filme.nota }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <p
        v-if="secoesFiltradas.length === 0"
        class="sem-resultados"
      >
        Nenhum filme encontrado.
      </p>
    </main>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'
import { todosFilmes } from '../data/filmes'

const router = useRouter()
const busca = ref('')
const generoSelecionado = ref('')

const secoesPorGenero = computed(() => {
  const generos = {}

  todosFilmes.forEach(filme => {
    if (!generos[filme.genero]) {
      generos[filme.genero] = []
    }

    generos[filme.genero].push(filme)
  })

  return Object.entries(generos).map(([genero, filmes]) => ({
    genero,
    filmes
  }))
})

const generosDisponiveis = computed(() => {
  return secoesPorGenero.value.map(secao => secao.genero)
})

const secoesFiltradas = computed(() => {
  const termoBusca = busca.value.toLowerCase().trim()
  const generoAtual = generoSelecionado.value

  return secoesPorGenero.value
    .filter(secao => generoAtual === '' || secao.genero === generoAtual)
    .map(secao => ({
      genero: secao.genero,
      filmes: secao.filmes.filter(filme =>
        termoBusca === '' ||
        filme.titulo.toLowerCase().includes(termoBusca) ||
        filme.genero.toLowerCase().includes(termoBusca)
      )
    }))
    .filter(secao => secao.filmes.length > 0)
})

function idCarrossel(genero) {
  return `carrossel-${genero.toLowerCase().replace(/\s+/g, '-')}`
}

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

function abrirFilme(filme) {
  if (filme.id === 1) {
    router.push('/filmes/vingadores-ultimato')
  }
}
</script>

<style scoped src="../styles/CategoriasView.css"></style>
