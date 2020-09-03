<template>
  <Layout>
    <div class="text-center m-20 p-20">
      <h1 class="font-bold">Sorry, I don't know where that link went... 😳</h1>
      <div class="icon">
        <g-link to="/blog">
          <font-awesome :icon="['fa', 'heart-broken']" />
          <br />Check out my other
          posts
        </g-link>
      </div>
    </div>
    <p></p>
    <WonderWall></WonderWall>
    <Author :show-links="true" :show-title="true"></Author>
  </Layout>
</template>

<script>
import WonderWall from "~/components/WonderWall.vue";
import Author from "~/components/Author.vue";

export default {
  components: {
    WonderWall,
    Author,
  },
  metaInfo: {
    title: "Oops",
  },
};
</script>

<style scoped>
div {
  text-align: center;
  margin: auto;
  padding: var(--space);
}

svg {
  font-size: 5rem;
}
</style>