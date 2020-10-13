<template lang="html">
  <div>
    <strong>Download my CV & resume</strong>
    <div class="resume-buttons" v-if="!showPage">
      
      <br>
      <a class="link-button resume-buttons__links" href="/Matthew_Hendricks-CV.pdf">
        <button>
          <font-awesome class="resume-buttons__icons" :icon="['fa', 'file-pdf']" alt="PDF Formatted Resume" />
        </button>
      </a>
       
       <a class="link-button resume-buttons__links" href="/Matthew_Hendricks-CV.docx">
       <button>
       <font-awesome class="resume-buttons__icons" :icon="['fa', 'file-word']" alt="Word Formatted Resume" />
       </button>
      </a>

        <a class="link-button resume-buttons__links" href="/Matthew_Hendricks-CV.md">
       <button>
       <font-awesome class="resume-buttons__icons" :icon="['fab', 'markdown']" alt="Markdown Formatted Resume" />
       </button>
      </a>
    </div>
    <div v-else-if="showPage">
      <g-link class="resume-buttons__links" to="/resume/">
        <button>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="portrait"
            class="svg-inline--fa fa-portrait fa-w-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"
            ></path>
          </svg>
          See my resume
        </button>
      </g-link>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'resume-button',
    props: ["showPage"],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">

.resume-buttons {
    
  &__links {
    padding: 1rem;
  }
    &__icons {
      
    }
}
</style>
