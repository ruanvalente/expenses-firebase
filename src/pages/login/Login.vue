<template>
  <form class="form-login">
    <div class="card">
     <div class="card-header">
        <h2 class="text-center m-2">Expenses</h2>
     </div>
      <div class="card-body">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="E-mail">
        </div>

        <div class="form-group">
          <input type="password" class="form-control" placeholder="Senha">
        </div>
      </div>

      <button class="btn w100">Entrar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

.form-login {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}

button {
  background: var(--expense-dark);
  color: var(--expense-white);
  transition: all 0.5s;
}

button:hover {
  background: var(--expense-dark);
  color: var(--expense-white-medium);
}
</style>
