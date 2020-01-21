<template>
  <div class>
    <ClientOnly>
      <simple-carousel-container loop>
        <simple-carousel-item v-for="(edge) in $static.featuredWork.edges" :key="edge.node.id">
          <div class="py-8 px-4 m-auto rounded shadow-lg bg-white">
            <g-link :to="edge.node.path">
              <h3 class="text-2xl mb-4 font-heading">{{ edge.node.title }}</h3>
            </g-link>
            <div class="px-6 py-4">
              <span class="text-gray-900 leading-none">I wrote about</span>
              <span
                class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
              >{{ edge.node.Subject_Matter }}.</span>
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
        </simple-carousel-item>
      </simple-carousel-container>
    </ClientOnly>
  </div>
</template>

<static-query>
query Work {
 featuredWork: allWork (filter: { Featured: { eq: true }}) {
    edges {
      node {
        id
     	  title
        URL
        Stub
        content
        path
        Company
        Subject_Matter
      }
    }
  }
}
</static-query>

<script>
import {
  SimpleCarouselContainer,
  SimpleCarouselItem
} from "vue-simple-carousel";

export default {
  name: "WorkList",
  components: {
    SimpleCarouselItem,
    SimpleCarouselContainer
  }
};
</script>

<style>
</style>