<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="lighten-2"
          v-on="on"
        >
          Criar conta
        </v-btn>
      </template>

      <v-flex class="grey lighten-4">
        <v-container >
          <v-card flat>
            <v-card-title primary-title>
              <h4>Criar conta</h4>
            </v-card-title>
            <v-form>
            <v-text-field v-model="email" name="Email" label="Email"></v-text-field>
            <v-text-field v-model="password" name="Password" label="Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="createEmailAccount">Criar Conta</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>

    </v-dialog>
</template>

<script>
import firebase from 'firebase'
import { mapMutations } from 'vuex'
    export default {
        data () {
          return {
            dialog: '',
            provider: null,
            email: '',
            password: ''
          }
        },
        props: {
            source: String,
        },
        beforeMount () {
          //https://firebase.google.com/docs/auth/web/google-signin

          this.provider = new firebase.auth.GoogleAuthProvider();
        },
        methods: {
          async createEmailAccount () {
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res)=>{
                console.log(res);
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log('Error code creating user:', error.message);
                var errorMessage = error.message;
                console.log('Error message creating user:', error.message);
                // ...
              });
          }
        }
    }
</script>

<style lang="css" scoped>

</style>
