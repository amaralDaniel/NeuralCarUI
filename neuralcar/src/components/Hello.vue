<template>
  <v-container>
    <v-jumbotron color=" lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to <span class="carzam-words">Carzam</span></h3>
            <span class="subheading">To get information about a car, take a picture of it and we will deal with it!</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Click below to start!</div>
            <router-link to="/camera">
              <v-btn large class="mx-0 button-camera">
                <i class="material-icons">camera_alt</i>
              </v-btn>
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

  </v-container>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.button-camera {
  background-color: rgb(102,204,171);
}

@media only screen and (max-width: 800px) {
  v-jumbotron v-container {
    padding: 2px;
  }
}
  .jumbotron {
    height: 450px !important;
  }

  .carzam-words {
    font-weight: 700;
  }
</style>
