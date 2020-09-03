<template>
  <Layout>
    <div class="content-box about" v-html="$page.doc.content"></div>

    <div class="stuff">
      <div class="st">
        <Tags context="personal" :tags="$page.tags"></Tags>
      </div>
      <div class="st">
        <Tags class="st" context="work" :tags="$page.subjects"></Tags>
      </div>
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
  doc: content(path: "/content/about/") {
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
    title: "About",
  },
};
</script>

<style>
.stuff {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
}

.st:nth-child(1) {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

.st:nth-child(2) {
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}
</style>
