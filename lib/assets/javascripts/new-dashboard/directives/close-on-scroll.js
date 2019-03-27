import Vue from 'vue';

Vue.directive('closeOnScroll', {
  inserted: function (element, binding, vnode) {
    element.elementsTotalHeight = getElementsTotalHeight(binding.value.selectorsArray);
    element.onScroll = function (event, binding, vnode, scrollHeightToCloseDropdown) {
      const distanceToTop = vnode.elm.getBoundingClientRect().top + vnode.elm.getBoundingClientRect().height;
      if (distanceToTop < scrollHeightToCloseDropdown) {
        vnode.context.$root.$emit(binding.value.functionHandle);
      }
    };

    document.addEventListener('scroll', event => element.onScroll(event, binding, vnode, element.elementsTotalHeight), true);
  },
  unbind: function (element, binding, vnode) {
    document.removeEventListener('scroll', event => element.onScroll(event, binding, vnode, element.elementsTotalHeight), true);
  }
});

// TODO: Create utility funcition
const getElementsTotalHeight = function (selectorsArray) {
  return selectorsArray.reduce((total, selector) => {
    return total + document.querySelector(selector).offsetHeight;
  }, 0);
};
