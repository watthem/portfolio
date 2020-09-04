<template>
  <Layout :v-text="true" :showCall="true" :showResume="false">
    <div class="content-box">
      <div class="download">
        <ResumeButton></ResumeButton>
      </div>
      <div class="content-box resume" v-html="$page.doc.content"></div>
      <div class="download">
        <ResumeButton></ResumeButton>
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
  doc: content(path: "/content/resume/") {
    content
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import ResumeButton from "~/components/ResumeButton.vue";
import Tags from "~/components/Tags.vue";
export default {
  components: {
    ResumeButton,
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

.download a:after {
  color: var(--title-color);
  content: "\2193";
  opacity: 0;
  padding-left: var(--radius);
}

.download a:hover:after {
  opacity: 1;
}
</style>
