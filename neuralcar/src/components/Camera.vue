<template>
  <div class="camera-modal">
    <video ref="video" class="camera-stream"/>
    <v-divider class="my-3"></v-divider>
    <div class="camera-modal-container">
            <span @click="capture">
              <i class="material-icons camera">camera</i>
            </span>
      <span @click="cancel">
              <i class="material-icons cancel">cancel</i>
            </span>
    </div>
  </div>
</template>

<script>
  import { db, storageRef } from '../main'

  export default {
    name: 'camera',
    data () {
      return {
        mediaStream: null
      }
    },
    mounted () {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(mediaStream => {
          this.mediaStream = mediaStream
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error))
    },
    methods: {
      capture () {
        var _self = this
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
        const imageCapture = new window.ImageCapture(mediaStreamTrack)
        return imageCapture.takePhoto().then(blob => {
          const createdAt = new Date()
          const name = Math.random().toString(36).substring(7)
          var image = ''
          var picturesRef = storageRef.child('pictures/' + name)
          picturesRef.put(blob).then(function (response) {
            console.log(response)
            image = response.metadata.fullPath
            db.collection('pictures').add({name, image, createdAt})
            _self.$router.push({ name: 'info', params: { name: name } })
          })
        })
      },
      cancel () {
        this.$router.go(-1)
      }
    },
    destroyed () {
      const tracks = this.mediaStream.getTracks()
      tracks.map(track => track.stop())
    }
  }
</script>

<style scoped>
  .camera-modal {
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: white;
    z-index: 10;
  }
  .camera-stream {
    width: 50%;
    max-height: 100%;
  }
  .camera-modal-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 10px;
  }


  .camera {
    color: rgb(102,204,171);
    font-size: 10vh;
  }

  .cancel {
    color: dimgrey;
    font-size: 10vh;
  }

  @media only screen and (max-width: 800px) {
    .camera-stream {
      width: 100%;
      max-height: 90%;
    }
  }
</style>
