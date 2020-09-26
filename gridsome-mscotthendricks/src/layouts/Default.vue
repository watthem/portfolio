<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo :showWelcome="showWelcome" :showWork="showWork" :showServices="showServices" />
      </div>
      <div class="header__right">
        <div class="navi" v-if="showCall">
          <CallButton></CallButton>
        </div>
        <div class="navi" v-else-if="showResume">
          <ResumeButton :showPage="true"></ResumeButton>
        </div>
        <div class="navi" v-else-if="showWelcome"></div>

        <ToggleTheme />
      </div>
    </header>
    <transition name="fade" appear>
      <main class="main">
        <slot />
      </main>
    </transition>

    <Nav></Nav>
    <Footer></Footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ResumeButton from "~/components/ResumeButton.vue";
import CallButton from "~/components/CallButton.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
export default {
  props: {
    showWork: { default: false },
    showServices: { default: false },
    showWelcome: { default: false },
    showCall: { default: false },
    showResume: { default: false },
  },
  components: {
    Logo,
    ResumeButton,
    CallButton,
    ToggleTheme,
    Footer,
    Nav,
  },
};
</script>

<style lang="scss">
.tag {
  border-radius: var(--radius) var(--radius) var(--radius);
  display: block;
  text-decoration: none;
  z-index: 1;
  position: relative;
}

.tag:before {
  content: "⚡";
  opacity: 0;

  padding: var(--radius);
}

.tag:hover:before {
  opacity: 1;
}
.services {
  margin: var(--space) auto;

  padding: var(--space);

  & img {
    width: auto;
  }

  & h1 {
    text-align: center;
  }

  & h3 {
    color: var(--link-color);
  }

  ul li {
    font-weight: bold;
  }

  ul * li {
    font-weight: 400;
  }

  ul li li {
    list-style: none;
    transition: transform 1s ease;
  }

  ul li li:before {
    content: "\2713";

    margin-right: calc(var(--space) / 2);
    text-align: center;
    color: var(--link-color);
  }
  .big {
    font-size: 200%;
    width: 90%;
  }
  .small {
    font-size: 90%;
    width: 25%;
  }

  .medium {
    font-size: 110%;
    width: 60%;
  }
}

.link-button {
  white-space: nowrap;
  text-decoration: none;
  & img {
    border-radius: 3px 3px 0px 3px;
    display: inline-block;
    margin-left: var(--space);
    margin-right: var(--radius);
    transform: translate(0%, 45%);
    width: var(--space);
  }
  & button {
    background: var(--bg-code);
    border-radius: 3px;
    border: none;
    box-shadow: var(--box);
    color: var(--title-color);
    cursor: pointer;
    font-size: 90%;

    margin: auto;
    padding: 0.75rem 1rem 0.75rem 1rem;
    text-align: center;
    text-decoration: none;
    transition: 1s transform ease;
    &:hover {
      transform: translateY(-2%);
      box-shadow: var(--box-hover);
    }

    &.icon svg {
      margin-right: calc(var(--radius) * 2);
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);

  background: var(--bg-color);
  box-shadow: var(--box);

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: var(--space);
}

.form-input {
  display: block;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  background: var(--bg-color);
  color: var(--body-color);
  width: 100%;
  margin: auto;
  max-width: var(--content-width);
  border: none;
  border-bottom: 1px solid var(--border-color);
}

.message-wrapper textarea {
  min-height: calc(var(--content-width) / 8);
}

.form-input:focus {
  outline: none;
}

.form-input-label {
  color: var(--body-color);

  font-size: 18px;
  font-weight: normal;
  position: relative;
  pointer-events: none;

  transition: 0.2s ease all;
}

/* active state */
.form-input:focus + .form-input-label,
.form-input:valid + .form-input-label {
  font-size: 14px;
  color: var(--link-color);
}

/* active state */
.form-input:focus ~ .bar:before,
.form-input:focus ~ .bar:after {
  width: 100%;
}

.bar {
  position: relative;
  display: block;
  width: 50%;
  margin: auto;
}
.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background-color: var(--link-color);
  transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

.navi {
  animation: blink-2 0.9s infinite 10s both;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
