<template>
  <div class="home">

    <aside class="sidebar">
      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <nav class="menu">
        <a href="#" class="menu-link ativo">Inicio</a>
        <a href="#" class="menu-link">Filmes</a>
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
              <span>Nota {{ filme.nota }}</span>
            </div>
          </div>
        </div>

        <p
          v-if="filmesFiltrados.length === 0"
          class="sem-resultados"
        >
          Nenhum filme encontrado.
        </p>
      </section>
    </main>

  </div>
</template>

<script src="../router/home.js"></script>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.home{
  min-height:100vh;
  display:flex;
  background:#101014;
  color:white;
}

.sidebar{
  width:200px;
  min-height:100vh;
  padding:28px 20px;

  position:fixed;
  top:0;
  left:0;

  background:#18181d;
  border-right:1px solid #2a2a32;
}

.logo{
  width:180px;
  max-width:100%;
  height:auto;
  display:block;
  margin:0 auto 36px;
}

.menu{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.menu-link{
  padding:13px 14px;
  border-radius:8px;

  color:#d1d5db;
  text-decoration:none;
  font-weight:600;

  transition:.3s;
}

.menu-link:hover,
.menu-link.ativo{
  background:#dc2626;
  color:white;
}

.conteudo{
  width:100%;
  min-height:100vh;
  margin-left:200px;
}

.hero{
  min-height:220px;
  padding:48px 40px;

  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:24px;

  background:#1c1c1c;
}

.hero h1{
  margin-bottom:8px;
  font-size:36px;
}

.hero p{
  color:#d1d5db;
}

.hero input{
  width:100%;
  max-width:400px;
  height:48px;
  padding:0 16px;
  border:none;
  border-radius:8px;
  font-size:15px;
}

.filmes{
  padding:32px 40px;
}

.filmes h2{
  margin-bottom:20px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:20px;
}

.card{
  background:#222;
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 8px 18px rgba(0,0,0,.25);
}

.card img{
  width:100%;
  height:320px;
  object-fit:cover;
}

.info{
  padding:15px;
}

.info h3{
  margin-bottom:8px;
}

.info p{
  color:#d1d5db;
  margin-bottom:8px;
}

.info span{
  color:#facc15;
  font-weight:700;
}

.sem-resultados{
  color:#d1d5db;
}

@media (max-width:768px){

  .home{
    flex-direction:column;
  }

  .sidebar{
    width:100%;
    min-height:auto;
    padding:16px;

    position:static;
  }

  .logo{
    width:130px;
    margin-bottom:16px;
  }

  .menu{
    flex-direction:row;
    overflow-x:auto;
  }

  .menu-link{
    white-space:nowrap;
  }

  .conteudo{
    margin-left:0;
  }

  .hero{
    padding:32px 20px;
    flex-direction:column;
    align-items:flex-start;
  }

  .hero h1{
    font-size:30px;
  }

  .hero input{
    max-width:none;
  }

  .filmes{
    padding:24px 20px;
  }

}
</style>
