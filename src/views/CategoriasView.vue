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
        <a href="#" class="menu-link">Favoritos</a>
        <router-link to="/login" class="menu-link">Sair</router-link>
      </nav>
    </aside>

    <main class="conteudo">
      <header class="hero-categorias">
        <div>
          <h1>Categorias</h1>
          <p>Explore os filmes separados por genero</p>
        </div>

        <input
          type="text"
          v-model="busca"
          placeholder="Pesquisar por filme ou genero..."
        >
      </header>

      <section
        class="secao-genero"
        v-for="secao in secoesFiltradas"
        :key="secao.genero"
      >
        <div class="secao-topo">
          <h2>{{ secao.genero }}</h2>
          <span>{{ secao.filmes.length }} filmes</span>
        </div>

        <div class="grade-filmes">
          <article
            class="card"
            v-for="filme in secao.filmes"
            :key="filme.id"
          >
            <img :src="filme.imagem" :alt="filme.titulo">

            <div class="info">
              <h3>{{ filme.titulo }}</h3>
              <p>{{ filme.genero }}</p>
              <span>Nota {{ filme.nota }}</span>
            </div>
          </article>
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
import logo from '../assets/logo.png'
import { todosFilmes } from '../data/filmes'

const busca = ref('')

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

const secoesFiltradas = computed(() => {
  const termoBusca = busca.value.toLowerCase().trim()

  if (termoBusca === '') {
    return secoesPorGenero.value
  }

  return secoesPorGenero.value
    .map(secao => ({
      genero: secao.genero,
      filmes: secao.filmes.filter(filme =>
        filme.titulo.toLowerCase().includes(termoBusca) ||
        filme.genero.toLowerCase().includes(termoBusca)
      )
    }))
    .filter(secao => secao.filmes.length > 0)
})
</script>

<style scoped src="../styles/CategoriasView.css"></style>
