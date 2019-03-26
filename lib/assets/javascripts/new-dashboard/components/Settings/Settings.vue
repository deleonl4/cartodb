<template>
<Dropdown ref="dropdown" class="settings">
  <template slot="button">
    <slot />
  </template>

  <Filters :section="section" :filter="filter" :metadata="metadata" @filterChanged="setFilter"/>
</Dropdown>
</template>

<script>
import Dropdown from '../Dropdowns/Dropdown';
import Filters from '../Settings/Filters';
import { constants } from 'os';

export default {
  name: 'SettingsDropdown',
  components: {
    Dropdown,
    Filters
  },
  props: {
    section: String,
    filter: String,
    metadata: {
      type: Object,
      default () {
        return { total_shared: 0 };
      }
    }
  },
  mounted: function () {
    this.bindScrollEvent();
  },
  data: function () {
    return {
      isVisible: false,
      isDropdownOpen: false
    };
  },
  methods: {
    setFilter (filter) {
      this.$refs.dropdown.closeDropdown();
      this.$emit('filterChanged', filter);
    },
    bindScrollEvent () {
      const scrollHeightToCloseDropdown = this.getScrollHeightToCloseDropdown();
      document.addEventListener('scroll', event => this.onScroll(event, scrollHeightToCloseDropdown) , true);
    },
    onScroll (event, scrollHeightToCloseDropdown) {
      if (window.scrollY > scrollHeightToCloseDropdown) {
        this.$refs.dropdown.closeDropdown();
      }
    },
    getScrollHeightToCloseDropdown () {
      const navbarHeight = document.querySelector('nav.navbar').offsetHeight;
      const sectionActionsHeight = document.querySelector('.head-sectionActions').offsetHeight;
      const offset = 20;
      return navbarHeight + sectionActionsHeight - offset;
    }
  }
};
</script>

<style lang="scss" scoped>
.settings {
  position: relative;
}
</style>
