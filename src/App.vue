<template>
  <div>
    <h1>Spencer Brimley</h1>
    <div class="portraitFrame">
      <portrait-block />
    </div>
    <div class="links">
      <a v-on:click="scrollTo(370)">About</a>
      <a  v-on:click="scrollTo('projects')">Projects</a>
      <a v-on:click="toggleMenu">Contact</a>
    </div>
    <about-block v-if="visibleBlocks.blockOne" v-bind:even="false">
      <p>
        Hello! My name is Spencer, I had my first experience with coding as a kid
        playing Morrowind and messing around with its modding engine.
      </p>
      <p>
        I didn't know it at the time, but that first experience led me to thinking that 
        coding wasn't as arcane of a topic as I had previously believed, and so my journey began.
      </p>
    </about-block>
    <about-block v-if="visibleBlocks.blockTwo" v-bind:even="true">
      <p>
        After high school, I didn't quite have a clear idea of what I wanted to do, so while
        working a number of odd jobs from Circle K to alarm installation, I decided to look into 
        programming again.
      </p>
      <p>
        My first real programming language was Python, and although I didn't produce anything particularly
        impressive, I made a number of fun little games and learned the basics of software development.
      </p>
    </about-block>
    <about-block v-if="visibleBlocks.blockThree" v-bind:even="false">
      <p>
        After saving a bit, I decided to head back to school and started working on a Bachelor's 
        Degree. After a year though, I got frustrated as it seemed like my professors were essentially telling us
        which books to read, and how to practice what we learned. That seemed like something I could do on my own.
      </p>
      <p>
        With this in mind, and a strong desire to avoid getting deep into debt. I decided to buckle down and learn web
        design on my own.
      </p>
    </about-block>
    <about-block v-if="visibleBlocks.blockFour" v-bind:even="true">
      <p>
        I began by learning SQL and PHP through sites like Udemy and CodeFoundry, but I quickly
        found myself switching from PHP to Node.JS after reading a bit about their performance. Plus,
        I was learning Javascript on the front-end already so I figured it would be better to be really
        good at one thing than okay at two.
      </p>
      <p>
        Since then I've been working on my skills by studying and building. I created a number of usable
        apps for my father, who runs a small business, and desiging several webpages for him, his clients,
        and a few projects of my own.
      </p>
    </about-block>
    <about-block v-if="visibleBlocks.blockFive" v-bind:even="false">
      <p>
        Recently, I decided to strike it out on my own as a developer and that's where I am now.
        I've begun to start incorporating AWS services and Docker in most of the apps I develop 
        now for the power they bring. This site was built with Vue, which is pretty new for me,
        and you can check out the source code at 
        <a target="_blank" href="https://github.com/Sjbrimley26/spencerb.org">Github</a>
        if you'd like.
      </p>
      <p>
        Thanks for reading a little bit about me and let me know if you'd like to get in touch
        for a project or if you have any questions / comments about this site or any of my projects.
        Have a good day!
      </p>
    </about-block>
    <project-block id="projects" v-if="visibleBlocks.projectBlock" />
    <contact-block id="contacts" v-if="visibleBlocks.contactBlock" v-bind:closeMenu="toggleMenu" />
    <div class="externalLinks" v-bind:style="{ top: contactTop + 'px' }">
      <a href="https://linkedin.com/in/spencer-brimley-026673154/" target="_blank">
        <img v-bind:src="linkedinIcon">
      </a>
      <a href="https://github.com/Sjbrimley26" target="_blank">
        <img v-bind:src="githubIcon">
      </a>
      <a href="https://www.facebook.com/spencer.brimley" target="_blank">
        <img v-bind:src="facebookIcon">
      </a>
    </div>
  </div>
</template>

<script>
import { facebookIcon, linkedinIcon, githubIcon } from "./assets/images";

import {
  PortraitBlock,
  AboutBlock,
  ProjectBlock,
  ContactBlock
} from "./assets/components";

import { isBetween } from "./utils";
import debounce from "lodash/debounce";

export default {
  name: "App",

  components: {
    PortraitBlock,
    AboutBlock,
    ProjectBlock,
    ContactBlock
  },

  data() {
    return {
      bodyRef: document.getElementsByTagName("body")[0],

      visibleBlocks: {
        blockOne: false,
        blockTwo: false,
        blockThree: false,
        blockFour: false,
        blockFive: false,
        projectBlock: false,
        contactBlock: false
      },

      facebookIcon: facebookIcon,
      linkedinIcon: linkedinIcon,
      githubIcon: githubIcon,

      contactTop: window.innerHeight - 120
    };
  },

  methods: {
    onScroll() {
      this.contactTop = window.scrollY + (window.innerHeight - 120);

      const windowInRange = isBetween(window.scrollY);

      const { visibleBlocks } = this;

      if (windowInRange(100, 700)) {
        visibleBlocks.blockOne = true;
      } else if (windowInRange(0, 100)) {
        visibleBlocks.blockOne = false;
      }

      if (windowInRange(400, 1000)) {
        visibleBlocks.blockTwo = true;
      } else if (windowInRange(0, 400)) {
        visibleBlocks.blockTwo = false;
      }

      if (windowInRange(700, 1300)) {
        visibleBlocks.blockThree = true;
      } else if (windowInRange(0, 700)) {
        visibleBlocks.blockThree = false;
      }

      if (windowInRange(900, 1500)) {
        visibleBlocks.blockFour = true;
      } else if (windowInRange(0, 900)) {
        visibleBlocks.blockFour = false;
      }

      if (windowInRange(1200, 1800)) {
        visibleBlocks.blockFive = true;
      } else if (windowInRange(0, 1200)) {
        visibleBlocks.blockFive = false;
      }

      if (windowInRange(1500, 2100)) {
        visibleBlocks.projectBlock = true;
      } else if (windowInRange(0, 1500)) {
        visibleBlocks.projectBlock = false;
      }
    },

    scrollTo(yOrId) {
      const behavior = { behavior: "smooth" };
      if (isNaN(yOrId)) {
        const projects = document.getElementById(yOrId);
        if (projects) {
          projects.scrollIntoView(behavior);
        } else {
          this.scrollTo(2300);
        }
      } else {
        return window.scroll({
          top: yOrId,
          x: 0,
          ...behavior
        });
      }
    },

    toggleMenu() {
      this.visibleBlocks.contactBlock = !this.visibleBlocks.contactBlock;
      this.bodyRef.classList.toggle("noScroll");
    }

  },

  created() {
    window.addEventListener("scroll", this.onScroll);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  },

  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="sass" scoped>
  $darkteal: rgb(60, 100, 120);
  $darkerteal: rgb(30, 70, 90);

  h1 {
    font-family: Satisfy, cursive;
    padding: 0 20px;
    margin-left: 20px;
    top: 20px;
    background: white;
    width: 240px;
    border-radius: 20px;
    box-shadow: 0 2px 10px gray;
    color: $darkteal;
  }

  .portraitFrame {
    height: 290px;
    width: 290px;
    filter: drop-shadow(0 0 10px rgb(80, 110, 150));
    border-radius: 50%;
    margin: auto;
  }

  .links {
    position: sticky;
    top: 20px;
    min-width: 290px;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    background: rgba(220, 240, 255, 0.8);
    box-shadow: 0 6px 6px $darkteal;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    font-size: 1.8em;
    font-family: Satisfy, cursive;
    color: $darkerteal;
    font-variant: small-caps;
    z-index: 10;


    a {
      cursor: pointer;
      color: $darkerteal;
    } 

    @media(min-width: 500px) {
      max-width: 480px;
    }
  }

  a {
    color: white;
  }

  p {
    font-family: Neuton, Arial;
    font-size: 0.9em;
    width: 85%;

    @media(min-width: 480px) {
      font-size: 1em;
    }

    @media(min-width: 700px) {
      font-size: 1.1em;
    }
  }

  .externalLinks {
    width: 290px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    position: absolute;
    left: calc(50% - 145px);

    a img {
      height: 64px;
      width: 64px;
    }
  }

</style>

