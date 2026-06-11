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

.erro{
  color:#dc2626;
  margin-bottom:10px;
  font-size:14px;
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
