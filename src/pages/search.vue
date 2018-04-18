<template>
  <f7-page>
    <f7-navbar title="Search" back-link="Back"></f7-navbar>
    <form class="list form-store-data" id="demo-form">
      <ul>
        item: {{ item }}
        <div class="row">
          <div class="col-50">
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <f7-label>Year start</f7-label>
                  <input type="text" placeholder="Year start" readonly="readonly" id="year-start-picker"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-50">
            <div class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap">
                  <f7-label>Year end</f7-label>
                  <input type="text" placeholder="Year end" readonly="readonly" id="year-end-picker"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Price</div>
            <div class="item-input-wrap">
              <f7-range
                :min="0"
                :max="20000"
                :step="100"
                :value="[item.priceMin, item.priceMax]"
                :label="true"
                :dual="true"
                color="green"
                @range:change="onPriceChange"
              ></f7-range>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Vehicle Type</div>
            <div class="item-input-wrap">
              <input type="text" placeholder="Vehicle Type" id="autocomplete-vehicle-type"/>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Make</div>
            <div class="item-input-wrap">
              <input type="text" placeholder="Make" id="autocomplete-make"/>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Model</div>
            <div class="item-input-wrap">
              <input type="text" placeholder="Model" id="autocomplete-model"/>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Trim</div>
            <div class="item-input-wrap">
              <input type="text" placeholder="Trim" id="autocomplete-trim-value"/>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">With Pictures Only</div>
            <div class="item-input-wrap">
              <f7-toggle @change="changeToggle('picturesOnly')"></f7-toggle>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Run & Drive only</div>
            <div class="item-input-wrap">
              <f7-toggle @change="changeToggle('runDriveOnly')"></f7-toggle>
            </div>
          </div>
        </li>


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
  import axios from 'axios';
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
          yearStart: '2005',
          priceMin: 1000,
          priceMax: 10000,
          vehicleType: "",
          makeValue: "",
          model: "",
          trimValue: "",
          picturesOnly: false,
          runDriveOnly: false,
        },
        vehicleTypes: "ANY Cars Trucks Trailers/RV's Boats Motorcycles ATVS Other".split(' '),
        make: "ANY ACADIA ALL WHEEL DRIVE ACURA ALFA ROMEO AM GENERAL ASTON MARTIN AUDI AUSTIN BENTLEY BMW BUICK CADILLAC CHEVROLET CHEVROLET CRUZE CHRYSLER CITR CLASSIC ROADSTER DAEWOO DAIHATSU DATSUN DODGE DODGE CHALLENGER DODGE JOURNEY DODGE TRUCK DODGETRUCK EAGLE FERRARI FIAT FISKER FORD GENERAL MOTORS GENESIS GEO GMC HONDA HUMMER HYUNDAI INFINITI ISUZU JAGUAR JEEP JENS KAISER KANDI KIA LAFORZA LAMBORGHINI LAND ROVER LEXUS LINCOLN LOTUS MASERATI MAYBACH MAZDA MCLAREN MERCEDES-BENZ MERCURY MG MINI MISC MITSUBISHI NISSAN OLDSMOBILE OPEL OTHR PACKARD PLYMOUTH PONTIAC PORSCHE ROLLS-ROYCE ROOT SAAB SATURN SCION SHELBY SMAR SMART STUDEBAKER SUBARU SUZUKI TESLA TOYO TOYOTA TRIUMPH VOLG VOLKSWAGEN VOLVO".split(' '),

      };
    },
    created: function () {
      this.loadInfo();
    },
    on: {
      pageBeforeRemove() {
        const self = this;
        self.autocompleteDropdownAll.destroy();
        self.autocompleteVehicleType.destroy();
        self.autocompleteMake.destroy();
        self.autocompleteModel.destroy();
        self.autocompleteTrimValue.destroy();
        self.pickerStartDevice.destroy();
        self.pickerEndDevice.destroy();
      },
      pageInit() {
        const self = this;
        const app = self.$f7;
        const fruits = self.fruits;
        const vehicleTypes = self.vehicleTypes;
        const make = self.make;

        self.autocompleteVehicleType = createSelect("#autocomplete-vehicle-type", vehicleTypes, "vehicleType");
        self.autocompleteMake = createSelect("#autocomplete-make", make, "makeValue");
        self.autocompleteModel = createSelect("#autocomplete-model", vehicleTypes, "model");
        self.autocompleteTrimValue = createSelect("#autocomplete-trim-value", make, "trimValue");

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
            // Render items by passing array with result items
            render(results);
          }
        });

        self.pickerStartDevice = createPicker("#year-start-picker", 2005, "yearStart");
        self.pickerEndDevice = createPicker("#year-end-picker", 2018, "yearEnd");

        /* =========================== */

        function createPicker(selector, defaultValue, name) {
          return app.picker.create({
            inputEl: selector,
            value: [defaultValue],
            cols: [
              {
                textAlign: 'center',
                values: self.years(),
              },
            ],
            on: {
              change: function (element) {
                self.item[name] = element.value[0];
              },
            }
          });
        }

        function createSelect(selector, values, name) {
          return app.autocomplete.create({
            inputEl: selector,
            openIn: 'dropdown',
            closeOnSelect: true,
            source(query, render) {
              const results = [];
              // Find matched items
              for (let i = 0; i < values.length; i += 1) {
                if (values[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(values[i]);
              }
              // Render items by passing array with result items
              render(results);
            },
            on: {
              change: function (element) {
                self.item[name] = element[0];
              },
            }
          });
        }
      }
    },
    methods: {
      loadInfo: function () {
        axios.get('https://www.auctionexport.com/en/Inventory/get_Models_Filtered?autoMake=ACURA')
          .then(function (response) {
            console.info("response: ", response);
          })
          .catch(function (error) {
            console.error("Error: ", error);
          });

        // app.request({
        //   url: 'https://www.auctionexport.com/en/Inventory/get_Models_Filtered?autoMake=ACURA',
        //   method: 'GET',
        //   dataType: 'json',
        //   data: {
        //     query: 'ACURA',
        //   },
        //   success: function success(data) {
        //     console.info("data", data);
        //   },
        // });

        // Models => https://www.auctionexport.com/en/Inventory/get_Models_Filtered?autoMake=ACURA&vehicleType=2&autoYear_from=1901&autoYear_to=2020&mileage_from=&mileage_to=&price_from=0&price_to=0&RunNDriveOnly=false
        // Trims => https://www.auctionexport.com/en/Inventory/get_Trims_Filtered?autoMake=ACURA&autoModel=MDX&vehicleType=2&autoYear_from=1901&autoYear_to=2020&mileage_from=&mileage_to=&price_from=0&price_to=0&RunNDriveOnly=false
      },
      onPriceChange(values) {
        this.item.priceMin = values[0];
        this.item.priceMax = values[1];
      },
      changeToggle(name) {
        this.item[name] = !this.item[name];
      }
    }
  }
</script>
<style>

</style>
