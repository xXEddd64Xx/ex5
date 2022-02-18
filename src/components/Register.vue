<template>
  <div>
    <div>
      <h1>Register</h1>
    </div>
      <div>Nom: <input required style="width: 300px" placeholder="Nom" v-model="name"/></div>
      <div>
        Email:
        <input required style="width: 300px" placeholder="Email" type="email" v-model="email"/>
      </div>
      <div>
        Password: <input required style="width: 300px" placeholder="Password" type="password" v-model="pwd"/>
      </div>
      <div>
        Repeteix password:
        <input required style="width: 300px" placeholder="Repeteix password" type="password" v-model="rpwd"/>
      </div>
      <div><button v-on:click="afegeixElement()">Entrar</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      pwd: "",
      rpwd: ""
    }
  },
  methods: {
    afegeixElement() {
      var persona;
          if (this.pwd == this.rpwd) {
            persona = {
              name : this.name,
              email : this.email,
              pwd : this.pwd
            }
            this.$store.commit("afegeixElement", persona);
            this.$router.push("/login");
          } else { alert("Les contrasenyes no son iguals"); }
    }
  },
};
</script>

<style scoped>
div {
  margin: 10px;
}
</style>