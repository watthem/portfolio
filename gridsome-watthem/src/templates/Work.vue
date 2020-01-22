<template>
  <Layout :title="$page.work.title">
    <div class="max-w-full m-auto">
      <h2>
        <a class="underline py-8 block" :href="$page.work.URL">
          <strong>{{ $page.work.title }}</strong>
        </a>
      </h2>
      <div class="px-6 py-4">
        <span class="text-gray-900 leading-none">I wrote about</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
        >{{ $page.work.Subject_Matter }}.</span>
      </div>
      <div class="m-auto">
        <a class="underline py-8 block" :href="$page.work.URL">
          <div
            class="pb-10 m-auto rounded overflow-hidden shadow-lg object-scale-down h-64 w-3/4"
            v-html="$page.work.content"
          ></div>
        </a>
        <div class="inline-block">
          <div class="w-8">
            <img
              v-if="$page.work.Company.startsWith('Ookla')"
              class="grey-icon"
              src="../st_icon.png"
            />
            <img
              v-else-if="$page.work.Company.startsWith('NinjaTrader')"
              class="grey-icon"
              src="../nt_icon.png"
            />
          </div>
          <span>&raquo;</span>
          <a class="underline mx-2" :href="$page.work.URL">{{ $page.work.URL }}</a>
        </div>
        <div class="m-10">
          <p>{{$page.work.Stub}}</p>
        </div>
      </div>

      <div class="m-10">
        <span class="text-gray-900 leading-none">Made with</span>
        <span
          class="inline-block bg-gray-200 rounded-full m-1 px-3 text-sm font-semibold text-gray-700 mr-2"
        >{{ $page.work.Technology_Used }}</span>
      </div>
      <div class="m-4">
        <p v-if="$page.work.PDF.length > 0">
          Download a
          <a :href="$page.work.PDF" class="underline">
            <strong>PDF</strong> copy
            here
          </a>
        </p>
      </div>
    </div>
    <aside class="lg:w-1/3 m-auto py-5 bg-blue-500">
      <h3>Other work on {{ pageSubjectMatter }}</h3>
      <VueSlickCarousel class="mx-10" v-bind="settings">
        <div
          class="py-8 px-4 m-auto rounded shadow-lg bg-white"
          v-bind="settings"
          v-for="(edge) in subjectWork"
          :key="edge.node.id"
        >
          <g-link :to="edge.node.path">
            <h3 class="text-2xl mb-4 font-heading">{{ edge.node.title }}</h3>
          </g-link>
          <div class="px-6 py-4">
            <span class="text-gray-900 leading-none">I wrote about</span>
            <span
              class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
            >{{ edge.node.Subject_Matter }}</span>
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
      </VueSlickCarousel>
    </aside>
    <g-link class="text-blue-700 hover:underline" to="/work">See more work examples &raquo;</g-link>
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
    Company
    Stub
    Subject_Matter
    Technology_Used
    
  },
   works: allWork{
    edges {
      node {
       ... on Work {
            title
        		id
        		path
            Subject_Matter
          }
      }
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

import VueSlickCarousel from "vue-slick-carousel";
// import style
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    Layout,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: false
      }
    };
  },
  watcher: {},
  computed: {
    subjectWork: function() {
      return this.$page.works.edges.filter(edge => {
        //    return edge.node.Subject_Matter;
        return edge.node.Subject_Matter.includes(this.pageSubjectMatter);
      });
    },
    pageSubjectMatter: function() {
      return this.$page.work.Subject_Matter.split(",")[0];
    }
  },
  metaInfo() {
    return {
      title: this.$page.work.title
    };
  }
};
</script>

<style>
.content img {
  max-width: 80vw;
}

.container {
  text-align: center;
  margin: auto;
}

img.g-image.g-image--lazy.g-image--loaded {
  filter: opacity(0.5) grayscale(0.5);
}
img.g-image.g-image--lazy.g-image--loaded:hover {
  filter: opacity(1) grayscale(0.5);
}

img.grey-icon {
  filter: grayscale(1);
}
</style>