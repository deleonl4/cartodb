<template>
  <div>
    <h2 class="title is-body u-mb--24">Summary</h2>
    <p class="text is-body u-mb--64">Create an HTML file where you can load the map visualization library CARTO VL and the Mapbox GL libraries needed to run some of the vector features</p>

    <h2 class="title is-body u-mb--24">How to</h2>
    <p class="text is-caption u-mb--16">Create an HTML file in your favourite IDE.</p>
    <p class="text is-caption u-mb--16">Add the following script code to the &lthead&gt element.</p>
    <CodeBlock :code="codeBlock1"></CodeBlock>

    <h2 class="title is-body u-mb--24 u-mt--64">Extras</h2>
    <p class="text is-caption u-mb--64">Use your favourite Integrated Development Environments (IDE) but if you want a suggestion the favourite ones for the CARTO team are <a href="">Visual Studio Code</a>, <a href="">Sublime</a>, and <a href="">Textmate</a>.</p>
    <p class="text is-caption u-mb--64">CARTO VL is our more advanced rendering library and it’s constantly adding new features. You can learn what cool stuff did we add lately in our <a href="">Product Updates</a> blog.</p>

  </div>
</template>

<script>
import CodeBlock from 'new-dashboard/components/CodeBlock.vue';

export default {
  name: 'LoadCARTOVL',
  components: {
    CodeBlock
  },
  data () {
    return {
      codeBlock1
    }
  }
}

const codeBlock1 = 
  `<!DOCTYPE html>
  <html>
    <head>
      <title>CARTO VL Example<\/title>
      <!-- Load CARTO VL JS -->
      <script src="https://libs.cartocdn.com/carto-vl/v1.0.0/carto-vl.min.js"><\/script>
      <!-- Load Mapbox GL -->
      <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.js"><\/script>
      <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.50.0/mapbox-gl.css" rel="stylesheet" \/>
      <!-- Load CARTO VL Styles -->
      <link href="https://carto.com/developers/carto-vl/examples/maps/style.css" rel="stylesheet">
    <\/head>
    <body>
    <\/body>
  <\/html>`;

</script>
