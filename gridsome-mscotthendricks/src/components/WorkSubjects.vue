<template>
  <div>
    <div class="work-tags">
      <a
        class="tag  link-button"
        v-for="tag in work.tags"
        :key="tag.id"
        :href="tag.path"
        ><button>
          {{ tag.title }}
        </button>
      </a>
    </div>
    <div class="work-subjects">
      <span> for {{ work.company }} </span><span> on </span>
      <g-link
        class="work-subjects__link"
        v-for="subject in work.subjects"
        :key="subject.id"
        :to="subject.path"
        >{{ subject.title }}
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["work"],
};
</script>

<style lang="scss">
.work-subjects {
  margin: 1em 0 0;

  &__link {
    font-size: 0.8em;
    color: currentColor;
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
