<template>
  <Layout :title="$page.post.title">
    <h5>
      <g-link :to="`/tag/${$page.post.primary_tag.slug}`">{{ $page.post.primary_tag.name }}</g-link>
    </h5>
    <div v-html="$page.post.html"></div>
    <div class="next">
      <ol>
        <li v-for="post in $page.posts.edges" :key="post.node.id">{{ post.node.title }}</li>
      </ol>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    html
    
    primary_tag {
      name
      slug
    }
  },
  posts: allGhostPost{
    edges {
      node {
        id
        title
        url
        excerpt
        primary_author { name }
        primary_tag { name }
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
