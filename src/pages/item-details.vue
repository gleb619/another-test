<template>
  <f7-page hide-navbar-on-scroll>
    <f7-navbar title="Item" :subtitle="$f7route.params['id']" back-link="Back"></f7-navbar>
    <div v-if="!loading">
      <img :src="item.image" :class="{ 'lazy lazy-fade-in': item.image }" v-if="item.image" class="w-100">
      <f7-block-title>Price</f7-block-title>
      <f7-block>
        <f7-row>
          <f7-col>
            <h2 class="no-margin">
              <span>{{item.price}}</span>
            </h2>
            <small class="color-gray">+$265 fees</small>
          </f7-col>
          <f7-col></f7-col>
          <f7-col>
            <f7-button round raised :fill="item.purchased" @click="item.purchased = !item.purchased">Buy</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>
      <f7-block-title>Location</f7-block-title>
      <f7-block>
        <f7-chip :text="item.location" :media-bg-color="$theme.md ? 'green' : undefined">
          <f7-icon slot="media" if-ios="f7:compass" if-md="material:location_on"></f7-icon>
        </f7-chip>
        <f7-chip :text="item.make" :media-bg-color="$theme.md ? 'blue' : undefined">
          <f7-icon slot="media" if-ios="f7:add_round" if-md="material:add_circle"></f7-icon>
        </f7-chip>
        <f7-chip :text="item.year" :media-bg-color="$theme.md ? 'red' : undefined">
          <f7-icon slot="media" f7="time"></f7-icon>
        </f7-chip>
      </f7-block>
      <f7-block-title>Block title</f7-block-title>
      <f7-block>
        <p>{{item.text}}</p>
      </f7-block>
      <f7-block-title>Engines</f7-block-title>
      <div class="data-table">
        <table>
          <thead>
          <tr>
            <th>Years</th>
            <th>Engine</th>
            <th>Displacement</th>
            <th>Power</th>
            <th>Torque</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2006–2011</td>
            <td>3.5&nbsp;L V6</td>
            <td>213&nbsp;CID</td>
            <td>211&nbsp;hp (157&nbsp;kW)</td>
            <td>214&nbsp;lb⋅ft (290&nbsp;N⋅m)</td>
          </tr>
          <tr>
            <td>2012–2013</td>
            <td>3.6&nbsp;L V6</td>
            <td>217&nbsp;CID</td>
            <td>302&nbsp;hp (225&nbsp;kW)</td>
            <td>262&nbsp;lb⋅ft (355&nbsp;N⋅m)</td>
          </tr>
          <tr>
            <td>2006</td>
            <td>3.9&nbsp;L V6</td>
            <td>237&nbsp;CID</td>
            <td>242&nbsp;hp (180&nbsp;kW)</td>
            <td>242&nbsp;lb⋅ft (328&nbsp;N⋅m)</td>
          </tr>
          <tr>
            <td>2007–2008</td>
            <td>3.9&nbsp;L V6</td>
            <td>237&nbsp;CID</td>
            <td>233&nbsp;hp (174&nbsp;kW)</td>
            <td>240&nbsp;lb⋅ft (325&nbsp;N⋅m)</td>
          </tr>
          <tr>
            <td>2009–2011</td>
            <td>3.9&nbsp;L V6</td>
            <td>237&nbsp;CID</td>
            <td>224&nbsp;hp (167&nbsp;kW)</td>
            <td>235&nbsp;lb⋅ft (319&nbsp;N⋅m)</td>
          </tr>
          <tr>
            <td>2006–2016</td>
            <td>5.3&nbsp;L V8</td>
            <td>325&nbsp;CID</td>
            <td>303&nbsp;hp (226&nbsp;kW)</td>
            <td>323&nbsp;lb⋅ft (438&nbsp;N⋅m)</td>
          </tr>
          </tbody>
        </table>
      </div>
      <f7-block-title>Data list, from site</f7-block-title>
      <f7-list>
        <f7-list-item title="VIN #:" after="**********1156423"></f7-list-item>
        <f7-list-item title="Make:" after="Chevrolet"></f7-list-item>
        <f7-list-item title="Model:" after="Impala Ls"></f7-list-item>
        <f7-list-item title="Year:" after="2009"></f7-list-item>
        <f7-list-item title="Mileage:" after="135255 mi "></f7-list-item>
        <f7-list-item title="Exterior Color:" after="Black"></f7-list-item>
        <f7-list-item title="Interior Color:" after="Gray"></f7-list-item>
        <f7-list-item title="Drivetrain:" after="FWD"></f7-list-item>
        <f7-list-item title="Engine:" after="V6 Cylinder Engine"></f7-list-item>
        <f7-list-item title="Transmission:" after="Automatic"></f7-list-item>
        <f7-list-item title="Sale Doc:" after="Used"></f7-list-item>
        <f7-list-item title="Keys:" after="Master - 1pcs"></f7-list-item>
      </f7-list>
    </div>
  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        item: {},
        loading: true,
      };
    },
    created: function () {
      this.$f7.preloader.show();
      this.loadInfo();
    },
    methods: {
      loadInfo: function () {
        setTimeout(() => {
          this.item = {
            image: 'https://placeimg.com/640/480/arch',
            location: 'Pennsylvania, USA',
            make: 'Chevrolet',
            year: 2009,
            text: 'The tenth-generation Impala was introduced at the 2012 New York Auto Show for the 2014 model year, ' +
            'with sales and production commencing March 4, 2013. The tenth generation Impala was the first North ' +
            'American sedan in 20 years to earn Consumer Reports\' top score, with a score of 95 of a possible ' +
            '100 points.\n\nThis tenth generation Impala was built larger (once again considered full-size) and more ' +
            'upscale than the previous generation (sharing the extended Epsilon II FWD platform with the Cadillac XTS) ' +
            'to reduce price overlap between Impala and Malibu, similar to how the Ford Taurus and Ford Fusion are ' +
            'positioned in Ford\'s lineup. ',
            price: '$2,600',
            purchased: false
          };
          this.$f7.preloader.hide();
          this.loading = false;
        }, 1000);
      }
    },
  }
</script>
<style>

</style>
