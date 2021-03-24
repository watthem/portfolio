<template lang="html">
  <div class="featured-content">
    <div class="card-link">
      <div class="feature spacer">
        <h3 class="title">Decentralized community</h3>
        <div class="feature-image">
          <!-- <g-image width="229" height="50" src="~/assets/images/nt_logo.png" /> -->
        </div>
        <p>
          I've been unemployed since COVID, but I'm busy hosting a private
          fintech community powered by matrix.org
        </p>

        <g-link class="link-button" to="/subject/fintech/">
          <button>Read more</button>
        </g-link>
      </div>
    </div>
    <div class="card-link">
      <div class="feature spacer">
        <h3 class="title">
          Programming guides and reference resources for Fintech developers
        </h3>
        <div class="feature-image">
          <g-image width="229" height="50" src="~/assets/images/nt_logo.png" />
        </div>
        <p>
          I wrote developer friendly software documentation for an online
          trading platform. Retail investors rely on the interoperable and
          customization of this platform for discretionary and automated trading
          of commodities and currencies.
        </p>

        <g-link class="link-button" to="/subject/ninja-trader/">
          <button>Read more</button>
        </g-link>
      </div>
    </div>

    <div class="card-link">
      <div class="feature spacer">
        <h3 class="title">
          NetGauge ✈ Speedtest Custom (legacy Flash to HTML5)
        </h3>
        <div class="feature-image">
          <g-image src="~/assets/svg/ookla_logo.svg" />
        </div>
        <p>
          Ookla—the team behind Speedtest.net—also offers an enterprise version
          of their flagship software used to measure network performance between
          a client and server. During the transition from legacy Flash protocols
          to new HTML5/JavaScript APIs, I lead a small team of technical service
          contractors to assist with the increased workload from the transition.
        </p>

        <g-link class="link-button" to="/subject/fintech/">
          <button>Read more</button>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'featured-content',
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
.featured-content {
  display: flex;
  flex-direction: column;
  margin: 5rem;

  justify-content: center;

  button {
    color: var(--comp-color);
  }
  .link-button {
    text-align: right;
    &:before,
    &:after {
      border: none;

      color: var(--comp-color);
      margin: 0;
      padding: 0;
      content: "✨";
      cursor: pointer;
      display: inline-block;
      opacity: 0.5;
      padding: 0.75rem 0.25rem 0.75rem 0.25rem;
      text-align: center;
      transition: 1s transform ease, 1s opacity ease;
    }

    &:hover:after,
    &:hover:before {
      transform: translateY(-2%);
      opacity: 1;
      // color: var(--title-color);
    }
  }
}

.feature {
  box-shadow: var(--box);

  display: flex;
  flex-basis: 100%;

  flex-direction: column;

  flex: 1;
}
.feature:hover {
  box-shadow: var(--box-hover);
}

.spacer {
  margin: var(--radius);
  padding: var(--space);
}

.title {
  margin: 0;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 1.25;
  margin-bottom: 2.5rem;
  color: var(--title-color);
  z-index: 10;
}

.feature-image {
  filter: grayscale(100%);
  margin: auto;
  position: relative;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
