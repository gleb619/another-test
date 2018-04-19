<template>
  <f7-page>
    <f7-navbar title="Search" back-link="Back"></f7-navbar>

    <f7-toolbar tabbar>
      <f7-link tab-link="#tab-1" tab-link-active>Advanced</f7-link>
      <f7-link tab-link="#tab-2">Detailed</f7-link>
      <f7-link tab-link="#tab-3">Quick</f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="tab-1" class="page-content1" tab-active>
        <f7-block>
          <f7-list form>
            <f7-list-item>
              <f7-label>Lot №</f7-label>
              <f7-input type="text" placeholder="Lot"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Vin #</f7-label>
              <f7-input type="text" placeholder="Vin"></f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Keywords</f7-label>
              <f7-input type="text" placeholder="Keywords"></f7-input>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content1">
        <f7-block>
          <f7-block-title>Form Example</f7-block-title>
          <f7-list form>
            <f7-list-item>
              <f7-row>
                <f7-col>
                  <f7-label>Year start</f7-label>
                  <input type="text" placeholder="Year start" readonly="readonly" id="year-start-picker"/>
                </f7-col>
                <f7-col>
                  <f7-label>Year end</f7-label>
                  <input type="text" placeholder="Year end" readonly="readonly" id="year-end-picker"/>
                </f7-col>
              </f7-row>
            </f7-list-item>
            <f7-list-item title="Price">
              <f7-input>
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
              </f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Vehicle Type</f7-label>
              <f7-input>
                <input type="text" placeholder="Vehicle Type" id="autocomplete-vehicle-type"/>
              </f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Make</f7-label>
              <f7-input>
                <input type="text" placeholder="Make" id="autocomplete-make"/>
              </f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Model</f7-label>
              <f7-input>
                <input type="text" placeholder="Model" id="autocomplete-model"/>
              </f7-input>
            </f7-list-item>
            <f7-list-item>
              <f7-label>Trim</f7-label>
              <f7-input>
                <input type="text" placeholder="Trim" id="autocomplete-trim-value"/>
              </f7-input>
            </f7-list-item>
            <f7-list-item title="With Pictures Only">
              <f7-toggle @change="changeToggle('picturesOnly')" slot="after"></f7-toggle>
            </f7-list-item>
            <f7-list-item title="Run & Drive only">
              <f7-toggle @change="changeToggle('runDriveOnly')" slot="after"></f7-toggle>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content1">
        <f7-block>
          <f7-row>
            <f7-col width="20"></f7-col>
            <f7-col width="60" class="p-b-10 m-b-10" big raised>
              <f7-button fill>Dealer & Repo Inventory</f7-button>
            </f7-col>
            <f7-col width="20"></f7-col>
          </f7-row>
          <f7-row>
            <f7-col width="20"></f7-col>
            <f7-col width="60" class="p-b-10 m-b-10" big>
              <f7-button fill>Buy Now Salvage</f7-button>
            </f7-col>
            <f7-col width="20"></f7-col>
          </f7-row>
          <f7-row>
            <f7-col width="20"></f7-col>
            <f7-col width="60" class="p-b-10 m-b-10" big fill>
              <f7-button fill>Cars Under $1,000</f7-button>
            </f7-col>
            <f7-col width="20"></f7-col>
          </f7-row>
          <f7-row>
            <f7-col width="20"></f7-col>
            <f7-col width="60" class="p-b-10 m-b-10" big outline>
              <f7-button fill>Classic Cars</f7-button>
            </f7-col>
            <f7-col width="20"></f7-col>
          </f7-row>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
  import _ from 'lodash';
  import F7Button from "framework7-vue/src/components/button";
  import F7CardContent from "framework7-vue/src/components/card-content";

  export default {
    components: {F7CardContent, F7Button},
    data() {
      return {
        years: function () {
          return _.range(1970, 2030)
        },
        item: {
          yearStart: '2005',
          yearEnd: '2018',
          priceMin: 3000,
          priceMax: 15000,
          vehicleType: "",
          makeValue: "",
          model: "",
          trimValue: "",
          picturesOnly: false,
          runDriveOnly: false,
        },
        vehicleTypeValues: "ANY Cars Trucks Trailers/RV's Boats Motorcycles ATVS Other".split(' '),
        makeValues: "ANY ACADIA ALL WHEEL DRIVE ACURA ALFA ROMEO AM GENERAL ASTON MARTIN AUDI AUSTIN BENTLEY BMW BUICK CADILLAC CHEVROLET CHEVROLET CRUZE CHRYSLER CITR CLASSIC ROADSTER DAEWOO DAIHATSU DATSUN DODGE DODGE CHALLENGER DODGE JOURNEY DODGE TRUCK DODGETRUCK EAGLE FERRARI FIAT FISKER FORD GENERAL MOTORS GENESIS GEO GMC HONDA HUMMER HYUNDAI INFINITI ISUZU JAGUAR JEEP JENS KAISER KANDI KIA LAFORZA LAMBORGHINI LAND ROVER LEXUS LINCOLN LOTUS MASERATI MAYBACH MAZDA MCLAREN MERCEDES-BENZ MERCURY MG MINI MISC MITSUBISHI NISSAN OLDSMOBILE OPEL OTHR PACKARD PLYMOUTH PONTIAC PORSCHE ROLLS-ROYCE ROOT SAAB SATURN SCION SHELBY SMAR SMART STUDEBAKER SUBARU SUZUKI TESLA TOYO TOYOTA TRIUMPH VOLG VOLKSWAGEN VOLVO".split(' '),
        modelValues: "ANY 4RUNNER 86 AVALON CAMRY CAMRY HYBRID CELICA GT CELICA ST C-HR COROLLA CRESSIDA ECHO EXTRA LONG FJ CRUISER HIGHLANDER HILUX LAND CRUISER MATRIX MIRAI MR2 PASEO PICKUP PREVIA PRIUS RAV4 SCION SEQUOIA SHORT BED SIENNA STANDARD BED SUPRA T100 TACOMA TERCEL TUNDRA VENZA YARIS".split(' '),
        trimValues: "ANY  4RUNNER   4RUNNER DLX   4RUNNER LI   4RUNNER LIMITED   4RUNNER LIMITED/SR5   4RUNNER LIMITED/SR5   4RUNNER LIMITED/SR5/TRAIL   4RUNNER LTD   4RUNNER RN   4RUNNER RN37   4RUNNER SR   4RUNNER SR5   4RUNNER SR5 PREM/LTDL/TRAIL/TRD   4RUNNER SR5/LIMITED/SR5 PREMIUM   4RUNNER SR5/LIMITED/TRAIL   4RUNNER SR5/SPORT EDITION   4RUNNER VN   7FGCU25   86   86 BASE   86 SPECIAL EDITION   AVALON   AVALON BAS   AVALON BASE LIMITED   AVALON BASE/ LIMITED   AVALON HYB   AVALON HYBRID XLE GAS/ELECTRIC   AVALON HYBRID XLE PREMIUM   AVALON LIMITED   AVALON XL   AVALON XL/   AVALON XL/XLS   AVALON XL/XLS/LIMIT   AVALON XL/XLS/TOUR/LTD   AVALON XLE   AVALON XLE PLUS/PREMIUM/TOUR/LTD   AVALON XLE/LIMITED/XLE PREMIUM/TOURING   AVALON XLE/LIMITED/XLE PREMIUM/XLE TOURING   AVALON XLS   BASE 4-SPEED AT   CAMRY   CAMRY   LE   CAMRY BASE   CAMRY CE   CAMRY CE/L   CAMRY CE/LE/XLE   CAMRY CE/LE/XLE/SE   CAMRY DELUXE   CAMRY DLX   CAMRY DX   CAMRY DX/LE   CAMRY DX/LE/XLE   CAMRY HYBR   CAMRY HYBRID   CAMRY HYBRID GAS/ELECTRIC   CAMRY HYBRID/LE/XLE/SE   CAMRY L   CAMRY L/LE/XLE/SE/XSE   CAMRY LE   CAMRY LE A   CAMRY LE/SE/XLE   CAMRY LE/X   CAMRY LE/XLE   CAMRY LE/XLE/SE   CAMRY LE/XLE/SE/XSE   CAMRY NEW   CAMRY SE   CAMRY SE 6-SPD MT   CAMRY SE/ LE/ XLE   CAMRY SE/LE/L   CAMRY SE/LE/L/XLE   CAMRY SE/LE/XLE   CAMRY SE/LE/XSE/XLE   CAMRY SE/XLE   CAMRY SOLA   CAMRY SOLARA SE   CAMRY SOLARA SE/SLE   CAMRY SOLARA SE/SLE/SPORT   CAMRY XLE   CAMRY XSE   CAMRY XSE/XLE   CAMRY/LE/XLE/SE   CELICA   CELICA GT   CELICA GT-   CELICA GT-S   CELICA ST   CELICA ST 25TH ANNIVERSARY LIFTBACK   CELICA ST LIFTBACK   C-HR   C-HR XLE   C-HR XLE/XLE PREMIUM   COR L/LE/L   COROLLA   COROLLA   DLX   COROLLA BA   COROLLA BASE   COROLLA BASE 4-SPEED AT   COROLLA BASE/ S/ LE/ XLE   COROLLA BASE/S/LE   COROLLA CE   COROLLA CE/LE   COROLLA CE/LE/S   COROLLA DE   COROLLA DELUXE   COROLLA DL   COROLLA DLX   COROLLA DX   COROLLA EC   COROLLA ECO/ECO PLUS/ECO PREMIUM   COROLLA IM   COROLLA L   COROLLA L/LE/S   COROLLA L/LE/XLE/SE   COROLLA L/LE/XLE/SE/XSE   COROLLA LE   COROLLA LE 4-SPEED AT   COROLLA LE ECO/ECO PLUS/ECO PREMIUM   COROLLA LE/DELUXE   COROLLA LE/DX   COROLLA LE/L/S   COROLLA LE/S   COROLLA LE/XLE   COROLLA MA   COROLLA MATRIX XR   COROLLA S   COROLLA S   MT   COROLLA S MT   COROLLA S/LE/XLE   COROLLA S\\L\\LE   COROLLA SE   COROLLA VE   COROLLA VE/CE/LE   COROLLA XR   COROLLA XRS   COROLLA/S/   CRESSIDA L   ECHO   EXTRA LONG WB DELUXE   EXTRA LONG XCAB SR5   FJ CRUISER   FJ CRUISER   AT   FJ CRUISER  AT   FJ40   HIGHLANDER   HIGHLANDER  XLE   HIGHLANDER BASE   HIGHLANDER BASE   I4   HIGHLANDER BASE I4   HIGHLANDER HYBRID   HIGHLANDER HYBRID GAS/ELECTRIC   HIGHLANDER HYBRID LIMITED   HIGHLANDER HYBRID LTD PLATINUM   HIGHLANDER HYBRID/XLE   HIGHLANDER LE   HIGHLANDER LE/LE PLUS   HIGHLANDER LIMITED   HIGHLANDER LIMITED/LIMITED PLATINUM   HIGHLANDER LIMITED/LTD PLATINUM   HIGHLANDER SE   HIGHLANDER SE/XLE   HIGHLANDER SPORT   HIGHLANDER SPORT/LIMITED   HIGHLANDER XLE   HILUX   LAND CRUIS   LAND CRUISER   LANDCRUISER   LANDCRUISER S/W   LANDCRUISR   MATRIX   MATRIX BAS   MATRIX BASE/ XR   MATRIX L   MATRIX S   MATRIX S  4-SPEED AT   MATRIX XR   MATRIX XRS   MATRIX/XR   MIRAI   MR2   MR2 SPORT   MR2 SPYDER   MR2 T-BAR   PASEO   PICKUP   PICKUP 1/2   PICKUP CAB   PICKUP CAB CHASSIS SUPER LONG WB   PICKUP DLX  XTRACAB   PICKUP DLX REG. CAB LONG BED   PICKUP DLX REG. CAB SHORT BED   PICKUP DLX XTRACAB   PICKUP DX  XTRACAB   PICKUP DX REG. CAB   PICKUP REG. CAB   PICKUP REG. CAB SHORT BED   PICKUP RN6   PICKUP RN64 SR5   PICKUP SR5 XTRACAB   PICKUP XTR   PICKUP XTRACAB RN67 DLX   PREVIA DLX   PREVIA DX   PREVIA LE   PREVIA LE (AUTO)   PREVIA LE ALL-TRAC (AUTO)   PRIUS   PRIUS   LIFTBACK   PRIUS BASE   PRIUS C   PRIUS C BASE   PRIUS C ONE/TWO/THREE/FOUR   PRIUS C ONE/TWO/THREE/FOUR/SPECIAL EDITION   PRIUS IV   PRIUS PLUG   PRIUS PLUG-IN ELECTRIC   PRIUS PRIM   PRIUS PRIME   PRIUS V   PRIUS V TWO/THREE/FIVE   PRIUS V TWO/THREE/FOUR/FIVE   RAV4   RAV4 ADVEN   RAV4 ADVENTURE/XLE   RAV4 BASE   RAV4 BASE I4   RAV4 BASE I4   WITH 3RD ROW   RAV4 BASE I4  WITH 3RD ROW   RAV4 BASE I4 WITH 3RD ROW   RAV4 EV   RAV4 EV ELECTRIC   RAV4 HV LE   RAV4 HV LE/XLE   RAV4 HV LI   RAV4 HV LIMITED   RAV4 HV XL   RAV4 HV XLE   RAV4 HYBRID   RAV4 I4   RAV4 LE   RAV4 LIMIT   RAV4 LIMITED   RAV4 LIMITED I4   RAV4 LIMITED/PLATINUM   RAV4 LIMITED/SE/PLATINUM   RAV4 LTD   RAV4 SE   RAV4 SPORT   RAV4 SPORT I4   RAV4 XLE   SCION   SCION FR-S   SCION IA   SCION IM   SCION IQ   SCION TC   SCION XA   SCION XB   SCION XD   SEQUOIA   SEQUOIA LI   SEQUOIA LIMITED   SEQUOIA LIMITED   FFV   SEQUOIA LIMITED FFV   SEQUOIA PL   SEQUOIA PLANTIUM   SEQUOIA PLATINUM   SEQUOIA SR   SEQUOIA SR5   SEQUOIA SR5 5.7L   SEQUOIA SR5 5.7L  FFV   SHORT BED DELUXE   SHORT BED STD   SHORT WB STB   SIENNA   SIENNA 7-PASSENGER   SIENNA BAS   SIENNA BASE   SIENNA BASE/LE   SIENNA BASE/SE   SIENNA CE   SIENNA CE/   SIENNA CE/LE   SIENNA LE   SIENNA LE  7-PASS   SIENNA LE 7-PASS   SIENNA LE 8-PASS   SIENNA LE/XLE   SIENNA SE   SIENNA SE 8-PASS   SIENNA SE/PREMIUM 8-PASS   SIENNA SPO   SIENNA SPORT   SIENNA XL/XLE/LIMITED 7-PASS   SIENNA XLE   SIENNA XLE  7-PASS   SIENNA XLE MOBILITY ACCESS 7-PASS   SIENNA XLE/LIMITED   SIENNA XLE/LIMITED 7-PASS   SIENNA XLE/XLE LIMITED   STANDARD BED 1/2 TON   SUPRA   SUPRA SPOR   SUPRA TURBO SPORT ROOF   T100   T100 DX   T100 DX XTRACAB   T100 XTRAC   T100 XTRACAB SR5   TACOMA   TACOMA ACC   TACOMA ACCESS CAB   TACOMA ACCESS CAB AUTO   TACOMA ACCESS CAB I4 MANUAL   TACOMA ACCESS CAB/SR/SR5   TACOMA ACCESS CAB/SR5/TRD SPT/OR   TACOMA BASE   TACOMA DBL CAB PRERUNNER LNG BED   TACOMA DBL CAB/SR/SR5/TRD SPT/OR   TACOMA DBL CAB/SR/TRDSPT/OR/PRO   TACOMA DBL CAB/SR5/TRD SPORT/OR   TACOMA DOU   TACOMA DOUBLE CAB   TACOMA DOUBLE CAB LONG BED   TACOMA DOUBLE CAB LONG BED  AUTO   TACOMA DOUBLE CAB PRERUNNER   TACOMA DOUBLE CAB/LTD   TACOMA DOUBLE CAB/SR/SR5   TACOMA DOUBLE CAB/SR5/TRD SPORT   TACOMA DOUBLECAB   TACOMA DOUBLECAB LG BD   TACOMA I4   TACOMA PRE   TACOMA PRERUNNER   TACOMA PRERUNNER DOUBLE CAB   TACOMA PRERUNNER DOUBLE CAB  AUTO   TACOMA PRERUNNER DOUBLE CAB AUTO   TACOMA PRERUNNER DOUBLE CAB LONG BED   TACOMA PRERUNNER LONG BED   TACOMA PRERUNNER XTRACAB   TACOMA PRERUNNERACCESSCAB   TACOMA PRERUNNERDOUBLECAB   TACOMA REGULAR CAB   TACOMA SR/SR5/TRD DOUBLE CAB   TACOMA SR/SR5/TRD DOUBLE CAB 4X4   TACOMA X-R   TACOMA X-RUNNER ACCESSCAB   TACOMA XTR   TACOMA XTRACAB   TACOMA XTRACAB PRERUNNER   TERCEL CE   TERCEL DEL   TERCEL DELUXE   TERCEL DX   TERCEL EZ   LIFTBACK   TERCEL SR5   TERCEL STD   TERCEL STD/DX   TUNDRA   TUNDRA 2WD   TUNDRA 2WD TRUCK   TUNDRA 4WD   TUNDRA 4WD TRUCK   TUNDRA ACC   TUNDRA ACCESS CAB SR5   TUNDRA CRE   TUNDRA CREWMAX 1794/PLATINUM   TUNDRA CREWMAX 1794/PLATNUM   TUNDRA CREWMAX 4.6L   TUNDRA CREWMAX LIMITED   TUNDRA CREWMAX LTD/PLATINUM   TUNDRA CREWMAX SR5   TUNDRA DOU   TUNDRA DOUBLE CAB LIMITED   TUNDRA DOUBLE CAB SR/SR5   TUNDRA DOUBLE CAB SR/SR5/TRD PRO   TUNDRA DOUBLE CAB SR5   TUNDRA LIMITED   TUNDRA LIMITED 5.7L CREWMAX   TUNDRA LIMITED 5.7L DOUBLE CAB   TUNDRA LIMITED 5.7L FFV CREWMAX   TUNDRA LIMITED ACCESS CAB   TUNDRA LIMITED CREWMAX   TUNDRA LIMITED DOUBLE CAB   TUNDRA LIMITED DOUBLE CAB 5.7L   TUNDRA PLATINUM   TUNDRA SR/SR5 5.7L DOUBLE CAB   TUNDRA SR/SR5 DOUBLE CAB   TUNDRA SR/SR5/TRD DOUBLE CAB   TUNDRA SR5   TUNDRA SR5 CREWMAX 4.6L   TUNDRA SR5 CREWMAX 5.7L   TUNDRA SR5 CREWMAX 5.7L FFV   TUNDRA TUNDRA DOUBLE CAB 4.6L   TUNDRA TUNDRA SR/SR5 DOUBLE CAB 4.6L   TUNDRA TUNDRA-GRADE 5.7L DOUBLE CAB   TUNDRA TUNDRA-GRADE 5.7L FFV DOUBLE CAB   TUNDRA TUNDRA-GRADE CREWMAX 4.6L   TUNDRA TUNDRA-GRADE CREWMAX 5.7L   TUNDRA TUNDRA-GRADE CREWMAX 5.7L FFV   TUNDRA TUNDRA-GRADE DOUBLE CAB 4.0L   TUNDRA TUNDRA-GRADE DOUBLE CAB 4.6L   TUNDRA-GRADE 5.7L DOUBLE CAB   VENZA   VENZA  I4   VENZA 4X4   VENZA 4X4 I4   VENZA BASE   VENZA I4   VENZA LE   VENZA LE I4   VENZA LE/XLE   VENZA LE/XLE/LIMITED   VENZA XLE   VENZA XLE I4   VENZA XLE/LIMITED   YARIS   YARIS   4-SPEED AT   YARIS  4-SPEED AT   YARIS 5-DOOR   YARIS BASE   YARIS HATCHBACK   YARIS IA   YARIS L   YARIS L/LE/SE   YARIS LIFTBACK 5-DOOR MT  YARIS S".split('   '),

      };
    },
    created: function () {
      this.loadInfo();
    },
    on: {
      pageBeforeRemove() {
        const self = this;
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
        const vehicleTypeValues = self.vehicleTypeValues;
        const makeValues = self.makeValues;
        const modelValues = self.modelValues;
        const trimValues = self.trimValues;

        self.autocompleteVehicleType = createSelect("#autocomplete-vehicle-type", vehicleTypeValues, "vehicleType");
        self.autocompleteMake = createSelect("#autocomplete-make", makeValues, "makeValue");
        self.autocompleteModel = createSelect("#autocomplete-model", modelValues, "model");
        self.autocompleteTrimValue = createSelect("#autocomplete-trim-value", trimValues, "trimValue");

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
        // axios.get('https://www.auctionexport.com/en/Inventory/get_Models_Filtered?autoMake=ACURA')
        //   .then(function (response) {
        //     console.info("response: ", response);
        //   })
        //   .catch(function (error) {
        //     console.error("Error: ", error);
        //   });

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
