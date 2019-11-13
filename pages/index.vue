<template>
<v-container fluid ma-0 pa-0 fill-height>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <!-- <v-card-title class="headline">
          Trokey
        </v-card-title>-->
        <v-img
          :src="require('@/assets/Banner.jpg')"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="300"
        ></v-img>
        <v-card-text>
          <v-card-text>
            <v-container class="grey lighten-3">
              <v-row>
                <v-col>
                  <h1 class="display-5 text-center mb-5">troque seu imovel agora</h1>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field background-color="white" placeholder="tipo" color="lighten-2">Valor</v-text-field>
                </v-col>
                <v-col>
                  <v-text-field background-color="white" placeholder="estado" color="lighten-2">Valor</v-text-field>
                </v-col>
                <v-col>
                  <v-text-field background-color="white" placeholder="cidade" color="lighten-2">Valor</v-text-field>
                </v-col>
                <v-col>
                  <v-text-field background-color="white" placeholder="bairro" color="lighten-2">Valor</v-text-field>
                </v-col>
              </v-row>
              <v-row style="max-width: 1000px;">

                <v-col align-self="center">
                  <v-icon>mdi-bed-double-outline</v-icon>
                  <p class="d-inline">quartos</p>
                  <v-btn small>1</v-btn>
                  <v-btn small>2</v-btn>
                  <v-btn small>3</v-btn>
                  <v-btn small>+</v-btn>
                </v-col>
                <v-col align-self="center">
                   <v-icon>mdi-car</v-icon>
                   <p class="d-inline">vagas</p>
                   <v-btn small>1</v-btn>
                    <v-btn small>2</v-btn>
                    <v-btn small>3</v-btn>
                    <v-btn small>+</v-btn>
                </v-col>
                 <v-col cols="1">
                  <v-text-field  background-color="white" placeholder="de" color="lighten-2">Valor</v-text-field>
                  </v-col>
                  <v-col cols="1">
                  <v-text-field  background-color="white" placeholder="até" color="lighten-2">Valor</v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-text-field  background-color="white" placeholder="m2" color="lighten-2">Valor</v-text-field>
                  </v-col>
                    <v-col cols="1">
                  <v-text-field  background-color="white" placeholder="até" color="lighten-2">Valor</v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-layout justify-end>
              <v-btn class="mt-3" large color="yellow">Buscar</v-btn>
            </v-layout>

            <v-container class="lighten-5">
              <v-row class="mb-2" v-for="n in 3" :key="n">
                <v-col v-for="n in 4" :key="n">
                  <v-card class="pa-2" outlined tile>
                    <v-container class="fill-height" fluid>
                      <v-row>
                        <v-col cols="4">
                          <v-img
                            height="50"
                            width="50"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Walker_Circle.png/599px-Walker_Circle.png"
                            aspect-ratio="1.7"
                          ></v-img>
                        </v-col>
                        <v-col cols="8">
                          <b class="subtitle-1">Adenildo Silva</b>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-content>
                      <h2 class="subtitle-2">Casa de 4 quartos com piscina</h2>
                      <b>
                        <u>R$ 1.455.000</u>
                      </b>
                      250m2 2
                      <v-img
                        class="mt-2"
                        height="100"
                        width="200"
                        src="https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2017/06/main/pool-house-intro-sun-0717.jpg"
                      ></v-img>
                      <v-icon>mdi-single_bed</v-icon>
                    </v-content>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card-text>
        
        <v-layout>
          <v-row v-for="(anuncios, i) in anuncios" :key=i>
            {{ anuncios }}
          </v-row>
        </v-layout>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { fireDb } from '~/plugins/firebase.js'
export default {
  data () {},
  layout: 'default',
  computed: {
    ...mapGetters('modules/anuncios', ['anuncios'])
  },
  methods: {}
}
</script>
