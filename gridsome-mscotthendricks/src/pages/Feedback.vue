<template>
  <Layout>
    <div class="text-center m-20 p-20">
      <h1 class="font-bold">Noted, thanks</h1>

      <div class="icon">
        <g-link to="/blog/">
          <font-awesome :icon="['fa', 'trophy']" />
        </g-link>
        <div class="space" />
        <main>
          <ol class="active-choice mb-1">
            <li>
              <g-link
                class="dynamic-choice"
                id="one-star"
                to="/feedback#one-star"
                >⭐</g-link
              >
              <p>
                Thanks, I appreicate the input. Please feel free to reach me at
                webmaster@matthewhendrick.net for additional feedback
              </p>
            </li>
            <li>
              <g-link
                class="dynamic-choice"
                id="two-stars"
                to="/feedback#two-stars"
                >⭐⭐</g-link
              >
            </li>
            <li>
              <g-link
                class="dynamic-choice"
                id="three-stars"
                to="/feedback#three-stars"
                >⭐⭐⭐</g-link
              >
            </li>

            <li>
              <g-link class="dynamic-choice" id="sorry" to="/feedback#sorry"
                >:(</g-link
              >
            </li>
          </ol>
        </main>
        <span>
          Check out
          <g-link to="/blog/"> my posts </g-link>
        </span>
      </div>
    </div>
  </Layout>
</template>

<script>
import Footer from "~/components/WonderWall.vue";
import Nav from "~/components/Author.vue";

export default {
  components: {
    Footer,
    Nav,
  },
  metaInfo: {
    title: "Feedback",
  },
};
</script>

<style scoped>
ol {
  list-style: none;
}
.dynamic-choice {
  visibility: hidden;
}

.active--exact {
  visibility: visible;
}

div {
  text-align: center;
  margin: auto;
  padding: var(--space);
}

svg {
  font-size: 5rem;
}
</style>
