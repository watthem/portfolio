<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="(edge) in $static.featuredCreative.edges" :key="edge.node.id">
      <div class="py-8 px-4 m-auto rounded shadow-lg bg-white">
        <g-link :to="edge.node.path">
          <h3 class="text-2xl mb-4 font-heading">{{ edge.node.title }}</h3>
        </g-link>
        <div class="px-6 py-4">
          <span class="text-gray-900 leading-none">I published it on</span>
          <span
            class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
          >{{ edge.node.Published_On }}</span>
        </div>
        <g-link :to="edge.node.path">
          <p class="text-gray-500 leading-relaxed text-md">{{ edge.node.Stub}}</p>
        </g-link>
        <div class="content-end text-right">
          <a
            class="px-3 text-blue-700 underline hover:text-white hover:bg-blue-700"
            :href="edge.node.path"
          >read more</a>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<static-query>
query Creative {
 featuredCreative: allCreative (filter: { Featured: { eq: true }}) {
    edges {
      node {
        id
     	  title
        URL
        Stub
        content
        path        
        Published_On
      }
    }
  }
}
</static-query>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "CreativeList",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: true
      }
    };
  }
};
</script>

<style>
</style>