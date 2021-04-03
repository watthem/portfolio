<template>
  <Layout showResume="true">
    <div class="content-box">
      <h1>Here's everything I've published</h1>
      <h2>Posts</h2>
      <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.id">
          <span v-if="edge.node.featured">✨</span>
          <strong>{{ edge.node.date }}</strong> -
          <a :href="edge.node.path">{{ edge.node.title }}</a>
        </li>
      </ul>
      <h2>Work</h2>
      <ul>
        <li v-for="edge in $page.works.edges" :key="edge.node.id">
          <span v-if="edge.node.featured">✨</span>
          <strong>{{ edge.node.date }}</strong> -
          <a :href="edge.node.path">{{ edge.node.title }}</a>
        </li>
      </ul>
      <h2>Personal Tags</h2>
      <ul>
        <li v-for="edge in $page.tags.edges" :key="edge.node.id">
          <a :href="edge.node.path">{{ edge.node.title }}</a>
        </li>
      </ul>

      <h2>Work Subjects</h2>
      <ul>
        <li v-for="edge in $page.subjects.edges" :key="edge.node.id">
          <a :href="edge.node.path">{{ edge.node.title }}</a>
        </li>
      </ul>
    </div>
    <Author
      :show-image="true"
      :show-title="true"
      :show-intro-long="true"
      :show-links="true"
    ></Author>
  </Layout>
</template>

<page-query>
query {
  posts: allPost (sort: [{ by: "featured" }, { by: "date" } ], filter: { published: { eq: true }} ) {
    edges {
      node {
        id
        title
        date (format: "YYYY-MM-DD")
        timeToRead
        description
        featured
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

    works: allWork (sort: [{ by: "featured" }, { by: "date" } ], filter: { published: { eq: true }} ) {
    edges {
      node {
        id
        title
        date (format: "YYYY-MM-DD")
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

  subjects: allSubject (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
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
export default {
  components: {
    Author,
    WonderWall,
    PostCard,
    Tags,
  },
  metaInfo: {
    title: "Archive",
  },
};
</script>

<style scoped></style>
