<template>
  <Layout>
    <div class="content-html" v-html="$page.about.html"></div>
  </Layout>
</template>
<page-query>
query GhostPages{
  about: ghostPage(id: "5e2751e8c1cd2db88d4d7dc2"){
    title
    html
  }
}</page-query>
<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>

<style>
.content-html {
  font-family: georgia, serif;
  max-width: 980px;
  margin: auto;
}

figure.kg-card.kg-image-card {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-weight: 600;
  line-height: 1.1;
  margin: 4rem 0 0;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
}
p {
  margin: 2rem 0 0;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
}
video {
  filter: grayscale(20%) saturate(80%) opacity(0.8);
}
</style>