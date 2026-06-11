<template>
  <div class="favoritos-page">

    <aside class="sidebar">
      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <nav class="menu">
        <router-link to="/home" class="menu-link">Inicio</router-link>
        <router-link to="/categorias" class="menu-link">Categorias</router-link>
        <router-link to="/favoritos" class="menu-link ativo">Favoritos</router-link>
        <router-link to="/login" class="menu-link">Sair</router-link>
      </nav>
    </aside>

    <main class="conteudo">
      <header class="hero-favoritos">
        <div>
          <h1>Favoritos</h1>
          <p>Filmes que voce marcou para assistir depois</p>
        </div>
      </header>

      <section class="favoritos-lista">
        <div class="secao-topo">
          <h2>Minha Lista</h2>
          <span>{{ filmesFavoritos.length }} filmes</span>
        </div>

        <div
          v-if="filmesFavoritos.length > 0"
          class="grade-filmes"
        >
          <article
            class="card"
            v-for="filme in filmesFavoritos"
            :key="filme.id"
          >
            <img
              :src="filme.imagem"
              :alt="filme.titulo"
              @click="abrirFilme(filme)"
            >

            <div class="info">
              <h3 @click="abrirFilme(filme)">{{ filme.titulo }}</h3>
              <p>{{ filme.genero }}</p>
              <span>Nota {{ filme.nota }}</span>

              <button
                type="button"
                @click="remover(filme.id)"
              >
                Remover dos favoritos
              </button>
            </div>
          </article>
        </div>

        <p
          v-else
          class="sem-resultados"
        >
          Nenhum filme favoritado ainda.
        </p>
      </section>
    </main>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'
import { todosFilmes } from '../data/filmes'
import { buscarFavoritos, removerFavorito } from '../utils/favoritos'

const router = useRouter()
const favoritos = ref(buscarFavoritos())

const filmesFavoritos = computed(() => {
  return todosFilmes.filter(filme => favoritos.value.includes(filme.id))
})

function abrirFilme(filme) {
  if (filme.id === 1) {
    router.push('/filmes/vingadores-ultimato')
  }
}

function remover(id) {
  removerFavorito(id)
  favoritos.value = buscarFavoritos()
}
</script>

<style scoped src="../styles/FavoritosView.css"></style>
