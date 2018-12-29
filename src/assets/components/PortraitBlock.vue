<template>
  <transition name="rotateY">
    <div
      mode="out-in"
      class="portrait"
      v-bind:style="{ backgroundImage: `url(${currentPortrait})` }"
      v-bind:currentPortrait="currentPortrait" 
      :key="currentPortrait" 
    >
    </div>
  </transition>
</template>

<script>
import { profilePic, elvisPic, couplePic } from "../images";

export default {
  name: "PortraitBlock",

  data() {
    return {
      portraits: [
        profilePic,
        couplePic,
        elvisPic
      ],

      currentPortrait: profilePic,

      rotation: null
    }
  },

  methods: {
    rotatePortrait() {
      const currentIndex = this.portraits.indexOf(this.currentPortrait);
      if (currentIndex < this.portraits.length - 1) {
        this.currentPortrait = this.portraits[currentIndex + 1];
      } else {
        this.currentPortrait = this.portraits[0];
      }
    }
  },

  created() {
    this.rotation = setInterval(this.rotatePortrait, 3000);
  },

  destroyed() {
    clearInterval(this.rotation);
  }
};
</script>

<style lang="sass" scoped>
  .portrait {
    height: 290px;
    width: 290px;
    border: hidden;
    border-radius: 50%;
    left: calc(50% - 145px);
    transition: all 1s;
    background-position: center;
    background-size: 290px 290px;
    position: absolute;
  }

  .rotateY-enter {
    display: none;
  }

  .rotateY-enter-active {
    transform: rotateY(-90deg);
    transform-style: preserve-3d;
  }

  .rotateY-leave-active {
    transform: rotateY(90deg);
  }
</style>

