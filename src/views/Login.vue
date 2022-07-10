<template>
  <div>
    <Header />
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Sign In</div>
          </md-card-header>

          <md-field>
            <label>Email</label>
            <md-input v-model="email"></md-input>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input v-model="password"></md-input>
          </md-field>
          <md-button class="md-primary" v-on:click="submitLogin()"
            >Login</md-button
          >
        </md-card>
      </div>
      <div class="md-layout-item"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    submitLogin() {
      console.log("email", this.email);
      console.log("password", this.password);
    },
  },
};
</script>

<style scoped>
.md-input {
  margin: "10px 10px 10px 10px";
}
</style>
