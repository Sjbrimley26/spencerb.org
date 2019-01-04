<template>
  <div class="shader" v-bind:style="{ top: `${top}` }" v-on:click="closeMenu">
    <div class="modal" v-on:click.stop >
      <form action="https://formspree.io/sjbrimley26@live.com" method="POST">
        <span>
          <label for="name">Name:</label>
          <input name="name" type="text" required>
        </span>
        <span>
          <label for="_replyto">Email:</label>
          <input type="email" name="_replyto" required>
        </span>
        <span>
          <label for="_subject">Subject:</label>
          <input type="text" name="_subject" required>
        </span>
        <span>
          <input type="submit">
        </span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBlock",
  data() {
    return {
      top: Math.floor(window.scrollY)  + "px"
    }
  },
  props: {
    closeMenu: Function
  }
}
</script>

<style lang="sass" scoped>
  .shader {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
    position: absolute;
  }

  .modal {
    position: absolute;
    height: 360px;
    min-width: 290px;
    width: 50%;
    max-width: 700px;
    left: calc(50% - 145px);
    top: calc(50% - 180px);
    padding: 35px;
    left: calc(50% - 145px);
    background: lightgray;
    border-radius: 15px;

    @media(min-width: 580px) {
      left: 25%;
    }

    @media(min-width: 1400px) {
      left: calc(50% - 350px);
    }
  }

  .modal form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }

  form span {
    display: block;
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 2px;

    & label {
      display: inline-block;
      width: 60px;
    }

    & input, & label {
      font-family: "Neuton", Arial;
    }

    & input:not([type="submit"]) {
      width: calc(100% - 65px);
    }

    & input[type="submit"] {
      padding: 10px;
      border-radius: 8px;
      background: white;
    }

    &:last-child {
      border: none;
      width: auto;
    }
  }
</style>
