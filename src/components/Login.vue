<template>
  <div>
    <div>
      <h1>Login</h1>
    </div>
    <div>Email: <input style="width: 300px" placeholder="Email" v-model="email"/></div>
    <div>Password: <input style="width: 300px" placeholder="Password" type="password" v-model="pwd"/></div>
    <div><button v-on:click="setUser()">Enviar</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pwd: ""
    }
  },
  methods: {
    setUser(){
      console.log(this.$store.getters.getLlista);
      console.log(this.$store.commit("buscarEmail", this.email));
      /* if(this.$store.getters.getLlista.includes(this.email)){
        console.log(this.$store.getters.getLlista[0]);
        if(this.pwd === this.$store.getters.getLlista[this.$store.getters.getLlista.indexOf(this.email)].pwd){
          this.$store.commit("setUserLogged", this.email);
        }
      } */
    }
  },
};
</script>

<style scoped>
div {margin:10px}
</style>