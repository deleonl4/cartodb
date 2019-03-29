<template>
  <div>
    <h2 class="title is-body u-mb--24">Summary</h2>
    <p class="text is-body u-mb--64">Connect to a test CARTO account and add a data layer to your map</p>

    <h2 class="title is-body u-mb--24">How to</h2>
    <p class="text is-caption u-mb--16">Connect to a CARTO account by specifiying the username and API Key you want to use. In this case, we're using a test account and the default key.</p>
    <CodeBlock :code="codeBlock1"></CodeBlock>
    <p class="text is-caption u-mb--16 u-mt--36 ">Now that CARTO VL has access to the account you can crate a basic layer and add it to the map.</p>
    <CodeBlock :code="codeBlock2"></CodeBlock>

    <h2 class="title is-body u-mb--24 u-mt--64">Extras</h2>
    <p class="text is-caption u-mb--64">If you want to lern more about how to add your own data to the map you can always visit the <a href="">data injection section</a> at the <a href="">Developer Center</a>.</p>

  </div>
</template>

<script>
import CodeBlock from 'new-dashboard/components/CodeBlock.vue';

export default {
  name: 'AddDataLayer',
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

const codeBlock1 = 
`carto.setDefaultAuth({
  username: 'cartovl',
  apiKey: 'default_public'
})`;

const codeBlock2 = 
`const viz= new carto.Viz();
const source = new carto.source.Dataset('madrid_listings')
const layer = new carto.Layer('layer', source, viz);
layer.addTo(map);`
</script>
