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
        <div class="m-10">
          <p>{{$page.work.Stub}}</p>
          <div class="m-4">
            <span class="text-gray-900 leading-none">Made with</span>
            <span
              class="inline-block bg-gray-200 rounded-full m-1 px-3 text-sm font-semibold text-gray-700 mr-2"
            >{{ $page.work.Technology_Used }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class>
          <img v-if="$page.work.Company.startsWith('Ookla')" class="grey-icon" src="../st_icon.png" />
          <img
            v-else-if="$page.work.Company.startsWith('NinjaTrader')"
            class="grey-icon"
            src="../nt_icon.png"
          />
        </div>

        <a class="underline" :href="$page.work.URL">{{ $page.work.URL }}</a>
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
  </Layout>
</template>

<page-query>
query Work ($path: String!) {
  work: work (path: $path) {
    title
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
        id
        title  
      }
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
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