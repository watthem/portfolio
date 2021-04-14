<!-- @format -->

<template>
  <Layout :showResume="true">
    <section class="work-list" id="worklist">
      <!-- List works -->
      <div class="works content-box">
        <h1 id="work">Matthew's work portfolio</h1>

        <p class="works__sort">(Featured by Date)</p>
        <Pager :info="$page.works.pageInfo" />

        <WorkCard
          v-for="edge in $page.works.edges"
          :key="edge.node.id"
          :work="edge.node"
        />
        <Pager :info="$page.works.pageInfo" />
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  works: allWork  (perPage: 2, page: $page, filter: { published: { eq: true} }) @paginate {
    pageInfo {
      totalPages
      currentPage
    },
    edges {
      node {
        id
        title
        published
        date (format: "MMMM YYYY")
        timeToRead
        description
        tags {
          id
          title
          path
        }
        subjects {
          id
          title
          path
        }
        cover_image
        company
        path
       
      }
    }
  },
  subjects: allSubject (sortBy: "title", order: ASC) {
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
  import { Pager } from "gridsome";

  import Author from "~/components/Author.vue";
  import WorkCard from "~/components/WorkCard.vue";
  import Tags from "~/components/Tags.vue";
  import WonderWall from "~/components/WonderWall.vue";
  export default {
    components: {
      Author,
      Pager,
      WonderWall,
      WorkCard,
      Tags,
    },
    metaInfo() {
      return {
        title:
          this.$page.works.pageInfo.currentPage == 1
            ? "Work examples"
            : `Work examples ( ${this.$page.works.pageInfo.currentPage} of ${this.$page.works.pageInfo.totalPages})`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .space {
  }
  .works {
    h1 {
      text-align: center;
      text-transform: capitalize;
      color: var(--body-color);
    }

    &__link {
      padding: var(--space);
    }

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
