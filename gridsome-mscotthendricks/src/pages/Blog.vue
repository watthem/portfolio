<template>
  <Layout>
    <section class="blog-list" id="bloglist">
      <!-- List posts -->
      <div class="posts content-box">
        <h1 id="recent">Blog articles</h1>

        <p class="posts__sort">(Featured by Date)</p>
        <Pager :info="$page.posts.pageInfo" />

        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        <Pager :info="$page.posts.pageInfo" />
        <Tags context="personal" :tags="$page.tags"></Tags>
        <WonderWall></WonderWall>
      </div>
    </section>
    <!-- Author intro -->
    <Author :show-site-url="true" :show-subtitle="true" :show-intro="true" :showLinks="true" />
  </Layout>
</template>

<page-query>
query ($page: Int) { 
  posts: allPost (sort: [{ by: "featured" }, { by: "date" } ], filter: { published: { eq: true }}, perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    },
    edges {
      node {
        id
        published
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
import { Pager } from "gridsome";
export default {
  components: {
    Author,
    Pager,
    PostCard,
    Tags,
    WonderWall,
  },
  metaInfo() {
    return {
      title:
        this.$page.posts.pageInfo.currentPage == 1
          ? "Blog"
          : `Blog ( ${this.$page.posts.pageInfo.currentPage} of ${this.$page.posts.pageInfo.totalPages})`,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-list {
  h1 {
    text-align: center;
    text-transform: capitalize;
    color: var(--body-color);
  }

  &__link {
    padding: var(--space);
  }
}

.posts {
  &__sort {
    text-align: center;
  }

  nav {
    text-align: center;
    margin: var(--space);
  }
  nav a {
    padding: 1rem;
  }
}
</style>
