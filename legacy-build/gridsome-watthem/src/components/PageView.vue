<template>
  <div v-html="contentData.content"></div>
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