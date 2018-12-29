<template>
  <transition v-bind:name="transitionName">
    <div 
      class="block" 
      v-bind:style="{ transform: `translateX(${translation})` }"
      v-bind:class="classObj"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { getRandom } from "../../utils";
export default {
  name: "AboutBlock",
  
  props: {
    even: Boolean
  },

  computed: {
    translation() {
      return (this.even ? getRandom(0, 10) : -getRandom(0, 10)) + "%";
    },

    classObj() {
      return {
        "block--even": this.even,
        "block--odd": !this.even
      }
    },

    transitionName() {
      return this.even ? "fadeIn--left" : "fadeIn--right";
    }
  }
}
</script>

<style lang="sass" scoped>

.block {
  margin: auto;
  width: 80%;
  min-width: 220px;
  max-width: 700px;
  margin-top: 50px;
  opacity: 1;
  transition: all 0.6s;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  text-shadow: 0 0 10px black;

  @media(min-width: 480px) {
    padding: 40px 80px;
  }
}

  .block--even {
    align-items: flex-end;
    background: #5D8E92;
  }

  .block--odd {
    background: rgb(60, 115, 155);
  }

  .fadeIn--right-enter {
    opacity: 0;
    transform: translate(300px, 0)!important;
  }

  .fadeIn--left-enter {
    opacity: 0;
    transform: translate(-300px, 0)!important;
  }

  .fadeIn--right-leave-active, .fadeIn--left-leave-active {
    opacity: 0;
  }
</style>

