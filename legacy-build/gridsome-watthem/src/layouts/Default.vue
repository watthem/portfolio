<template>
  <div class="layout">
    <header class="header">
      <nav class="flex justify-around content-center p-4 bg-gray-100 shadow-md">
        <strong>
          <g-link to="/" class="text-blue-400 font-semibold break-all">{{
            $static.metadata.siteName
          }}</g-link>
        </strong>

        <g-link class="text-blue-700 underline opacity:50" to="/work">
          <font-awesome class="mr-1 w-6" :icon="['fa', 'briefcase']" />Work
        </g-link>
        <g-link class="text-blue-700 underline" to="/resume">
          <font-awesome class="mr-1 w-4" :icon="['fa', 'file-alt']" />Resume
        </g-link>
        <g-link class="text-blue-700 underline" to="/posts">
          <font-awesome class="mr-1 w-6" :icon="['fa', 'address-card']" />Blog
        </g-link>
        <g-link class="text-blue-700 underline" to="/about">
          <font-awesome class="mr-1 w-6" :icon="['fa', 'address-card']" />About
        </g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main class="container pb-20 m-auto">
        <slot />
      </main>
    </transition>
    <section class="container mx-auto text-center py-6 mb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
        Reach out
      </h1>
      <p>
        Currently
        <b>Open to Offers</b>.
      </p>
      <p>I'm available for short-term projects and contracts as needed.</p>
      <h3 class="my-4 text-2xl leading-tight">
        To discuss your requirements, feel free to schedule time from my
        calendar below:
      </h3>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
        ></div>
        <div class="max-w-xs m-auto">
          <div class="mt-8">
            <g-image src="../pro.jpg" class="rounded-b-full"></g-image>
          </div>
        </div>
      </div>
      <h2>Quick, before my son reaches it first!</h2>
      <a href="https://calendly.com/mscohendricks/quick" target="_new">
        <button
          class="mx-auto lg:mx-0 hover:underline bg-red-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          I'd love a quick chat.
        </button>
      </a>

      <p>
        Or send me an email at
        <a
          class="text-blue-700 underline hover:text-white hover:bg-blue-700"
          href="mailto:mscohendricks@gmail.com"
          >mscohendricks@gmail.com</a
        >
      </p>
    </section>
    <footer class="bg-black text-white p-4 text-center mt-20">
      <p>Find me on these platforms</p>
      <ul class="flex justify-center">
        <li class="p-2">
          <a href="https://medium.com/@thoughtabout">
            <font-awesome class="w-8" :icon="['fab', 'medium']" />
          </a>
        </li>
        <li class="p-2">
          <a href="https://linkedin.com/in/watthem">
            <font-awesome class="w-8" :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li class="p-2">
          <a href="https://github.com/watthem">
            <font-awesome class="w-8" :icon="['fab', 'github']" />
          </a>
        </li>
        <li class="p-2">
          <a href="https://codepen.io/watthem">
            <font-awesome class="w-8" :icon="['fab', 'codepen']" />
          </a>
        </li>
        <li class="p-2">
          <a alt="email" href="mailto:mscohendricks@gmail.com">
            <font-awesome class="w-8" :icon="['fa', 'at']" />
          </a>
        </li>
      </ul>

      <div class="m-10">
        <p>&copy; 2020</p>
        <a class="underline" href="https://www.matthewhendricks.net"
          >MatthewHendricks.net</a
        >
        <br />

        <span></span>
      </div>
      <p class="text-sm">
        Built with
        <a class="underline" href="https://www.gridsome.org">Gridsome</a>,
        <a class="underline" href="https://www.vuejs.org">VueJS</a>, Markdown
        <br />
        <span class="text-sm">& hosted on&nbsp;</span>
        <a class="underline text-sm" href="https://watthem.github.io"
          >watthem.github.io</a
        >
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
