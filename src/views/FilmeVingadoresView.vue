<template>
  <div class="filme-page">

    <aside class="sidebar">
      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <nav class="menu">
        <router-link to="/home" class="menu-link">Inicio</router-link>
        <router-link to="/categorias" class="menu-link">Categorias</router-link>
        <router-link to="/favoritos" class="menu-link">Favoritos</router-link>
        <router-link to="/login" class="menu-link">Sair</router-link>
      </nav>
    </aside>

    <main class="conteudo">
      <section class="filme-hero">
        <div class="poster-area">
          <img
            class="poster"
            :src="filme.imagem"
            :alt="filme.titulo"
          >
        </div>

        <div class="filme-info">
          <p class="categoria">{{ filme.genero }}</p>
          <h1>{{ filme.titulo }}</h1>

          <div class="detalhes">
            <span>2019</span>
            <span>3h 1min</span>
            <span>Nota {{ filme.nota }}</span>
            <span>12 anos</span>
          </div>

          <p class="sinopse">
            Apos os eventos devastadores de Guerra Infinita, os Vingadores restantes precisam encontrar uma forma de reverter as perdas causadas por Thanos. Em uma ultima missao, herois antigos e novos se unem para tentar restaurar o equilibrio do universo.
          </p>

          <div class="opcoes">
            <label>
              Qualidade
              <select v-model="qualidadeSelecionada">
                <option
                  v-for="qualidade in qualidades"
                  :key="qualidade"
                  :value="qualidade"
                >
                  {{ qualidade }}
                </option>
              </select>
            </label>

            <label>
              Audio
              <select v-model="audioSelecionado">
                <option value="Dublado">Dublado</option>
                <option value="Legendado">Legendado</option>
              </select>
            </label>
          </div>

          <div class="acoes">
            <button
              class="btn-play"
              type="button"
              @click="reproduzir"
            >
              Play
            </button>

            <button
              class="btn-favorito"
              :class="{ ativo: favorito }"
              type="button"
              @click="alternarFavorito"
            >
              {{ favorito ? 'Favoritado' : 'Favoritar' }}
            </button>
          </div>

          <p
            v-if="mensagem"
            class="mensagem"
          >
            {{ mensagem }}
          </p>
        </div>
      </section>

      <section class="comentarios">
        <div class="secao-topo">
          <h2>Comentarios</h2>
          <span>{{ comentarios.length }} comentarios</span>
        </div>

        <article
          class="comentario"
          v-for="comentario in comentarios"
          :key="comentario.id"
        >
          <div>
            <strong>{{ comentario.nome }}</strong>
            <span>{{ comentario.nota }}</span>
          </div>
          <p>{{ comentario.texto }}</p>
        </article>
      </section>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.png'
import { filmesDestaque } from '../data/filmes'
import {
  adicionarFavorito,
  filmeEstaFavoritado,
  removerFavorito
} from '../utils/favoritos'

const filme = filmesDestaque.find(item => item.id === 1)
const qualidades = ['Full HD', 'HD', '4K']
const qualidadeSelecionada = ref('Full HD')
const audioSelecionado = ref('Dublado')
const favorito = ref(filmeEstaFavoritado(filme.id))
const mensagem = ref('')

const comentarios = [
  {
    id: 1,
    nome: 'Lucas',
    nota: '5/5',
    texto: 'Final emocionante e cheio de cenas marcantes. Um dos melhores filmes da Marvel.'
  },
  {
    id: 2,
    nome: 'Mariana',
    nota: '4.5/5',
    texto: 'Gostei muito da historia e das batalhas. Vale assistir de novo.'
  },
  {
    id: 3,
    nome: 'Rafael',
    nota: '5/5',
    texto: 'O encontro dos personagens ficou incrivel e o ritmo prende bastante.'
  }
]

function reproduzir() {
  mensagem.value = `Reproduzindo em ${qualidadeSelecionada.value} - ${audioSelecionado.value}.`
}

function alternarFavorito() {
  favorito.value = !favorito.value

  if (favorito.value) {
    adicionarFavorito(filme.id)
  } else {
    removerFavorito(filme.id)
  }

  mensagem.value = favorito.value
    ? 'Filme adicionado aos favoritos.'
    : 'Filme removido dos favoritos.'
}
</script>

<style scoped src="../styles/FilmeVingadoresView.css"></style>
