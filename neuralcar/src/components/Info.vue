<template>
  <v-container class="info-container">
    <gauge v-if="loading" class="loader"></gauge>
    <v-layout column v-if="!loading && foundCar">
      <article >
        <img class="picture-article" :src="picture">
      </article>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>Make</v-subheader>
          </v-flex>
          <v-flex xs6>
            <span class="headline">{{make}}</span>
          </v-flex>
          <v-flex xs6>
            <v-subheader>Model</v-subheader>
          </v-flex>
          <v-flex xs6>
            <span class="headline">{{model}}</span>
          </v-flex>
          <v-flex xs6>
            <v-subheader>Price</v-subheader>
          </v-flex>
          <v-flex xs6>
            <span class="headline">{{price}}€</span>
          </v-flex>
        </v-layout>
      </v-container>
      <!--<v-layout row class="my-4">-->
        <!--<router-link to="/ads">-->
          <!--<v-btn>Go To Ads</v-btn>-->
        <!--</router-link>-->
        <!--<router-link to="/map">-->
          <!--<v-btn>See nearby dealership</v-btn>-->
        <!--</router-link>-->
      <!--</v-layout>-->
      <v-btn @click="retakePhoto">
        <span class="body-2">Take another photo</span>
      </v-btn>
    </v-layout>

      <v-container fill-height v-if="!loading && !foundCar">
        <v-layout align-center>
          <v-flex>
            <p class="display-1">Sorry, the car was not recognized. Please, try again.</p>
            <v-btn @click="retakePhoto">
              <span class="body-2">Take another photo</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>

  </v-container>
</template>

<script>
  import { storageRef } from '../main'
  import { Gauge } from 'vue-loading-spinner'
  import axios from 'axios'

  export default {
    name: 'info',
    components: {
      Gauge
    },
    data () {
      return {
        name: this.$route.params.name,
        subitems: ['Specifications'],
        make: '',
        model: '',
        price: '',
        picture: '',
        loading: true,
        whichCar: null,
        foundCar: false,
        infobox: null
      }
    },
    beforeMount () {
      var _self = this
      storageRef.child('pictures/' + _self.name).getDownloadURL().then(function (url) {
        _self.picture = url
        axios.post('https://carneuro.herokuapp.com/recognize', {
          url: url
        }).then(function (response) {
          if (response.status === 200) {
            _self.whichCar = response.data
            if (_self.whichCar.accuracy >= 0.75) {
              _self.foundCar = true
              _self.make = _self.whichCar.brand
              _self.model = _self.whichCar.model
              if (_self.model === 'Corsa') {
                _self.price = 1000
              }
              if (_self.model === 'NSX') {
                _self.price = 56600
              }
              if (_self.model === 'Clio IV') {
                _self.price = 1000
              }
              if (_self.model === '991 997') {
                _self.price = 53000
              }
              if (_self.model === 'MT-07') {
                _self.price = 5900
              }
              if (_self.model === '400') {
                _self.price = 1000
              }
            }
            _self.loading = false
          }
        })
      })
    },
    mounted () {
    },
    methods: {
      retakePhoto: function () {
        this.$router.push('/camera')
      }
    }
  }
</script>

<style scoped>
  li a {
    text-decoration: none;
  }

  .picture-article {
    max-width: 100%;
    max-height: 100vh;
    margin: auto;
    margin-bottom: 2vh;
    border-radius: 3px;
  }

  .info-container {
    min-height: fit-content;
    position: relative;
  }

  .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
    -webkit-transform: scale(3.5);
    -moz-transform: scale(3.5);
    -ms-transform: scale(3.5);
    -o-transform: scale(3.5);
    transform: scale(3.5);
  }

  .not-found {
    margin-top: 35%;
  }

</style>
