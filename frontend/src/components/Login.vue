<template>
  <div class="container">
    <form class="col-6 bg-light p-4 mx-auto">
      <h3 class="text-center">Se connecter</h3>
      <div class="form-group">
        <label>Adresse email</label>
        <input
          type="email"
          name="email"
          v-model="form.email"
          class="form-control form-control-lg"
          placeholder="adresse@exemple.com"
        />
      </div>
      <div class="form-group">
        <label>Mot de passe</label>
        <input
          type="password"
          name="password"
          v-model="form.password"
          class="form-control form-control-lg"
          placeholder="ex : Cml018k/"
        />
      </div>
      <button @click="login" class="btn btn-dark btn-lg btn-block">
        Connexion
      </button>
      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {},

  methods: {
    login (e) {
      e.preventDefault()
      this.$store.dispatch('user/login', { ...this.form })
      this.$router.push('/allPost')
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}
.forgot-password a {
  color: #2554ff;
}
</style>
