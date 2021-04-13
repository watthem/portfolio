<!-- @format -->

<template>
  <div class="list-tags">
    <h2 class>{{ context }} related articles</h2>
    <span>(by Subject Matt'ers)</span>
    <ul class="tags">
      <li class="item" v-for="edge in tags.edges" :key="edge.node.id">
        <a class="link-button tag" :href="edge.node.path">
          <button>{{ edge.node.title }}</button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["tags", "context"],
  };
</script>

<style scoped lang="scss">
  a.active--exact.active {
    opacity: 1;
  }
  .list-tags {
    padding: var(--space) calc(var(--space) / 2);
    margin: var(--space) auto;
    margin-bottom: 0;
    text-align: center;
    max-width: var(--content-width);
    h1 {
      color: var(--body-color);
      text-transform: capitalize;
    }
  }

  .tags {
    list-style: none;

    padding: calc(var(--space) / 2) 0 0 0;

    text-align: justify;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .item {
    transition: transform 0.5s ease;
    &:hover {
      transform: translateY(-5px);
    }
    @media screen and (min-width: 800px) {
      flex: auto;
      //border: 1px solid orange;
    }
  }

  .item a {
    display: block;
  }
</style>
