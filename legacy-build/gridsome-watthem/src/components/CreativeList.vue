<template>
  <div>
    <div
      class="p-8 my-8 m-auto rounded shadow-lg bg-white"
      v-for="edge in $static.featuredCreative.edges"
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
        <p class="text-gray-700 leading-relaxed text-md">
          {{ edge.node.description }}
        </p>
      </g-link>
      <div class="content-end text-right">
        <a
          class="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700"
          :href="edge.node.path"
          >read more</a
        >
      </div>
    </div>
  </div>
</template>

<static-query>
query Creative {
 featuredCreative: allCreative (filter: { Featured: { eq: true }}) {
    edges {
      node {
        id
     	  title
        URL
        description
        content
        path        
        subjects
      }
    }
  }
}
</static-query>

<script>
import ContentView from "../components/ContentView.vue";
export default {
  name: "CreativeList",
  components: { ContentView },
  data() {
    return {};
  },
};
</script>

<style></style>
