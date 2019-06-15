<template>
  <Layout :title="$page.tag.name">
    <h1>{{ $page.tag.name }}</h1>
    <ul>
      <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Tag($path: String!) {
  tag: ghostTag(path: $path) {
    name
    belongsTo {
      edges {
        node {
          ... on GhostPost {
            id
            title
            path
          }
        }
      }
    }
  }
}

</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
