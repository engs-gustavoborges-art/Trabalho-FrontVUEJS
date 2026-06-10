<template>
  <div class="background">

    <div class="overlay">

      <div class="logo">
        Gshok
      </div>

      <div class="login-box">

        <h1>Entrar</h1>

        <input
          v-model="email"
          type="email"
          placeholder="Email"
        />

        <input
          v-model="senha"
          type="password"
          placeholder="Senha"
        />

        <button @click="login">
          Entrar
        </button>

        <p>
          Novo por aqui?
          <router-link to="/cadastro">
            Assine agora.
          </router-link>
        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')

function login() {
  console.log(email.value)
}
</script>