<template>
  <div class="container">

    <div class="register-card">

      <img
        class="logo"
        :src="logo"
        alt="Logo"
      >

      <h1>Criar Conta</h1>

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

      <button
        class="btn-register"
        @click="cadastrar"
      >
        Cadastrar
      </button>

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
import logo from '../assets/logo.png'

const nome = ref('')
const email = ref('')
const senha = ref('')

function cadastrar() {
  console.log(nome.value)
  console.log(email.value)
  console.log(senha.value)
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

.register-card{
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
  margin-bottom:24px;
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

.btn-register{
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

.btn-register:hover{
  opacity:.9;
}

.btn-voltar{
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

.btn-voltar:hover{
  opacity:.9;
}

@media (max-width:768px){

  .register-card{
    padding:24px;
  }

  .logo{
    width:140px;
  }

}
</style>
