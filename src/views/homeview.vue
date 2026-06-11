<template>
  <div class="home">

    <aside class="sidebar">
      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <nav class="menu">
        <router-link to="/home" class="menu-link ativo">Inicio</router-link>
        <router-link to="/categorias" class="menu-link">Categorias</router-link>
        <a href="#" class="menu-link">Favoritos</a>
        <router-link to="/login" class="menu-link">Sair</router-link>
      </nav>
    </aside>

    <main class="conteudo">
      <header class="hero">
        <div>
          <p>Descubra os melhores filmes do momento</p>
        </div>

        <input
          type="text"
          v-model="busca"
          placeholder="Pesquisar filme..."
        >
      </header>

      <section class="filmes-destaque">
        <div class="secao-topo">
          <h2>Filmes em Destaque</h2>

          <div class="controles">
            <button
              class="btn-carrossel"
              type="button"
              @click="moverCarrossel('carrossel-destaque', -1)"
            >
              ‹
            </button>

            <button
              class="btn-carrossel"
              type="button"
              @click="moverCarrossel('carrossel-destaque', 1)"
            >
              ›
            </button>
          </div>
        </div>

        <div class="carrossel-area">
          <div
            id="carrossel-destaque"
            class="carrossel"
          >
            <div
              class="card"
              v-for="filme in filmesDestaqueFiltrados"
              :key="filme.id"
              @click="abrirFilme(filme)"
            >
              <img :src="filme.imagem" :alt="filme.titulo">

              <div class="info">
                <h3>{{ filme.titulo }}</h3>
                <p>{{ filme.genero }}</p>
                <span>Nota {{ filme.nota }}</span>
              </div>
            </div>
          </div>
        </div>

        <p
          v-if="filmesDestaqueFiltrados.length === 0"
          class="sem-resultados"
        >
          Nenhum filme em destaque encontrado.
        </p>
      </section>

      <section class="filmes-lancamento">
        <div class="secao-topo">
          <h2>Filmes Lancamento</h2>

          <div class="controles">
            <button
              class="btn-carrossel"
              type="button"
              @click="moverCarrossel('carrossel-lancamento', -1)"
            >
              ‹
            </button>

            <button
              class="btn-carrossel"
              type="button"
              @click="moverCarrossel('carrossel-lancamento', 1)"
            >
              ›
            </button>
          </div>
        </div>

        <div class="carrossel-area">
          <div
            id="carrossel-lancamento"
            class="carrossel"
          >
            <div
              class="card"
              v-for="filme in filmesLancamentoFiltrados"
              :key="filme.id"
              @click="abrirFilme(filme)"
            >
              <img :src="filme.imagem" :alt="filme.titulo">

              <div class="info">
                <h3>{{ filme.titulo }}</h3>
                <p>{{ filme.genero }}</p>
                <span>Nota {{ filme.nota }}</span>
              </div>
            </div>
          </div>
        </div>

        <p
          v-if="filmesLancamentoFiltrados.length === 0"
          class="sem-resultados"
        >
          Nenhum filme lancamento encontrado.
        </p>
      </section>

    </main>

  </div>
</template>

<script src="../router/home.js"></script>

<style scoped src="../styles/HomeView.css"></style>
