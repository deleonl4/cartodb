<template>
  <div class="wizard-step container">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WizardStep'
}
</script>
<style scoped lang="scss">
@import 'new-dashboard/styles/variables';

.wizard-step {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 64px;
  overflow: scroll;
}

</style>