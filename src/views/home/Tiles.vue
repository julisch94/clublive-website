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

<script setup lang="ts">
import { PropType } from 'vue'
import { TileArticle } from '@/model/tileArticle.model'

defineProps({
  articles: {
    type: Array as PropType<TileArticle[]>,
    default: [],
  },
})

const headerId = (pageName: string): string => {
  return `tile-header-${pageName}`
}
const imageLinkId = (pageName: string): string => {
  return `tile-image-${pageName}`
}
</script>

<style scoped>
.tiles {
  display: flex;
  flex-wrap: wrap;
  border-top: 0 !important;
}

.tiles + * {
  border-top: 0 !important;
}

.tiles article {
  align-items: center;
  display: flex;
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

article.shows {
  background-image: url('../../assets/images/shows.webp');
}

article.downloads {
  background-image: url('../../assets/images/downloads.webp');
}

article.music {
  background-image: url('../../assets/images/music.webp');
}

article.band {
  background-image: url('../../assets/images/band.webp');
}

.tiles article header {
  position: relative;
  z-index: 3;
}

a:hover {
  color: inherit !important;
}

h2 a.link {
  border: 0;
}

a.link.primary {
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
  transform: scale(0.95);
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
