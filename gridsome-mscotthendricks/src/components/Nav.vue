<template lang="html">
  <nav class="nav">
    <g-link class to="/about">About</g-link>
    <g-link class to="/blog">Blog</g-link>
    <g-link class to="/contact">Contact</g-link>
    <g-link class to="/work">Work </g-link>
  </nav>
</template>

<script lang="js">

  export default  {
    name: 'Nav',
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
.nav {
  align-items: center;
  background: var(--bg-color);
  bottom: -0.5rem;
  max-width: var(--content-width);
  display: grid;
  gap: 1px 1px;
  grid-template-areas: ". . . .";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  margin: auto;

  min-height: var(--header-height);
  // padding: 0 calc(var(--space) / 2);
  position: sticky;
  text-align: justify;
  z-index: 10;
  padding: 0 var(--space);
  & a {
    font-size: 1.2rem;
    text-decoration: none;
    opacity: 0.8;
    margin: 0 0.5rem;
  }

  & a.active--exact.active {
    text-decoration: none;
    opacity: 1;
  }

  & a.active:after {
    transform: scaleX(0.8);
    border-bottom: solid var(--radius) var(--link-color);
  }

  & a:after {
    display: block;
    content: "";
    border-bottom: solid var(--radius) var(--border-color);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0%;
  }
  & a:hover:after {
    transform: scaleX(0.6);
  }

  @media screen and (min-width: 1300px) {
    margin: 0 auto;
  }
}
</style>
