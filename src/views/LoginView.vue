<template>
  <div class="container">

    <div class="login-card">

      <!-- Logo -->
      <img :src="logo" alt="Logo" class="logo">

      <p class="subtitulo">Seu catálogo de filmes</p>

      <form @submit.prevent="fazerLogin">

        <div class="campo">
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Digite seu email"
          />
        </div>

        <div class="campo">
          <label>Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite sua senha"
          />
        </div>

        <p v-if="erro" class="erro">
          Preencha todos os campos corretamente.
        </p>

        <button type="submit" class="btn-login">
          Entrar
        </button>

      </form>

      <router-link
        to="/cadastro"
        class="btn-cadastro"
      >
        Não possui conta? Cadastre-se
      </router-link>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import logo from '../assets/logo.png'

const router = useRouter()

const email = ref('')
const senha = ref('')
const erro = ref(false)

function fazerLogin() {
  const emailDigitado = email.value.trim().toLowerCase()
  const senhaDigitada = senha.value.trim()

  if (
    emailDigitado === '' ||
    senhaDigitada === ''
  ) {
    erro.value = true
    return
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
  const usuarioEncontrado = usuarios.find(usuario =>
    usuario.email === emailDigitado &&
    usuario.senha === senhaDigitada
  )

  if (!usuarioEncontrado) {
    erro.value = true
    return
  }

  erro.value = false

  alert('Login realizado com sucesso!')

  router.push('/home')
}
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.container{
  width:100%;
  min-height:100vh;
  padding:24px;

  display:flex;
  justify-content:center;
  align-items:center;

  background-image:url('../assets/background.jpg');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}

.login-card{
  width:100%;
  max-width:430px;

  background:rgba(255,255,255,0.95);
  backdrop-filter:blur(5px);

  padding:32px;
  border-radius:16px;

  box-shadow:0 8px 25px rgba(0,0,0,0.3);
}

.logo{
  width:180px;
  max-width:70%;
  height:auto;
  display:block;
  margin:0 auto 16px;
}

h1{
  text-align:center;
  color:#111827;
  margin-bottom:5px;
}

.subtitulo{
  text-align:center;
  color:#6b7280;
  margin-bottom:25px;
}

.campo{
  display:flex;
  flex-direction:column;
  margin-bottom:15px;
}

label{
  margin-bottom:5px;
  font-weight:600;
  color:#111827;
}

input{
  width:100%;
  height:48px;
  padding:0 14px;
  border:1px solid #d1d5db;
  border-radius:8px;
  font-size:15px;
}

input:focus{
  outline:none;
  border-color:#2563eb;
}

.btn-login{
  width:100%;
  height:48px;

  border:none;
  border-radius:8px;

  background:#dc2626;
  color:white;

  font-size:16px;
  cursor:pointer;

  transition:.3s;
}

.btn-login:hover{
  opacity:.9;
}

.btn-cadastro{
  display:block;

  margin-top:16px;
  padding:14px 12px;

  text-align:center;
  text-decoration:none;

  background:#2563eb;
  color:white;

  border-radius:8px;

  transition:.3s;
}

.btn-cadastro:hover{
  opacity:.9;
}

.erro{
  color:red;
  margin-bottom:10px;
}

@media (max-width:768px){

  .login-card{
    padding:24px;
  }

  .logo{
    width:140px;
  }

}

</style>
