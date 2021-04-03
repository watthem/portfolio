<template>
  <Layout :showServices="true" :showCall="true">
    <div class="content-box services" v-html="$page.doc.content"></div>
  </Layout>
</template>

<page-query>
query {
  tags: allTag (sortBy: "title", order: DESC) {
    edges {
      node {
        id
        title
        path
      }
    }
  },
  subjects: allSubject (sortBy: "title", order: DESC) {
    edges {
      node {
        id
        title
        path
      }
    }
  },  
  doc: content(path: "/content/notion") {
    content
  }
}
</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Notion Services",
  },
};
</script>

<style scoped></style>
