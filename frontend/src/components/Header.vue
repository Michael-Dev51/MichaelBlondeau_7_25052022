<template>
  <header class="d-flex align-items-center justify-content-between p-4">
    <div>
      <img
        src="../assets/icon-left-font.png"
        alt="Logo groupomania"
        class="w-50"        
        
      />
    </div>
    <div>       
      <router-link class="mr-1" to="/signup">s'inscrire</router-link>
      <router-link to="/userprofil">Profil</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  
};
</script>

<style lang="scss">
header {
  background-color: #2b75a6;
  min-height: 100px;
  a {
    color: white;
    &:hover {
      color: red;
      text-decoration: none;
    }
  }
}
</style>
