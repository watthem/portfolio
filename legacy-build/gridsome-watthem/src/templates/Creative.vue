<template>
  <Layout :title="$page.creative.title">
    <ContentView :contentData="$page.creative"></ContentView>
  </Layout>
</template>

<page-query>
query creative ($path: String!) {
  creative: creative (path: $path) {
    title
    content
    URL
    description
    Published_On
    subjects
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import ContentView from "../components/ContentView.vue";
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
      title: this.$page.creative.title,
    };
  },
};
</script>

<style></style>
