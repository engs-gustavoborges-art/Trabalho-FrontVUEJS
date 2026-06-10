<template>
  <div class="container">

    <h1>Criar Conta</h1>

    <input
      v-model="nome"
      placeholder="Nome"
    >

    <input
      v-model="email"
      placeholder="Email"
    >

    <input
      v-model="senha"
      type="password"
      placeholder="Senha"
    >

    <button @click="cadastrar">
      Cadastrar
    </button>

    <router-link to="/">
      Voltar para Login
    </router-link>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')

function cadastrar() {
  console.log(nome.value)
  console.log(email.value)
  console.log(senha.value)
}
</script>