<template>
  <v-container>
    <v-card max-width="450px" height="430px" class="mx-auto">
      <v-card-text class="pb-2">
         <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          top
          color="green"
        ></v-progress-linear>
        <p class=" text-center mt-2 primary-text-2">
          Sign in to your account
        </p>
      </v-card-text>
      <v-card-text class="pb-1">
        <v-text-field outlined placeholder="Username"></v-text-field>
        <v-text-field outlined placeholder="Password"></v-text-field>
        <v-row class="align-center">
          <v-col>
            <v-checkbox v-model="checkbox" label="Remember Me "></v-checkbox>
          </v-col>
          <v-col>
           <router-link to="/forgotpassword">Forgot Password?</router-link>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn block depressed color="success" 
           @click="loading = true"
           style="min-height: 50px">
            Login
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <br />
    <v-card max-width="450px" height="60px" class="mx-auto align-center">
      <p class="text-center mt-2 primary-text-2 pt-5 ">
        Don't have an account? <router-link to="/register">Create One</router-link>
      </p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    loading: false,
    checkbox:""
  }),

  watch: {
    loading (val) {
      if (!val) return

      setTimeout(() => (this.loading = false), 3000)
    },
  },

  methods: {
    showForgotPWDForm() {
      this.$emit("show-forgot-password");
    },
  },
};
</script>

<style>
.container {
  padding: 170px;
}
@font-face {
  font-family: GothamRounded;
  src: url(../assets/GothamRounded-Light.otf);
}
.v-application p {
  font-family: GothamRounded !important;
  
}
</style>
