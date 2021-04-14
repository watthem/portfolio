<!-- @format -->

<template>
  <Layout :showWelcome="true">
    <Author
      :show-title="true"
      :showIntroShort="true"
      :show-links="true"
      :showImage="true"
    />
    <FeaturedContent></FeaturedContent>
    <WonderWall></WonderWall>

    <div class="bump"></div>
    <Author
      :show-title="true"
      :showIntroShort="true"
      :show-links="true"
      :showImage="false"
    />
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
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

  tags: allTag (sortBy: "title", order: DESC) {
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
  import ServiceContent from "~/components/ServiceContent.vue";
  import Tags from "~/components/Tags.vue";
  import WonderWall from "~/components/WonderWall.vue";
  import FeaturedContent from "~/components/FeaturedContent.vue";
  export default {
    components: {
      Author,
      FeaturedContent,
      PostCard,
      ServiceContent,
      Tags,
      WonderWall,
    },
    metaInfo: {
      title: "Home",
    },
  };
</script>

<style scoped>
  .bump {
    min-height: 15vh;
  }
</style>
