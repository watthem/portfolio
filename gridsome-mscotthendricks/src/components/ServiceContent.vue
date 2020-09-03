<template>
  <div class="services">
    <div class="content-box" v-html="$static.service.content"></div>
  </div>
</template>

<static-query>
query {
 
  service: content(path: "/content/service/") {
    content
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
};
</script>

<style lang="scss"></style>
