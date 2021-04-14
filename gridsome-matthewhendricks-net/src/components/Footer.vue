<!-- @format -->

<template lang="html">
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
          <li><g-link class to="/blog/"> Blog</g-link></li>
        </ul>
      </div>
      <div class="ft-main-item">
        <!-- <h2 class="ft-title">Contact</h2> -->
        <ul>
          <li>
            <g-link class to="/contact#get-in-touch">Get in touch</g-link>
          </li>
          <li>
            <g-link class to="/contact#schedule-a-call">Schedule a call</g-link>
          </li>
          <li><g-link class to="/contact#donate">Donate</g-link></li>
        </ul>
      </div>
      <div class="ft-newsletter-item">
        <h2 class="ft-title">Stay Updated</h2>
        <p>Subscribe to my newsletter to get my latest writings.</p>
        <iframe
          src="https://matthewhendricks.substack.com/embed"
          width="100%"
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

    <!-- Footer legal -->
    <section class="ft-legal">
      <ul class="ft-tech-list smaller">
        <span>Marked-up and made awesome with:</span>
        <li>
          <img class="logo" src="/markdown-logo.svg" />
          <a href="//daringfireball.net/projects/markdown/">Markdown</a>
        </li>
        <li>
          <img class="logo" src="/gridsome-logo.svg" />
          <a href="//gridsome.org/">Gridsome</a>
        </li>
        <li>
          <img class="logo" src="/vuejs-logo.svg" />
          <a href="//vue.js/">Vue.js</a>
        </li>
        <li>
          <img class="logo" src="/graphql-logo.svg" />
          <a href="//graphql.org">GraphQL</a>
        </li>
      </ul>
      <br />
      <ul class="ft-legal-list smaller">
        <li>
          Copyright &copy; {{ new Date().getFullYear() }}.
          <div class="email">
            <a href="mailto:hi@matthewhendricks.net"
              >contact@matthewhendricks.net</a
            >
          </div>
        </li>
      </ul>
    </section>
  </footer>
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
    margin: 0;
    li {
      margin: calc(var(--space) / 2);
    }
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
    padding: calc(var(--space) / 2);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .ft-main-item {
    font-size: small;
  }

  .email small {
    text-decoration: underline;
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
