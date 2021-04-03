<template>
  <Layout>
    <div class="posts content-box">
      <h1 class="tag-title text-center space-bottom">
        Posts related to ⚡ {{ $page.tag.title }}
      </h1>
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
    <Author :showTitle="true" :showLinks="true"></Author>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            published
            path
            cover_image
            date (format: "MMMM YYYY")
            timeToRead
            description
            content
          
            tags {
              id
              path
              title
            }
          }
        }
        workNode: node {
           ...on Work {
            title
            path
            published
            cover_image
            date (format: "MMMM YYYY")
            timeToRead
            description
            content
            subjects {
              id
              path
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo() {
    return {
      title: this.$page.tag.title,
    };
  },
};
</script>

<style lang="scss"></style>
