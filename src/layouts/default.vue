<template>
<v-app>
  <div>
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
    <v-toolbar id="toolbar">
      <v-toolbar-title class="ma-3"><v-img width="150" height="auto" :src="require('../assets/Trokey.png')"></v-img></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items >
        <v-btn text class="title disable-events"><span class="yellow--text">anuncie</span> gratis</v-btn>
        <v-btn text class="title">blog</v-btn>
        <v-btn text class="title">cadastre-se</v-btn>
        <LoginModalBtn/>
      </v-toolbar-items>
    </v-toolbar>
  </div>
  <v-content>
    <v-container class="py-0 my-0">
      <nuxt />
    </v-container>
  </v-content>
  <v-navigation-drawer
    v-model="rightDrawer"
    :right="right"
    temporary
    fixed
  >
    <v-list>
      <v-list-item @click.native="right = !right">
        <v-list-item-action>
          <v-icon light>
            mdi-repeat
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-footer
    :fixed="fixed"
    app
  >
    <span>&copy; 2019</span>
  </v-footer>
</v-app>
</template>

<script>
import LoginModalBtn from '~/components/LoginModalBtn'
import { mapGetters } from 'vuex'
export default {
components: {
  LoginModalBtn},
computed: {
  // ...mapGetters('modules/user', ['user, uid'])
},
data () {
  return {
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Trokey'
  }
  }
}

</script>
<style lang="css">
.disable-events {
  pointer-events: none;
}

</style>
