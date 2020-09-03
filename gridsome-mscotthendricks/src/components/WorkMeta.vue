<template>
  <div class="work-meta">
    <time>Published: {{ work.date }}</time>
    <br />
    <template v-if="work.timeToRead">
      <strong>{{ work.timeToRead }} min read</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["work"],
};
</script>

<style lang="scss">
.work-meta {
  font-size: 0.8em;
  opacity: 0.8;

  &__link {
    color: purple;
    text-decoration: none;
  }
  &__link:before {
    content: "#";
  }
}
</style>
