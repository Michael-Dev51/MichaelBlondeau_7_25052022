<template>
  <div class="container">
    <b-form class="d-flex flex-row justify-content-around" @submit="onSubmit">
      <b-form-input
        id="article"
        name="article"
        v-model="text"
        type="article"
        placeholder="Ecrivez votre commentaire"
        accept="image/*"
      ></b-form-input>

      <b-button type="submit" variant="primary" :disabled="isDisabled"
        >Envoyer</b-button
      >
    </b-form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CreateComment",
  data() {
    return {
      text: "",
      isDisabled: true,
    };
  },

  created: function () {
    // a function to call getposts action
    this.GetPosts();
  },
  computed: {
    ...mapGetters({ Posts: "StatePosts", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["CreatePost", "GetPosts"]),
    async submit() {
      try {
        await this.CreatePost(this.form);
      } catch (error) {
        throw "Sorry you can't make a post now!";
      }
    },
  },
};
</script>
<style scoped lang="scss">
.form-control {
  width: 80%;
}
</style>
