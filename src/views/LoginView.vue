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

<style scoped src="../styles/LoginView.css"></style>
