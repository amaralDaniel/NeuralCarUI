<template>
  <v-app>
    <header>
      <v-layout row >
        <span class="header-name display-1" v-on:click="goToHome">Carzam</span>
      </v-layout>
    </header>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="pa-3" absolute>
      <v-spacer></v-spacer>
      <div class="regular grey--text">Carzam &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import {Gauge} from 'vue-loading-spinner'
  export default {
    components: {
      Gauge
    },
    name: 'app',
    methods: {
      goToHome: function () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  color: white;
  background-color: rgb(102,204,171);
  position: relative;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.header-name {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 20px;
  font-weight: bolder;
}

</style>
