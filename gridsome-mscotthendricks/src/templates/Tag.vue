<template>
  <Layout>
    <div class="posts content-box">
      <h1 class="tag-title text-center space-bottom">
        Posts tagged and related to ⚡ {{ $page.tag.title }}
      </h1>
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
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
            path
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
        node {
           ...on Work {
            title
            path
            date (format: "MMMM YYYY")
            timeToRead
            description
            content
            tags {
              id
              path
              title
            }
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
  metaInfo: {
    title: "Tag",
  },
};
</script>

<style lang="scss"></style>
