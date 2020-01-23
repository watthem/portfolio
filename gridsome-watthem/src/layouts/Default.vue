<template>
  <div class="layout">
    <header class="header">
      <nav class="flex justify-around content-center p-4 bg-gray-100 shadow-md">
        <strong>
          <g-link to="/" class="text-xl text-blue-400 font-semibold">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <g-link class="text-blue-700 underline" to="/work">Work Examples</g-link>
        <g-link class="text-blue-700 underline" to="/about">About Me</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main class="container pb-20 m-auto">
        <slot />
      </main>
    </transition>
    <footer class="bg-black text-white p-4 text-center mt-20">
      <ul>
        <li>
          <a href="https://medium.com/@thoughtabout">
            <font-awesome class="w-8" :icon="['fab', 'medium']" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/watthem">
            <font-awesome class="w-8" :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://github.com/watthem">
            <font-awesome class="w-8" :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/watthem">
            <font-awesome class="w-8" :icon="['fab', 'codepen']" />
          </a>
        </li>
        <li>
          <a href="mailto:mscohendricks@gmail.com">
            <font-awesome class="w-8" :icon="['fa', 'at']" />
          </a>
        </li>
      </ul>

      <div class="m-10">
        <p>&copy; 2020</p>
        <g-link class="underline" to="/about">Matthew Hendricks</g-link>
      </div>
      <p class="text-sm">
        Built with
        <a class="underline" href="https://www.gridsome.org">Gridsome</a>,
        <a class="underline" href="https://www.vuejs.org">VueJS</a>, and Markdown
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
