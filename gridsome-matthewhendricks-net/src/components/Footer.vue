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
            height="320"
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

      <aside>
        <div class="wrap">
          <label class="close" for="toggle">
            <span class="cool">😃</span></label
          >

          <input type="checkbox" id="toggle" class="visually-hidden" />

          <div class="control-me feedback-pop-up small">
            <h2>Is it ok for you?</h2>
            <!---->
            <ul class="choices mb-1">
              <li><g-link to="/feedback#one-star">⭐</g-link></li>
              <li><g-link to="/feedback#two-stars">⭐⭐</g-link></li>
              <li><g-link to="/feedback#three-stars">⭐⭐⭐</g-link></li>
            </ul>
            <p class="mb-0 mt-a small">
              <a
                href="https://calendly.com/matthewhendricks/website-demo"
                target="_blank"
                rel="noopener noreferrer nofollow"
                >Book a tech review</a
              >
              directly
            </p>
          </div>
        </div>
      </aside>
      <!-- Footer legal -->
      <section class="ft-legal smaller">
        <span>Marked-up using and made awesome with:</span>
        <ul class="ft-legal-list">
          <li>
            <a href="//daringfireball.net/projects/markdown/">Markdown</a>
            <img class="logo" src="/markdown-logo.svg" />
          </li>
          <li>
            <a href="//gridsome.org/">Gridsome</a>
            <img class="logo" src="/gridsome-logo.svg" />
          </li>
          <li>
            <a href="//vue.js/">Vue.js</a>
            <img class="logo" src="/vuejs-logo.svg" />
          </li>
          <li>
            <a href="//graphql.org">GraphQL</a>
            <img class="logo" src="/graphql-logo.svg" />
          </li>
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
.logo {
  height: 1rem;
  padding: 0.25rem;
  margin: 0.25rem;
}
aside {
  position: absolute;

  right: 10%;
}
.control-me::before {
  content: "Feedback";
  word-wrap: break-word;
  // font-size: 200%;
}
#toggle:checked ~ .control-me::before {
  content: "Leave feedback";
}

#toggle:checked ~ * * {
  visibility: hidden;
}

#toggle ~ .control-me {
}

#toggle:checked ~ .control-me {
  opacity: 0.5;
  background: transparent;
}

label {
  z-index: 1000;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: var(--link-color);
}

.visually-hidden {
  position: absolute;
  left: -100vw;

  /* Note, you may want to position the checkbox over top the label and set the opacity to zero instead. It can be better for accessibilty on some touch devices for discoverability. */
}

.close {
  cursor: pointer;

  position: absolute;
  text-align: right;
  right: 10%;
}

.choices li {
  text-decoration: none;
  padding: calc(var(--space) / 4);
  color: var(--bg-color);
  background-color: var(--bg-code);
}
.choices {
  word-break: break-word;
  text-align: center;
  width: 66%;
  margin: auto;
  list-style-type: none;
}

// no feedback on feedback page (sorry folks)
.feedback .feedback-pop-up,
.feedback .cool {
  visibility: hidden;
}

.feedback-pop-up {
  background-color: var(--highlight-color);
}

ul {
  list-style: none;
  padding-left: 0;
}
footer {
  line-height: 1.5;
  max-width: var(--content-width);
  margin: auto;
}
footer a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* Footer main */
.ft-main {
  padding: var(--space);
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
  // padding: 1.25rem;
  // min-width: 12.5rem;
  font-size: small;
}

/* Footer main | Newsletter form */
iframe {
  display: flex;
  flex-wrap: wrap;
}

/* Footer social */

.ft-social-list {
  display: flex;
  justify-content: center;
  border-top: 1px var(--bg-code) solid;
  padding-top: 1.25rem;
}

/* Footer legal */
.ft-legal,
.ft-social {
  padding: 0.9375rem 1.875rem;
  background-color: #000;
}
.ft-legal-list {
  text-align: left;
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
