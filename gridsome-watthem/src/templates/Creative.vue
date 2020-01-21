<template>
  <Layout :title="$page.creative.title">
    <div class="max-w-full m-auto">
      <h2>
        <a class="underline py-8 block" :href="$page.creative.URL">
          <strong>{{ $page.creative.title }}</strong>
        </a>
      </h2>
      <div class="m-auto">
        <div class="m-10">
          <p>{{$page.creative.Stub}}</p>
          <div class="m-4">
            <span class="text-gray-900 leading-none">Published on</span>
            <span
              class="inline-block bg-gray-200 rounded-full m-1 px-3 text-sm font-semibold text-gray-700 mr-2"
            >{{ $page.creative.Published_On }}</span>
          </div>
        </div>
      </div>
      <div
        class="pb-10 m-auto rounded overflow-hidden shadow-lg object-scale-down h-64 w-3/4"
        v-html="$page.creative.content"
      ></div>
      <div class="flex justify-center">
        <a class="underline" :href="$page.creative.URL">{{ $page.creative.URL }}</a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query creative ($path: String!) {
  creative: creative (path: $path) {
    title
    content
    URL
    Stub
    Published_On
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
      title: this.$page.creative.title
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