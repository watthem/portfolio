<template>
  <layout>
    <div class="iframe-container shadow-large w-full">
      <a
        class="m-auto text-center block"
        href="https://docs.google.com/document/d/1ebx9kHKbT7hoxCvYSM-fqVEfZNIqPskh2M7vFfF8fGA/export?format=pdf"
      >
        <button
          class="mx-auto lg:mx-0 hover:underline bg-red-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          <font-awesome class="mr-1 w-6" :icon="['fa', 'file-pdf']" />Download PDF
        </button>
      </a>
      <iframe
        class="shadow-lg border"
        src="https://docs.google.com/document/d/e/2PACX-1vQeQZ9jqbzhaMpxkctHKVjjykdd7c9MCSiMx4TEIDWRVkIqu2d9hMnreXLEglm_eE-jVgeUx5-nuPCM/pub?embedded=true"
      ></iframe>
    </div>
  </layout>
</template>

<style>
.iframe-container iframe {
  width: 100%;
  height: 80vh;
  margin: auto;
  filter: invert(90%) grayscale(100%);
}
</style>