<template>
  <f7-page>
    <f7-navbar title="Menu"></f7-navbar>
    <img src="../img/header.jpg" class="w-100">
    <f7-block strong>
      <p>Auctionexport</p>
    </f7-block>
    <f7-block-title>Main</f7-block-title>
    <f7-list>
      <f7-list-item link="/search/" view="#main-view" title="Search" panel-close></f7-list-item>
      <f7-list-item link="/favorites/" view="#main-view" title="Favorites" panel-close></f7-list-item>
    </f7-list>
    <f7-block-title>Other</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item external link="http://www.auctionexport.com/" title="Open origin site"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {}
</script>
