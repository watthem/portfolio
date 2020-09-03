<template>
  <Layout :title="$page.work.title">
    <ContentView :contentData="$page.work"></ContentView>
    <aside class="lg:w-1/3 m-auto py-5 bg-blue-500">
      <h3 class="m-auto pl-2 text-2xl font-heading text-blue-900">
        <font-awesome class="mr-5 w-12" :icon="['fa', 'briefcase']" />
        Other work on {{ pageSubjectMatter }}
      </h3>
      <div>
        <div
          class="p-8 m-8 rounded shadow-lg bg-white"
          v-for="edge in subjectWork"
          :key="edge.node.id"
        >
          <g-link :to="edge.node.path">
            <h3 class="text-2xl mb-4 font-heading">{{ edge.node.title }}</h3>
          </g-link>
          <div class="px-6 py-4">
            <span class="text-gray-900 leading-none">I wrote about</span>
            <span
              class="text-center inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
              >{{ edge.node.subjects }}</span
            >
          </div>
          <g-link :to="edge.node.path">
            <p class="text-gray-500 leading-relaxed text-md">
              {{ edge.node.description }}
            </p>
          </g-link>
          <div class="content-end text-right">
            <a
              class="bg-blue-700 text-white p-2 underline hover:text-blue-700 hover:bg-white shadow"
              :href="edge.node.path"
              >read more</a
            >
          </div>
        </div>
      </div>
    </aside>
    <g-link class="text-blue-700 hover:underline text-center block" to="/work"
      >See more work examples &raquo;</g-link
    >
  </Layout>
</template>

<page-query>
query Work ($path: String!) {
  work: work (path: $path) {
    title
    id
    content
    URL
    PDF
    company
    description
    subjects
    Built_With    
  },
   works: allWork(filter: { path: { ne: $path }}){
    edges {
      node {
       ... on Work {
            title
        		id
        		path
            subjects
          }
      }
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import ContentView from "../components/ContentView.vue";

export default {
  components: {
    Layout,
    ContentView,
  },
  data() {
    return {};
  },
  watcher: {},
  computed: {
    subjectWork: function() {
      return this.$page.works.edges.filter((edge) => {
        // this currently returns all matchces, including the current page
        // --> should update the query to not include current page/id with allWork collection
        return edge.node.subjects.includes(this.pageSubjectMatter);
      });
    },
    pageSubjectMatter: function() {
      // just returning the first tag for now
      return this.$page.work.subjects.split(",")[0];
    },
  },
  metaInfo() {
    return {
      title: this.$page.work.title,
    };
  },
};
</script>

<style></style>
