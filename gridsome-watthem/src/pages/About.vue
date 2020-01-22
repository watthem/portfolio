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

<style >
.content-html {
  font-family: georgia, serif;
  max-width: 980px;
  margin: auto;
}

.content-html a {
  text-decoration: underline;
}

.content-html figure.kg-card.kg-image-card {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
.content-html h1,
.content-html h2,
.content-html h3,
.content-html h4,
.content-html h5 {
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-weight: 600;
  line-height: 1.1;
  margin: 4rem 0 0;
}

.content-html h1 {
  font-size: 4rem;
}

.content-html h2 {
  font-size: 3rem;
}
.content-html h3 {
  font-size: 2rem;
}
.content-html p {
  margin: 2rem 0 0;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
}
.content-html video {
  filter: grayscale(20%) saturate(80%) opacity(0.8);
}
</style>