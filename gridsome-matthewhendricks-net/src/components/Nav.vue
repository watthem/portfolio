<!-- @format -->

<template lang="html">
  <nav class="nav">
    <g-link class to="/about/">About</g-link>
    <g-link class to="/work/">Work</g-link>
    <g-link class to="/contact/">Contact</g-link>
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
    display: flex;
    justify-content: space-between;
    align-self: center;
    color: var(--title-color);
    min-height: var(--header-height);

    z-index: 10;
    padding: 1rem var(--space);

    & a {
      font-size: 1.2rem;
      text-decoration: none;
      opacity: 0.8;
      margin: 0 auto;
      color: var(--title-color);
    }

    & a.active--exact.active {
      text-decoration: none;
      opacity: 1;
    }

    & a.active:after {
      transform: scaleX(0.6);
      border-bottom: solid var(--radius) var(--link-color);
    }

    & a:after {
      display: block;
      content: "";
      border-bottom: solid var(--radius) var(--border-color);
      transform: scaleX(0.6);
      transition: transform 250ms ease-in-out;
      transform-origin: 0%;
    }
    & a:not(.active):hover:after {
      transform: scaleX(0);
    }
  }
</style>
