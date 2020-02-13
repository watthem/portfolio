<template>
  <layout>
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
    <div class="w-full morph-black">
      <div class="resume-container">
        <vue-markdown :source="$page.posts.edges[0].node.body"></vue-markdown>
      </div>
    </div>
  </layout>
</template>

<page-query>
query IndexQuery {
  posts: allGoogleDocs {
    edges {
      node {
        date
        title
        body
        slug
        id
        content
      }
    }
  }
}
</page-query>


<style>
.resume-container {
  height: 80vh;
  margin: auto;

  opacity: 0.85;
  padding: 2rem;
  color: #f3f3f3;
  overflow: auto;
}

.morph-black {
  border-radius: 8px;
  background: linear-gradient(145deg, #2c2c2e, #252527);
  box-shadow: 1px 1px 17px #232325, -1px -1px 17px #2f2f31;
  transition: 1s ease all;
}

.resume-container h2:first-of-type {
  display: none; /* hides some meta data that gets spit out by gridsome google drive plugin */
}

.resume-container a {
  color: #47a4f1;
  text-decoration: underline;
}

.resume-container h1 {
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 20pt;
  font-family: "Arial";
  font-style: normal;
  padding: 1rem 0;
}

.resume-container h2 {
  font-weight: 500;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 16pt;
  font-family: "Arial";
  font-style: normal;
  padding: 0.5rem 0;
}

.resume-container h3 {
  font-weight: 600;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 14pt;
  font-family: "Arial";
  font-style: normal;
  padding: 0.25rem 0;
}

.resume-container h4 {
  font-weight: 700;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Arial";
  font-style: normal;
  padding: 0.125rem 0;
}

.resume-container h5 {
  font-weight: 800;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 10pt;
  color: gray;
  font-family: "Arial";
  font-style: normal;
}

.resume-container p {
  padding: 1rem 0;
}

.resume-container ul {
  padding: 1rem;
  list-style-type: disc;
}
</style>