<template>
  <Layout showWork="true" showCall="true">
    <div class="content-box">
      <div class="download">
        <a class="link-button " href="/Matthew_Hendricks.pdf"
          ><button class="">Download PDF</button></a
        >
      </div>
      <div class="content-box resume" v-html="$page.doc.content"></div>
    </div>
    <Author
      :show-title="false"
      :showLinks="true"
      :showIntro="true"
      :showSiteUrl="true"
    />
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
  doc: content(path: "/content/resume/") {
    content
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";

import Tags from "~/components/Tags.vue";
export default {
  components: {
    Author,
    Tags,
  },
  metaInfo: {
    title: "Resume",
  },
};
</script>

<style lang="scss" scoped>
.resume h2 {
  color: var(--link-color);
}
.download {
  text-align: center;
  display: block;
  width: 100%;
  margin: auto;
  padding: var(--space);
}
</style>
