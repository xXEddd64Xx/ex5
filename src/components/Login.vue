<template>
  <div>
    <div>
      <h1>Login</h1>
    </div>
    <div>Email: <input style="width: 300px" placeholder="Email" v-model="email"/></div>
    <div>Password: <input style="width: 300px" placeholder="Password" type="text" v-model="pass"/></div>
    <div><button v-on:click="logIn()">Enviar</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pass: ""
    }
  },
  methods: {
    logIn(){
      this.$store.commit("logIn",{ 
        email : this.email,
        pass : this.pass
      });
      this.$router.push("/student/"+this.$store.getters.getUserLogged);
    }
  },
};
</script>

<style scoped>
div {margin:10px}
</style>