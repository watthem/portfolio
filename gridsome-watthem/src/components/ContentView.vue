<template>
  <div class="max-w-3xl m-auto text-center">
    <h2>
      <a class="underline py-8 block" :href="contentData.URL">
        <strong>{{ contentData.title }}</strong>
      </a>
    </h2>
    <div v-if="contentData.Subject_Matter" class="px-6 py-4">
      <span class="text-gray-900 leading-none">I wrote about</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
      >{{ contentData.Subject_Matter }}.</span>
    </div>
    <!-- demos do not have "subject matter" -> technology demo used -->
    <div v-else-if="contentData.Technology_Used" class="px-6 py-4">
      <span class="text-gray-900 leading-none">I demonstrated</span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1"
      >{{ $page.demo.Technology_Used }}.</span>
    </div>

    <div class="m-auto">
      <a class="underline py-8 block" :href="contentData.URL">
        <div class="img-gray" v-html="contentData.content"></div>
      </a>
      <div class="text-center m-auto w-full flex justify-center items-center">
        <div class>
          <div class="w-8" v-if="contentData.Company">
            <img
              v-if="contentData.Company.startsWith('Ookla')"
              class="grey-icon"
              src="../st_icon.png"
            />
            <img
              v-else-if="contentData.Company.startsWith('NinjaTrader')"
              class="grey-icon"
              src="../nt_icon.png"
            />
          </div>
        </div>
        <div class="w-1/2">
          <input type="text" class="shadow rounded border-0 p-3 w-full" :value="contentData.URL " />
        </div>
        <div>
          <a class="underline mx-2 text-blue-700" :href="contentData.URL">
            <span>&raquo;</span>
          </a>
        </div>
      </div>
      <div class="m-10">
        <p>{{contentData.Stub}}</p>
        <div v-if="contentData.Published_On" class="m-10">
          <span class="text-gray-900 leading-none">Published on</span>
          <span
            class="inline-block bg-gray-200 rounded-full m-1 px-3 text-sm font-semibold text-gray-700 mr-2"
          >{{ $page.creative.Published_On }}</span>
        </div>
        <div v-if="contentData.Built_With" class="m-10">
          <span class="text-gray-900 leading-none">Made with</span>
          <span
            class="inline-block bg-gray-200 rounded-full m-1 px-3 text-sm font-semibold text-gray-700 mr-2"
          >{{ contentData.Built_With }}</span>
        </div>
      </div>
    </div>

    <div v-if="contentData.PDF" class="m-4">
      <p v-if="contentData.PDF.length > 0">
        Download a
        <a :href="contentData.PDF" class="underline">
          <strong>PDF</strong> copy
          here
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["contentData"]
};
</script>

<style>
.img-gray {
  @apply opacity-75 pb-10 m-auto rounded overflow-hidden shadow-lg object-scale-down  w-3/4;
  filter: grayscale(0.8);
}
.img-gray:hover {
  @apply opacity-100;
  filter: grayscale(0);
}
</style>