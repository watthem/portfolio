<template>
  <div>
    <g-link v-if="showWelcome" class="logo" to="/">
      <span class="logo__text">Welcome</span>
    </g-link>
    <g-link v-else-if="showWork" class="logo" to="/work/">
      <span class="logo__text">&larr; {{ $static.metadata.siteName }}' portfolio</span>
    </g-link>

    <g-link v-else-if="showServices" class="logo" to="/services/">
      <span class="logo__text">&larr; {{ $static.metadata.siteName }}' Tech Services</span>
    </g-link>

    <g-link v-else class="logo" to="/">
      <span class="logo__text">&larr; {{ $static.metadata.siteName }}.net</span>
    </g-link>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showWork", "showWelcome", "showServices"],
};
</script>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: middle;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
