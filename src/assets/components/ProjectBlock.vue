<template>
  <transition>
    <div>
      <h2>Projects</h2>
      <div class="projectBlock">
        <div class="projectImage" 
          v-bind:style="{ backgroundImage: `url('${projects[currentProject].image}')` }"
          v-on:click="navTo(projects[currentProject].link)"
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
import { 
  pinterestPic,
  fairRentalsPic,
  uploaderPic,
  rougelikePic
} from "../images";

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
          image: pinterestPic,
          link: "https://github.com/chingu-voyage4/Bears-Team-26" 
        },
        {
          description: `During another Chingu project, our team created an original
            apartment review site. It features authentication, comments, and Google Maps
            integration. This was my first Chingu project and fortunately one of my team
            members was incredibly helpful in showing me what to do and I was able to start 
            contributing significantly once the project really got going.`,
          image: fairRentalsPic,
          link: "https://github.com/chingu-voyage3/fair-rentals"
        },
        {
          description: `While learning Docker, I decided to make a server for uploading and downloading
            all sorts of files. Using Docker compose, I set up a main api server which pipes requests
            to replicated download / upload servers, allowing fast, non-blocking connections. Will eventually incorporate
            Nginx to serve the static files.`,
          image: uploaderPic,
          link: "https://github.com/Sjbrimley26/uploader-docker"
        },
        {
          image: rougelikePic,
          link: "https://github.com/Sjbrimley26/redRouge",
          description: `As a side project, I'm working on a rougelike game. Although
            it is still pretty far from playable, working on it gave me the opportunity to study / implement
            a number of previously unknown algorithms / data structures. One aspect I'm really proud of was originally the levels took anywhere from 8 - 40 seconds to load and I eventually
            got it to under one second on my desktop.`
        }
      ],

      currentProject: 0
    }
  },

  methods: {
    navTo(url) {
      window.open(url);
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
    font-family: "Neuton", Arial;
    font-size: calc(0.6em + 100vw / 110);
    display: flex;
    align-items: center;

    @media(min-width: 1000px) {
      font-size: 1.2em;
    }
  }

  div .projectImage {
    border-radius: 4px;
    border: 10px solid white;
    box-shadow: 0 0 10px gray;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
</style>

