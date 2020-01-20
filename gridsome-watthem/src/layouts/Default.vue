<template>
  <div class="layout">
    <header class="header">
      <nav class="flex justify-around content-center p-4 bg-blue-100 shadow-md">
        <strong>
          <g-link to="/" class="text-xl text-blue-400 font-semibold">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <g-link class="text-blue-700 underline" to="/work">Work Examples</g-link>
        <g-link class="text-blue-700 underline" to="/about">About Me</g-link>
      </nav>
    </header>
    <div class="container mx-auto px-4">
      <slot />
    </div>
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
</style>
