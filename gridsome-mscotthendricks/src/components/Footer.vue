<template lang="html">
  <div>
    <footer>
      <Nav></Nav>
      <!-- Footer main -->
      <section class="ft-main">
        <div class="ft-main-item">
          <!-- <h2 class="ft-title">About</h2> -->
          <ul>
            <li><g-link class to="/">Home</g-link></li>
            <li><g-link class to="/archive/">Archive</g-link></li>
            <li><g-link class to="/blog#recent">Recent Posts</g-link></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <!-- <h2 class="ft-title">Work</h2> -->
          <ul>
            <li><g-link class to="/resume/">Resume</g-link></li>
            <li><g-link class to="/work/"> Work Examples</g-link></li>
            <li><g-link class to="/posts/"> Blog</g-link></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <!-- <h2 class="ft-title">Contact</h2> -->
          <ul>
            <li>
              <g-link class to="/contact#get-in-touch">Get in touch</g-link>
            </li>
            <li>
              <g-link class to="/contact#schedule-a-call"
                >Schedule a call</g-link
              >
            </li>
            <li><g-link class to="/contact#donate">Donate</g-link></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Stay Updated</h2>
          <p>Subscribe to my newsletter to get our latest news.</p>
          <iframe
            src="https://matthewhendricks.substack.com/embed"
            width="480"
            height="320"
            style="border: 1px solid #eee; background: white"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </section>

      <!-- Footer social -->
      <section class="ft-social">
        <div class="ft-social-list">
          <SocialLinks></SocialLinks>
        </div>
      </section>

      <!-- Footer legal -->
      <section class="ft-legal">
        <ul class="ft-legal-list">
          <li>
            Marked-up with
            <a href="//daringfireball.net/projects/markdown/">Markdown</a>
          </li>
          <li>Powered by <a href="//gridsome.org/">Gridsome</a></li>
          <li>Built with <a href="//vue.js/">Vue.js</a></li>
          <li>Copyright &copy; {{ new Date().getFullYear() }}.</li>
        </ul>
      </section>
    </footer>
  </div>
</template>

<script lang="js">





import Nav from "~/components/Nav.vue";
import SocialLinks from "~/components/SocialLinks.vue";



  export default  {
    name: 'Footer',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    components: {
    Nav,
    SocialLinks
  },


}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding-left: 0;
}
footer {
  line-height: 1.5;
  max-width: var(--content-width);
}
footer a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Footer main */
.ft-main {
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
}
@media only screen and (min-width: 29.8125rem /* 477px */) {
  .ft-main {
    justify-content: space-evenly;
  }
}
@media only screen and (min-width: 77.5rem /* 1240px */) {
  .ft-main {
    justify-content: space-evenly;
  }
}
.ft-main-item {
  padding: 1.25rem;
  min-width: 12.5rem;
}

/* Footer main | Newsletter form */
iframe {
  display: flex;
  flex-wrap: wrap;
}

/* Footer social */
.ft-social {
  padding: 0 1.875rem 1.25rem;
}
.ft-social-list {
  display: flex;
  justify-content: center;
  border-top: 1px var(--bg-code) solid;
  padding-top: 1.25rem;
}

/* Footer legal */
.ft-legal {
  padding: 0.9375rem 1.875rem;
  background-color: #000;
}
.ft-legal-list {
  padding: calc(var(--space) * 2);
  text-align: center;
  font-weight: 500;
  font-size: 0.8em;

  margin-top: var(--space);

  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.ft-legal-list li {
  margin: 0.125rem 0.625rem;
  white-space: nowrap;
}
/* one before the last child */
.ft-legal-list li:nth-last-child(2) {
  flex: 1;
}
</style>
