<template>
  <v-container>
    <v-card max-width="450px" height="280px" class="mx-auto">
      <v-card-text class="pb-2">
        <p class="text-subtitle-1 text-center mt-2 primary-text-2">
          User verification
        </p>
      </v-card-text>
      <v-card-text class="pb-1">
        <v-text-field outlined placeholder="Email"></v-text-field>
        <v-card-actions>
          <v-btn block depressed color="success" style="min-height: 50px">
            Send mail
          </v-btn>
        </v-card-actions>
      </v-card-text>
      <p class="text-center">
          <!--<a href="javascript:void(0);" @click="showLogninForm">Back</a>-->
          <router-link to="/login">Back</router-link>
      </p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ForgotPassword",
   methods: {
    showLogninForm() {
      this.$emit("show-login");
    },
  },
};
</script>

<style scoped>
.container {
  padding: 370px;
}