<template>
  <Layout showWork="true">
    <div class="download">
      <a class="link-button" href="/matthew-hendricks_resume.pdf"
        ><button>Download PDF</button></a
      >
    </div>
    <div class="content-box resume" v-html="$page.doc.content"></div>

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

.download a:before {
  content: "📃";
  padding-right: var(--radius);
}

.download a:after {
  content: "\2193";
}
// .stuff {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   align-content: space-around;
//   align-items: center;
// }

// .st:nth-child(1) {
//   order: 0;
//   flex: 0 1 auto;
//   align-self: auto;
// }

// .st:nth-child(2) {
//   order: 0;
//   flex: 0 1 auto;
//   align-self: auto;
// }
</style>
