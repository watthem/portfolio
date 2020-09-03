<template>
  <Layout :title="$page.post.title">
    <!-- <ContentView :contentData="$page.post"></ContentView> -->
    <h1>Hellow post</h1>
  </Layout>
</template>

<page-query>
query posts ($path: String!) {
  post: posts (path: $path) {
    title
    content
   
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import ContentView from "../components/ContentView";
export default {
  components: {
    Layout,
    ContentView,
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style>
</style>