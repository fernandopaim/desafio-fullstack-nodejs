<template>
  <div id="body">
      <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-8 col-lg-6 text-center">
                    <v-form @submit.prevent="sumitForm">
                        <v-row>
                            <div class="col-12 col-sm-6">
                                <b-form-group
                                    label="Nome:"
                                    label-for="name"
                                    description="Informe seu nome">
                                    <b-form-input
                                        id="name"
                                        v-model="person.name" label="Nome"
                                        name="name" autocomplete="off"
                                        required />
                                </b-form-group>
                            </div>
                            <div class="col-12 col-sm-6">
                                <b-form-group
                                    :label="`${person.idType.toUpperCase() || 'CPF/CNPJ'}:`"
                                    label-for="cpf-cnpj"
                                    description="Informe seu CPF ou CNPJ">
                                    <b-form-input
                                        id="cpf-cnpj"
                                        v-model="person.id"
                                        v-mask="['###.###.###-##', '##.###.###/####-##']"
                                        :state="person.isValidId" label="CPF"
                                        type="tel" name="cpf" autocomplete="off"
                                        required @blur="validate" />
                                </b-form-group>
                            </div>
                            <div class="col-12">
                                <div class="row justify-content-center">
                                    <b-button variant="warning mr-5" @click="person.isValidId=null">Limpar</b-button>
                                    <b-button variant="success">Enviar</b-button>
                                </div>
                            </div>
                        </v-row>
                    </v-form>
            </div>
        </div>

        <div v-show="load" class="overlay">
            <div class="container-msg">
                <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Carregando...</span>
                </div>
                <h3 class="mt-3">Buscando informações...</h3>
            </div>
        </div>
  </div>
</div></template>

<script>
import moment from 'moment'
import 'moment/locale/pt'
import { mask } from 'vue-the-mask'


export default {
    name: 'Body',
    components: { },
    directives: { mask },
    data: () => ({
        person: {
            name: '',
            id: '',
            idType: '',
            isValidId: null,
        },
        load: false,
    }),
    mounted() {},
    methods: {
        submitForm: function(event) {

        },
        validate: function(event) {
            this.load = true

            if (/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(this.person.id)) {
                this.person.idType = 'cpf'
            } else if (/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(this.person.id)) {
                this.person.idType = 'cnpj'
            } else {
                this.person.idType = ''
                this.person.isValidId = false
                this.load = false
                return
            }

            let unformattedId = this.person.id.replace(/\D/g, '')

            fetch(`${process.env.VUE_APP_API_URL}/validation?${this.person.idType}=${unformattedId}`, {
                method: 'POST',
            }).then((response) => {
                response.json().then((data) => {
                    if (data.success)
                        this.person.isValidId = true
                    else
                        this.person.isValidId = false
                })
                this.load = false
            }).catch(error => {
                this.load = false
            })
        },
    },
}
</script>

<style lang="sass" scoped>
    #body
        margin-top: 20px

    .overlay
        position: fixed
        width: 100%
        height: 100%
        top: 0
        left: 0
        text-align: center
        background: rgba(#000, .5)
        z-index: 9999

        > .container-msg
            display: inline-block
            position: relative
            top: 50%
            padding: 30px
            border-radius: 10px
            background: #FFF
            transform: translateY(-50%)

</style>
