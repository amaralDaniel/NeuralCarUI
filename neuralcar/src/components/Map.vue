<template>
    <div>
      <map
        :center="center"
        :zoom="7"
      >
        <marker
          v-for="m in markers"
          :position.sync="m.position"
          :clickable="true"
          :draggable="true"
          @g-click="center=m.position"
        ></marker>
      </map>
    </div>
</template>

<script>
  import {load, Map, Marker} from 'vue-google-maps'
  load('AIzaSyDRKZlPngAXUzfn6KmiOS4p3y43MoW0jIk')
  export default {
    components: {
      Map,
      Marker
    },
    name: 'map',
    data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    }
  }
</script>

<style scoped>

</style>
