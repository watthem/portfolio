<!-- @format -->

<template>
  <div>
    <div class="work-tags">
      <a
        class="tag-title"
        v-for="tag in work.tags"
        :key="tag.id"
        :href="tag.path"
      >
        {{ tag.title }}
      </a>

      <span> for {{ work.company }} </span><span> on </span>
      <span class="work-subjects">
        <g-link
          class="work-subjects__link"
          v-for="subject in work.subjects"
          :key="subject.id"
          :to="subject.path"
          >{{ subject.title }}
        </g-link>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["work"],
  };
</script>

<style lang="scss">
  .work-tags {
    font-size: smaller;
    line-height: 3;
  }
  .work-subjects {
    margin: 1em 0 0;

    &__link {
      margin-right: 0.7em;
      font-size: 0.8em;

      text-decoration: none;
      background-color: var(--bg-color);

      padding: 0.5em;
      border-radius: var(--radius);
    }
    &__link:before {
      content: "#";
    }
  }
</style>
