<template>
  <div id="app">
    <div>
      <router-link to="/login">Login</router-link>
      &nbsp;-&nbsp;
      <router-link to="/register">Register</router-link>
      &nbsp;-&nbsp;
      <router-link to="'/student'+this.$store.getters.getUserLogged">Student</router-link>
      &nbsp;-&nbsp;
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      email: String
    }
  },
  methods: {
    
  },
  components: {

  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
