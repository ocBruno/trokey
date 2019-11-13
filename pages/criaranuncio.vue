<template>
<v-container class="grey lighten-3">
              <v-row>
                <v-col>
                  <h1 class="display-5 text-center mb-5">insira seu anuncio</h1>
                </v-col>
              </v-row>
<v-row align-content="center">
  <v-col>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-row>
    <v-col>
      <v-text-field
        v-model="titulo"
        :counter="10"
        :rules="anuncioTituloRules"
        label="Titulo do anuncio"
        required
      ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="anuncioMetragemPrivativa"
        :counter="10"
        :rules="anuncioMetragemPrivativaRules"
        label="m2 privativo"
        required
      ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="anuncioMetragemTotal"
        :counter="10"
        :rules="anuncioMetragemTotalRules"
        label="m2 total"
        required
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Tipo"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Quartos"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Suites"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Banheiros"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Vagas"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Andar"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Idade"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="1">
        <v-select
          :items="items"
          label="Sol"
          dense
          outlined
        ></v-select>
      </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6">
      Area privativa:
      <v-row>
        <v-col cols="12" sm="6">
        <v-checkbox 
        :disabled="disabled"
        :readonly="readonly"
        :indeterminate="indeterminate"
        :error="error"
        :success="success"
        :color="color"
        label="Área de serviço"
      ></v-checkbox>
      </v-col>
        <v-col cols="12" sm="6">
        <v-checkbox 
        :disabled="disabled"
        :readonly="readonly"
        :indeterminate="indeterminate"
        :error="error"
        :success="success"
        :color="color"
        label="Eletrodomesticos"
      ></v-checkbox>
      </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Mobiliado"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Aquecimento a gás"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Depósito"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Churrasqueira"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Varanda"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Sacada com churrasqueira"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Piso"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Jardim"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Ar condicionado"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Permite animais"
        ></v-checkbox>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="6">
      Area privativa:
      <v-row>
        <v-col cols="12" sm="6">
        <v-checkbox 
        :disabled="disabled"
        :readonly="readonly"
        :indeterminate="indeterminate"
        :error="error"
        :success="success"
        :color="color"
        label="Condominio club"
      ></v-checkbox>
      </v-col>
        <v-col cols="12" sm="6">
        <v-checkbox 
        :disabled="disabled"
        :readonly="readonly"
        :indeterminate="indeterminate"
        :error="error"
        :success="success"
        :color="color"
        label="Brinquedoteca"
      ></v-checkbox>
      </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Quadra de futebol"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Área verde"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Academia"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Permite animais"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Salão de festas"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Aluguel por temporada"
        ></v-checkbox>
        </v-col>
      </v-row>
            <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Área gourmet"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Espaço pet"
        ></v-checkbox>
        </v-col>
      </v-row>
       <v-row>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Salão de jogos"
        ></v-checkbox>
        </v-col>
          <v-col cols="12" sm="6">
          <v-checkbox 
          :disabled="disabled"
          :readonly="readonly"
          :indeterminate="indeterminate"
          :error="error"
          :success="success"
          :color="color"
          label="Portaria 24h"
        ></v-checkbox>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
    <v-btn
      color="success"
      @click="writeToFirestore"
      :disabled="writeSuccessful"
      v-if="!writeSucessful"
    >
      Write to firestore
    </v-btn>
    <v-layout>{{text}}</v-layout>
    <v-layout>here</v-layout>
  </v-form>
  </v-col>
</v-row>
</v-container>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
import { mapGetters } from 'vuex'

export default {
    data: () => ({
      valid: true,
      name: '',
      anuncioTituloRules: [
        v => !!v || 'É necessario inserir um titulo para o anuncio',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      anuncioMetragemPrivativaRules: [
        v => !!v || 'É necessario inserir a metragem do imovel.',
      ],
      anuncioMetragemTotalRules: [
        v => !!v || 'É necessario inserir a metragem do imovel.',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      readSuccessful: false,
      text: "",
      writeSuccessful: false,
      userLoggedIn: false
    }),
  middleware: 'authenticated',
  layout: 'authenticated',
  computed: {
    ...mapGetters('modules/anuncios', ['anuncios'])
  },
  async asyncData({app, params, error}) {
  const ref = fireDb.collection("test").doc("test")
  let snap
  try {
    snap = await ref.get()
  } catch (e) {
    // TODO: error handling
    console.error(e)
  }
  return {
    text: snap.data().text
  }
},
  methods: {
    async writeToFirestore () {
      const ref = fireDb.collection('test').doc('test')
      const document = {
        text: 'This is a test message.'
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  }
}
</script>
