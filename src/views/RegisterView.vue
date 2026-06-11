<template>
  <div class="container">

    <div class="register-card">

      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <h1>Criar Conta</h1>

      <form @submit.prevent="cadastrar">

        <div class="campo">
          <label>Nome</label>
          <input
            v-model="nome"
            placeholder="Digite seu nome"
          >
        </div>

        <div class="campo">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Digite seu email"
          >
        </div>

        <div class="campo">
          <label>Senha</label>
          <input
            v-model="senha"
            type="password"
            placeholder="Digite sua senha"
          >
        </div>

        <p
          v-if="mensagemErro"
          class="erro"
        >
          {{ mensagemErro }}
        </p>

        <button
          class="btn-register"
          type="submit"
        >
          Cadastrar
        </button>

      </form>

      <router-link
        class="btn-voltar"
        to="/"
      >
        Voltar para Login
      </router-link>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'

const router = useRouter()

const nome = ref('')
const email = ref('')
const senha = ref('')
const mensagemErro = ref('')

function cadastrar() {
  const nomeDigitado = nome.value.trim()
  const emailDigitado = email.value.trim().toLowerCase()
  const senhaDigitada = senha.value.trim()
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailDigitado)

  if (
    nomeDigitado === '' ||
    emailDigitado === '' ||
    senhaDigitada === ''
  ) {
    mensagemErro.value = 'Preencha todos os campos.'
    return
  }

  if (!emailValido) {
    mensagemErro.value = 'Digite um email valido.'
    return
  }

  if (senhaDigitada.length < 6) {
    mensagemErro.value = 'A senha deve ter pelo menos 6 caracteres.'
    return
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
  const emailJaCadastrado = usuarios.some(usuario => usuario.email === emailDigitado)

  if (emailJaCadastrado) {
    mensagemErro.value = 'Este email ja esta cadastrado.'
    return
  }

  usuarios.push({
    nome: nomeDigitado,
    email: emailDigitado,
    senha: senhaDigitada
  })

  localStorage.setItem('usuarios', JSON.stringify(usuarios))

  mensagemErro.value = ''
  alert('Cadastro realizado com sucesso!')
  router.push('/login')
}
</script>

<style scoped src="../styles/RegisterView.css"></style>
