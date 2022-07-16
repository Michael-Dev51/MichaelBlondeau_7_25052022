<template>
  <div class="container">
    <form class="col-6 bg-light p-4 mx-auto">
      <h3 class="text-center">Formulaire d'inscription</h3>
      <!--
      <div class="form-group">
        <label>Prénom</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          v-model="firstname"
          class="form-control form-control-lg"
        />
      </div>
      -->
      <div class="form-group">
        <label>Nom</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="form.userName"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="form.email"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="form.password"
          class="form-control form-control-lg"
        />
      </div>
      <button v-on:click="trySubmit" class="btn btn-dark btn-lg btn-block">
        Enregistrer
      </button>
      <div>
        <span v-for="err in getErrors" :key="err.value">{{ err.message }}</span>
      </div>
      <p class="forgot-password text-right">
        Vous êtes déjà inscrit ?
        <router-link :to="{ name: 'Login' }">Se connecter</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      form: {
        userName: '',
        email: '',
        password: '',
        isAdmin: null
      }
    }
  },
  computed: {
    getErrors () {
      console.log(this.$store.state)
      return 'this.$store.user.getters.getAllErrors'
      // return this.$store.errors
    }
  },

  /*computed: {
    isFisrtNameCorrect () {
      const correct = Boolean(
        this.form.userName.match(/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)$/)
      )
      correct ? console.log('Prénom correct') : console.log('Prénom incorrect')
      return correct
    },
    /* isLastNameCorrect () {
      const correct = Boolean(
        this.lastname.match(/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)$/)
      )
      correct ? console.log('Nom correct') : console.log('Nom incorrect')
      return correct
    },
    isEmailCorrect () {
      const correct = Boolean(
        this.form.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
      correct ? console.log('Email correct') : console.log('Email incorrect')
      return correct
    },
    isPasswordCorrect () {
      const correct = Boolean(
        this.form.password.match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        )
      )
      correct
        ? console.log('Password correct')
        : console.log('Password incorrect')
      return correct
    },
    formIsValid () {
      if (
        !this.isFisrtNameCorrect ||
        !this.isLastNameCorrect ||
        !this.isEmailCorrect ||
        !this.isPasswordCorrect
      ) {
        alert('Firstname or lastname or email or password incorrect')
        return
      }
    }
  },*/

  methods: {
    trySubmit (e) {
      e.preventDefault()
      //if (this.formIsValid()) {
      this.$store
        .dispatch('user/register', { ...this.form })
        .then(function (response) {
          console.log(response)
        })
        .catch(error => {
          console.log(error)

          console.log(this.$store.user.state.errors)
        })

      //this.$router.push('/login')
      //}
    }
  }
}
</script>

<style scoped lang="scss">
::placeholder {
  opacity: 0.4;
}
</style>
