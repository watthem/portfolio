<template>
  <Layout :title="$page.post.title">
    <ContentView :contentData="$page.post"></ContentView>
  </Layout>
</template>

<page-query>
query post ($path: String!) {
  post: post (path: $path) {
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
    ContentView
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style>
</style>