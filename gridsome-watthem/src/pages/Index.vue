<template>
  <Layout>
    <BlogList></BlogList>
  </Layout>
</template>

<script>
import BlogList from "../components/BlogList";
export default {
  components: {
    BlogList
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
