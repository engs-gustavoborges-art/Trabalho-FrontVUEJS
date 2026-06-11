```vue
<template>
  <div class="container">

    <div class="login-card">

      <h1>Sistema de Usuários</h1>

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

        <button type="submit">
          Entrar
        </button>

      </form>

      <hr>

      <h2>Usuários Logados</h2>

      <ul v-if="usuarios.length > 0">
        <li
          v-for="(usuario, index) in usuarios"
          :key="index"
        >
          {{ usuario }}
        </li>
      </ul>

      <p v-else>
        Nenhum usuário logado.
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')
const erro = ref(false)

const usuarios = ref([])

function fazerLogin() {

  if (
    email.value.trim() === '' ||
    senha.value.trim() === ''
  ) {
    erro.value = true
    return
  }

  erro.value = false

  usuarios.value.push(email.value)

  alert('Login realizado com sucesso!')

  email.value = ''
  senha.value = ''
}
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.container{
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.login-card{
  width: 100%;
  max-width: 500px;

  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 15px;

  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

h1{
  text-align:center;
  margin-bottom:20px;
}

h2{
  margin-top:20px;
}

.campo{
  display:flex;
  flex-direction:column;
  margin-bottom:15px;
}

input{
  padding:12px;
  border:1px solid #ccc;
  border-radius:8px;
}

button{
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  cursor:pointer;
  font-size:16px;
}

button:hover{
  opacity:0.9;
}

.erro{
  color:red;
  margin-bottom:10px;
}

ul{
  margin-top:10px;
}

li{
  margin-bottom:5px;
}

</style>
```
