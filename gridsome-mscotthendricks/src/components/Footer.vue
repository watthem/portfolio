<template lang="html">
  <footer>
    <div class="navs">
      <nav class="footer-nav">
        <ul>
          <li><g-link class to="/services/">Services</g-link></li>
          <li><g-link class to="/services/documentation/">Documentation</g-link
                ></li>
          <li><g-link class to="/services/management/">Management</g-link></li>
          <li><g-link class to="/services/web/">Web</g-link></li>
        </ul>
        <ul>
          <li><g-link class to="/">Home</g-link></li>
          <li><g-link class to="/archive/">Archive</g-link></li>
          <li><g-link class to="/blog#recent">Recent Posts</g-link></li>
        </ul>
        <ul>
            <g-link class to="/contact#get-in-touch">Get in touch</g-link>
          </li>
          <li>
          <li><g-link class to="/contact#donate">Donate</g-link></li>
           <li><g-link class to="/contact#schedule-a-call">Schedule a call</g-link></li>
        </ul>

        <ul>
          <li><g-link class to="/resume/">Resume</g-link></li>
          <li><g-link class to="/work/"> Work Examples</g-link></li>
        </ul>
      </nav>
      <div class="details">
        <span class="footer__copyright"
          >Copyright © {{ new Date().getFullYear() }}.</span
        >
        <span class="footer__links">
          Powered by
          <a href="//gridsome.org/">Gridsome</a>
        </span>
        <br />
        <a href="mailto:mscotthendricks@gmail.com">mscotthendricks@gmail.com</a>
      </div>

      <div class="hidden"></div>
    </div>
  </footer>
</template>

<script lang="js">

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

    }
}
</script>

<style scoped lang="scss">
.details {
  padding: calc(var(--space) * 2);
  text-align: center;
  font-weight: 500;
  font-size: 0.8em;

  margin-top: var(--space);

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}

.navs {
  overflow-x: scroll;
}

.footer-nav {
  background: var(--bg-color);
max-width: var(--content-width);
  display: flex;
  
  padding: 0 var(--space);
margin: 0 auto;
  text-align: left;
  justify-content: space-evenly;
  

  & ul {
    list-style: none;
    padding: 0;
    margin: 0 1rem;

    & ul {
      font-size: 80%;
      margin: 0;
    }
  }

  & a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--title-color);
    opacity: 0.4;
    @media screen and (max-width: 800px) {
      font-size: 0.7rem;
    }
  }
  & a:hover {
    opacity: 0.72;
    text-decoration: underline;
  }

  & a.active--exact.active {
    opacity: 1;
  }

  a.active--exact.active:after {
    text-decoration: none;
  }

 

  // make sure this matches with Nav compontent
  // To-do: unify footer nav and site nav compontents
  @media screen and (min-width: 1300px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    
    margin: 0 auto;
    max-height: 300px;
    
    flex-wrap: wrap;
    flex-direction: column;
  
  }
}
</style>
