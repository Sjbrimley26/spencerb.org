<template>
  <transition>
    <div>
      <h2>Projects</h2>
      <div class="projectBlock">
        <div class="projectImage" 
          v-bind:style="{ backgroundImage: `url('${projects[currentProject].image}')` }" 
        >
        </div>
        <div class="description">
          <p>{{ projects[currentProject].description }}</p>
        </div>
        <div class="scrollbar">
          <div
            v-for="(project, key) in projects"
            :key="key"
            v-bind:class="{ selected: project === projects[currentProject] }"
            v-on:click="currentProject = key"
          ></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { pinterestPic, fairRentalsPic } from "../images";
export default {
  name: "ProjectBlock",
  data() {
    return {
      projects: [
        {
          description: `While working with a program called Chingu, I was teamed up with
            three other developers and we challenged ourselves to create a clone of Pinterest.
            Although the project is definitely still in the MVP phase, I'm proud of what we 
            accomplished with limited skills and time, and I definitely learned a ton from the 
            experience.`,
          image: pinterestPic
        },
        {
          description: `During another Chingu project, our team created a somewhat original
            apartment review site. It features authentication, comments, and Google Maps
            integration. This was my first Chingu project and fortunately one of my team
            members was incredibly helpful in showing me what to do and I was able to start 
            contributing significantly once the project really got going.`,
          image: fairRentalsPic
        }
      ],

      currentProject: 0
    }
  }
}
</script>

<style lang="sass" scoped>
  h2 {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-size: 2.5em;
    font-family: Satisfy, Arial;
    color: rgb(30, 70, 90);
    text-decoration: underline;
  }

  .projectBlock {
    box-shadow: 0 0 35px lightgray;
    position: relative;
    width: 80%;
    height: 580px;
    min-width: 290px;
    margin: auto;
    margin-top: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    padding-bottom: 40px;
    flex-direction: column;

    .scrollbar {
      height: 20px;
      position: absolute;
      width: 275px;
      margin: auto;
      top: calc(100% - 40px);
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      background: rgba(230, 240, 245, 0.5);

      div {
        height: 20px;
        width: 20px;
        background: rgb(220, 220, 255);
        border-radius: 50%;
        cursor: pointer;
      }

      .selected {
        background: rgb(100, 110, 130);
      }
    }

    & div {
      background: rgb(230, 240, 245);
      height: 45%;
      width: 85%;
    }
    

    @media(min-width: 700px) {
      max-width: 1000px;
      flex-direction: row;
      height: 400px;

      & div {
        height: 85%;
        width: 45%;
      }
    }
  }

  .description {
    padding: 0 20px;
    font-family: Neuton;
    font-size: 0.85em;

    @media(min-width: 460px) {
      font-size: 1em;
    }
  }

  div .projectImage {
    border-radius: 4px;
    border: 10px solid white;
    box-shadow: 0 0 10px gray;
    background-size: cover;
    background-position: center;
  }
</style>

