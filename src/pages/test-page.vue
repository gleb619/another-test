<template>
  <f7-page infinite :infinite-distance="50" :infinite-preloader="showPreloader" @infinite="loadMore">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-card class="demo-card-header-pic" v-for="(item, index) in items" :key="index">
      <f7-card-header
        class="no-border blank-image"
        :style="item.style"
        valign="bottom">
      </f7-card-header>
      <f7-card-content>
        <p>
          <f7-accordion-item>
            <f7-accordion-toggle class="date">Posted on January 21, 2015<i class="icon f7-icons icon-sm pull-right">arrow_down</i>
            </f7-accordion-toggle>
            <f7-accordion-content>
              Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus
              quis nibh hendrerit...
            </f7-accordion-content>
          </f7-accordion-item>
        </p>
      </f7-card-content>
      <f7-card-footer>
        <f7-link :color="item.color" @click="toFavorite(item)">
          <f7-icon f7="heart" class="m-t-8"></f7-icon>
        </f7-link>
        <f7-link :text="item.price"></f7-link>
        <f7-link>Read more</f7-link>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          style: 'background-image:url(https://placeimg.com/640/480/tech);',
          price: '12$'
        }, {
          style: 'background-image:url(https://picsum.photos/640/480/?random);',
          price: '12$'
        }, {
          color: "red",
          style: 'background-image:url(http://pipsum.com/640x480.jpg);',
          price: '53$'
        }, {
          style: 'background-image:url(https://picsum.photos/640/480/?random);',
          price: '5654$'
        }, {
          style: 'background-image:url(https://placeimg.com/640/480/tech);',
          price: '546$'
        }, {
          style: 'background-image:url(https://picsum.photos/640/480/?random);',
          price: '856$'
        }, {
          style: 'background-image:url(https://placeimg.com/640/480/tech);',
          price: '873$'
        }, {
          color: "red",
          style: 'background-image:url(https://placeimg.com/640/480/tech);',
          price: '342$'
        }],
        allowInfinite: true,
        lastItem: 20,
        showPreloader: true,
      };
    },
    created: function () {
      const self = this;
      for (let i = 0; i < 20; i++) {
        self.items.push({
          price: '$' + (i + 1000),
          style: 'background-image:url(https://placeimg.com/640/480/tech);'
        });
      }
    },
    methods: {
      loadMore() {
        const self = this;
        if (!self.allowInfinite) return;
        self.allowInfinite = false;

        setTimeout(() => {
            if (self.items.length >= 200){
              self.showPreloader = false;
              return;
            }

          const itemsLength = self.items.length;

          for (let i = 1; i <= 20; i += 1) {
            self.items.push({
              price: '$' + (itemsLength + i + 1000),
              style: 'background-image:url(https://picsum.photos/640/480/?random);'
            });
          }

          self.allowInfinite = true;
      },
        1000
      )
      };;,
      toFavorite(item) {
        console.info("item: ", item);
        const self = this;
        var index = self.items.indexOf(item);
        self.items[index].color = (item.color ? "blue" : "red");
      }
    },
  }
</script>
<style>

</style>
