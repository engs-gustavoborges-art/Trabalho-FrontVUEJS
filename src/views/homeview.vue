<template>
  <div class="home">

    <header class="hero">
      <h1>CineFlix</h1>
      <p>Descubra os melhores filmes do momento</p>

      <input
        type="text"
        v-model="busca"
        placeholder="Pesquisar filme..."
      />
    </header>

    <section class="filmes">
      <h2>Filmes em Destaque</h2>

      <div class="grid">
        <div
          class="card"
          v-for="filme in filmesFiltrados"
          :key="filme.id"
        >
          <img :src="filme.imagem" :alt="filme.titulo">

          <div class="info">
            <h3>{{ filme.titulo }}</h3>
            <p>{{ filme.genero }}</p>
            <span>⭐ {{ filme.nota }}</span>
          </div>
        </div>
      </div>

      <p v-if="filmesFiltrados.length === 0">
        Nenhum filme encontrado.
      </p>

    </section>

  </div>
</template>

<script src="../router/home.js"></script>

<style scoped>
.home{
  min-height:100vh;
  background:#111;
  color:white;
}

.hero{
  text-align:center;
  padding:60px 20px;
  background:#1c1c1c;
}

.hero input{
  width:100%;
  max-width:400px;
  padding:12px;
  border:none;
  border-radius:8px;
}

.filmes{
  padding:30px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.card{
  background:#222;
  border-radius:12px;
  overflow:hidden;
}

.card img{
  width:100%;
  height:320px;
  object-fit:cover;
}

.info{
  padding:15px;
}
</style>
