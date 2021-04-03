<template>
  <Layout :showCall="true">
    <!-- Author intro -->

    <!-- List subjects -->

    <ServiceContent></ServiceContent>
    <WonderWall></WonderWall>
    <Author
      :show-site-url="true"
      :show-subtitle="true"
      :show-intro-long="true"
      showLinks="false"
    />
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        date (format: "MMMM YYYY")
        timeToRead
        description
        cover_image
        path
        tags {
          id
          title
          path
        }       
      }
    }
  },
  tags: allTag (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
      }
    }
  }  
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import Tags from "~/components/Tags.vue";
import WonderWall from "~/components/WonderWall.vue";
import ServiceContent from "~/components/ServiceContent.vue";
export default {
  components: {
    Author,
    ServiceContent,
    WonderWall,
    PostCard,
    Tags,
  },
  metaInfo: {
    title: "Freelance Services",
  },
};
</script>

<style lang="scss">
div.services a img {
  margin: auto;
  display: block;
}
</style>
