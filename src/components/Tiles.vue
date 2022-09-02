<template>
  <section class="tiles">
    <article v-for="item in articles" :key="item.name" :class="item.class">
      <header class="major">
        <h2>
          <a :id="headerId(item.name)" :href="item.route" class="link">{{ item.name }}</a>
        </h2>
      </header>
      <a :id="imageLinkId(item.name)" :href="item.route" class="link primary" />
    </article>
  </section>
</template>

<script lang="ts">
import { TileArticle } from '@/model/tileArticle.model'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Tiles',
  data() {
    return {
      greeting: 'jules',
    }
  },
  props: {
    articles: {
      type: Array as PropType<TileArticle[]>,
    },
  },
  methods: {
    headerId(pageName: string): string {
      return `tile-header-${pageName}`
    },
    imageLinkId(pageName: string): string {
      return `tile-image-${pageName}`
    },
  },
})
</script>

<style>
.tiles {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border-top: 0 !important;
}

.tiles + * {
  border-top: 0 !important;
}

.tiles article {
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-transition: all 0.25s ease;
  -webkit-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding: 4em 4em 3em 4em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(15%);
  cursor: default;
  height: 40vh;
  max-height: 40em;
  min-height: 23em;
  overflow: hidden;
  position: relative;
  width: 40%;
}

.tiles article .image {
  display: none;
}

.tiles article header {
  position: relative;
  z-index: 3;
}

.tiles article h3 {
  font-size: 1.75em;
}

.tiles article h3 a:hover {
  color: inherit !important;
}

.tiles article .link.primary {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
}

.tiles article:before {
  background-color: rgba(36, 41, 67, 0.4);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.tiles article:hover:before {
  transition: opacity 0.25s linear;
  opacity: 0;
}

.tiles article:hover {
  transition: filter 0.25s linear;
  filter: grayscale(0%);
}

.tiles article.is-transitioning {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  -moz-filter: blur(0.5em);
  -webkit-filter: blur(0.5em);
  -ms-filter: blur(0.5em);
  filter: blur(0.5em);
  opacity: 0;
}

.tiles article:nth-child(4n-1),
.tiles article:nth-child(4n-2) {
  width: 60%;
}

@media screen and (max-width: 1280px) {
  .tiles article {
    padding: 4em 3em 3em 3em;
    height: 30vh;
    max-height: 30em;
    min-height: 20em;
  }
}

@media screen and (max-width: 960px) {
  .tiles article {
    width: 50% !important;
  }
}

@media screen and (max-width: 840px) {
  .tiles article {
    padding: 3em 1.5em 2em 1.5em;
    height: 16em;
    max-height: none;
    min-height: 0;
  }

  .tiles article h3 {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 760px) {
  .tiles {
    display: block;
  }

  .tiles article {
    height: 20em;
    width: 100% !important;
  }
}
</style>
