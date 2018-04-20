<template>
  <f7-page>
    <f7-navbar title="Search" back-link="Back"></f7-navbar>
    <f7-list media-list>
      <f7-list-item
        link="/item-details/123"
        title="2007 Toyota Camry/le/xle/se sedan 4 door"
        after="$15"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <span slot="subtitle">
          <f7-badge color="white" class="c-black">4 days left</f7-badge>
        </span>
        <img slot="media" src="http://pipsum.com/160x120.jpg" width="80"/>
      </f7-list-item>
      <f7-list-item
        link="/item-details/765"
        title="2009 Toyota Camry se/le/xle Sedan 4 door"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        after="$22"
      >
        <span slot="subtitle">
          <f7-badge color="red">Live Sale in Progress</f7-badge>
        </span>
        <img slot="media" src="https://placeimg.com/160/120/tech" width="80"/>
      </f7-list-item>
      <f7-list-item
        link="/item-details/14"
        title="2009 Toyota Camry se/le/xle Sedan 4 door"
        after="$16"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <span slot="subtitle">
          <f7-badge>23 hours left</f7-badge>
        </span>
        <img slot="media" src="http://pipsum.com/160x120.jpg" width="80"/>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {};
    }
  }
</script>
<style>
  .c-black {
    color: #000000;
  }

  .badge.c-black.color-white {
    border: 1px solid #8e8e93;
  }
</style>
