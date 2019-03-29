<template>
  <div>
    <h2 class="title is-body u-mb--24">Summary</h2>
    <p class="text is-body u-mb--64">Define the <code>&ltdiv&gt</code> element that will contain your map.</p>

    <h2 class="title is-body u-mb--24">How to</h2>
    <p class="text is-caption u-mb--16">Include in the &ltbody&gt</code> of your HTML file a <code>&ltdiv&gt</code> element to contain the map. The map, layers, and controls will be displayed in this element</p>
    <CodeBlock :code="codeBlock1"></CodeBlock>
    <p class="text is-caption u-mb--16 u-mt--16">Paste the following CSS code in the bottom of the <code>&lthead&gt</code> element to define some basic styles for the map.</p>
    <CodeBlock :code="codeBlock2"></CodeBlock>
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
      codeBlock1,
      codeBlock2
    }
  }
}

const codeBlock1 = `<div id="map"><\/div>`;

const codeBlock2 = 
`<style>
  #map {
    position: absolute;
    width: 100%;
    height: 100%
  }
<\/style>
`
</script>