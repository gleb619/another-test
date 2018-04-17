<template>
  <f7-page>
    <f7-navbar title="Search" back-link="Back"></f7-navbar>
    <form class="list form-store-data" id="demo-form">
      <ul>
        <div class="row">
          <!-- Each "cell" has col-[widht in percents] class -->
          <div class="col-50">
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Your iOS device" readonly="readonly" id="year-start-picker"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-50">
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <input type="text" placeholder="Your iOS device" readonly="readonly" id="year-end-picker"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Name</div>
            <div class="item-input-wrap">
              <input name="name" type="text" placeholder="Your name">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Password</div>
            <div class="item-input-wrap">
              <input name="password" type="password" placeholder="Your password">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">E-mail</div>
            <div class="item-input-wrap">
              <input name="email" type="email" placeholder="Your e-mail">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Fruit</div>
            <div class="item-input-wrap">
              <input type="text" placeholder="Fruit" id="autocomplete-dropdown-all"/>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">URL</div>
            <div class="item-input-wrap">
              <input name="url" type="url" placeholder="URL">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Phone</div>
            <div class="item-input-wrap">
              <input name="phone" type="tel" placeholder="Your phone number">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Gender</div>
            <div class="item-input-wrap">
              <select name="gender" placeholder="Please choose...">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Birthday</div>
            <div class="item-input-wrap">
              <input name="birthday" type="date" value="2014-04-30" placeholder="Please choose...">
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Date time</div>
            <div class="item-input-wrap">
              <input name="date" type="datetime-local" placeholder="Please choose...">
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Range</div>
            <div class="item-input-wrap">
              <div class="range-slider range-slider-init" data-label="true">
                <input name="range" type="range" value="50" min="0" max="100" step="1">
              </div>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">About you</div>
            <div class="item-input-wrap">
              <textarea name="bio" class="resizable" placeholder="Bio"></textarea>
            </div>
          </div>
        </li>
      </ul>
    </form>
  </f7-page>
</template>
<script>
  import _ from 'lodash';
  import F7Button from "framework7-vue/src/components/button";

  export default {
    components: {F7Button},
    data() {
      return {
        fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
        years: function () {
          return _.range(1970, 2030)
        },
        item: {
          yearStart: '2005'
        }
      };
    },
    created: function () {
      this.loadInfo();
    },
    on: {
      pageBeforeRemove() {
        const self = this;
        self.autocompleteDropdownAll.destroy();
        self.pickerDevice.destroy();
      },
      pageInit() {
        const self = this;
        const app = self.$f7;
        const fruits = self.fruits;

        self.autocompleteDropdownAll = app.autocomplete.create({
          inputEl: '#autocomplete-dropdown-all',
          openIn: 'dropdown',
          closeOnSelect: true,
          source(query, render) {
            const results = [];
            // Find matched items
            for (let i = 0; i < fruits.length; i += 1) {
              if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            console.info("results: ", results);
            // Render items by passing array with result items
            render(results);
          }
        });

        self.pickerDevice = app.picker.create({
          inputEl: '#year-start-picker',
          value: [2005],
          cols: [
            {
              textAlign: 'center',
              values: self.years(),
            },
          ],
          on: {
            change: function (element) {
              self.item.yearStart = element.value[0];
            },
          }
        });
      }
    },
    methods: {
      loadInfo: function () {

      },
      log: function () {
        console.info('item.yearStart:', this.item.yearStart);
      }
    }
  }
</script>
<style>

</style>
