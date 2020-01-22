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
        <li>Medium.com</li>
        <li>LinkedIn.com</li>
        <li>GitHub.com</li>
        <li>CodePen.io</li>
        <li>Email</li>
      </ul>
      <h5>Matthew Hendricks</h5>
      <p>(C) 2020</p>
      <p>Built with Gridsome, VueJS, Markdown</p>
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
