<template>
  <Layout :title="$page.demo.title">
    <ContentView :contentData="$page.demo"></ContentView>
  </Layout>
</template>

<page-query>
query demo ($path: String!) {
  demo: demo (path: $path) {
    title
    content
    URL
    description
    Technology_Used
    Built_With
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
      title: this.$page.demo.title,
    };
  },
};
</script>

<style></style>
