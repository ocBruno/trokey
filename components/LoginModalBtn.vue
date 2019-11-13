<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn text class="title" v-on="on">Login</v-btn>
    </template>

    <v-flex class="grey lighten-4">
      <v-container>
        <v-card flat>
          <v-card-title primary-title>
            <h4>Login</h4>
          </v-card-title>
          <v-form>
            <v-text-field v-model="email" name="Email" label="Email"></v-text-field>
            <v-text-field v-model="password" name="Password" label="Password" type="password"></v-text-field>
            <v-btn outlined fab @click.prevent="fbGoogleLogin" color="#4285F4">
              <v-icon>fab fa-google</v-icon>
            </v-btn>
            <v-card-actions>
              <v-btn primary large block @click.prevent="submit">Login</v-btn>
            </v-card-actions>
            <v-content>Não tem uma conta ainda?</v-content>
            <RegisterModal />
          </v-form>
        </v-card>
      </v-container>
    </v-flex>
  </v-dialog>
</template>

<script>
import firebase from "firebase";
import firebaseApp, { googleProvider } from "~/firebase/app";
import RegisterModal from "~/components/RegisterModal";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: "",
      provider: null,
      email: "",
      password: ""
    };
  },
  components: {
    RegisterModal
  },
  props: {
    source: String
  },
  beforeMount() {},
  methods: {
    ...mapActions("modules/user", ["login"]),
    async submit() {
      const { user } = await firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password);
      console.log('logged in as user');
      await this.login(user);
      this.$router.push("/protected");
    },
    async fbGoogleLogin() {
      const { user } = await firebaseApp.auth().signInWithPopup(googleProvider);
      await this.login(user);
      this.$router.push("/protected");
    },
    async fbGoogleLogout() {
      await this.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>