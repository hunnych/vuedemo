<template>
  <div class="ContactUs">
    <Header />
    <div id="contact-form" class="contact-form">
      <h1 class="contact-form_title">Contact Form</h1>
      <Notification :showSnackbar="showSnackbar" />
      <div class="separator"></div>
      <form class="form" @submit.prevent="submit">
        <input
          placeholder="Name"
          v-model.trim="name"
          :class="{ error: $v.name.$error }"
          @blur="$v.name.$touch()"
        />
        <div v-if="$v.name.$error">
          <p v-if="!$v.name.required" class="errorMessage">
            Please enter your name.
          </p>
        </div>
        <input
          placeholder="E-mail"
          v-model.trim="email"
          :class="{ error: $v.email.$error }"
          @blur="$v.email.$touch()"
        />
        <div v-if="$v.email.$error">
          <p v-if="!$v.email.required" class="errorMessage">
            Please enter your email.
          </p>
          <p v-if="!$v.email.email" class="errorMessage">
            Please enter valid email.
          </p>
        </div>
        <textarea
          rows="4"
          placeholder="Message"
          v-model.trim="message"
        ></textarea>
        <button type="submit" :disabled="$v.$invalid">Submit!</button>
        <p v-if="$v.$anyError" class="errorMessage">
          Please fill out the required fields
        </p>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Notification from "@/components/Notification.vue";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "ContactUs",
  components: {
    Header,
    Footer,
    Notification,
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      showSnackbar: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    name: {
      required,
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("AddContactUsData", {
            name: this.name,
            email: this.email,
            message: this.message,
          })
          .then(() => {
            this.email = null;
            this.name = null;
            this.message = null;
            this.showSnackbar = true;
            this.$v.$reset();
          });
      }
    },
  },
  mounted() {
    console.log(this.$v);
  },
};
</script>

<style scoped>
.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input,
.contact-form input,
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: grey;
  border: solid 1px grey;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: grey;
  border: solid 1px grey;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
.errorMessage {
  color: red;
}
</style>
