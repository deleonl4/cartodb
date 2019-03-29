<template>
  <div>
    <h2 class="title is-body u-mb--24">Summary</h2>
    <p class="text is-body u-mb--64">Create a MapboxGL map to render a basemap.</p>

    <h2 class="title is-body u-mb--24">How to</h2>
    <p class="text is-caption u-mb--16">Copy and paste this script below your <code>&ltdiv&gt</code> container to load the map.</p>
    <CodeBlock :code="codeBlock1"></CodeBlock>
  </div>
</template>

<script>
import CodeBlock from 'new-dashboard/components/CodeBlock.vue';

export default {
  name: 'CreateTheMap',
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
`<script>
  const map = new mapboxgl.Map({
    container: 'map',
    style: carto.basemap.voyager,
    center: [-3.6908, 40.4297],
    zoom: 11
  })
<\/script>`
</script>
