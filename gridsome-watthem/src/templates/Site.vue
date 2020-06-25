<template>
  <Layout :title="$page.site.title">
    <h1>Site.vue</h1>
    <PageView :contentData="$page.site"></PageView>
  </Layout>
</template>

<page-query>
query site ($path: String!) {
  site: site (path: $path) {
    title
    content
  
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import PageView from "../components/PageView";
export default {
  components: {
    Layout,
    PageView
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: this.$page.site.title
    };
  }
};
</script>

<style>
</style>