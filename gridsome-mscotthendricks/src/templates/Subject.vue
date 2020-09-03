<template>
  <Layout showWork="true">
    <div class="works content-box">
      <h1 class="subject-title text-center space-bottom">
        Work tagged and related to ⚡ {{ $page.subject.title }}
      </h1>
      <WorkCard
        v-for="edge in $page.subject.belongsTo.edges"
        :key="edge.node.id"
        :work="edge.node"
      />
    </div>
    <Author
      :showIntro="true"
      :showLinks="true"
      :showTitle="true"
      :showSubtitle="true"
    ></Author>
    <Tags context="work" :tags="$page.tags"></Tags>
  </Layout>
</template>

<page-query>
query Subject ($id: ID!) {
  subject (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Work {
            title
            path
            date (format: "MMMM YYYY")
            timeToRead
            description
            content
            cover_image
            company
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
import WorkCard from "~/components/WorkCard.vue";
import Tags from "~/components/Tags.vue";

export default {
  components: {
    Author,
    Tags,
    WorkCard,
  },
  metaInfo: {
    title: "Subject",
  },
};
</script>

<style lang="scss"></style>
