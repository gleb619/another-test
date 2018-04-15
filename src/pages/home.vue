<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <!-- <f7-accordion>
       &lt;!&ndash; Item 1 &ndash;&gt;
       <f7-accordion-item>
         <f7-accordion-toggle>Item 1</f7-accordion-toggle>
         <f7-accordion-content>
           Item 1 content...
         </f7-accordion-content>
       </f7-accordion-item>
       &lt;!&ndash; Item 2 &ndash;&gt;
       <f7-accordion-item>
         <f7-accordion-toggle>Item 2</f7-accordion-toggle>
         <f7-accordion-content>
           Item 2 content...
         </f7-accordion-content>
       </f7-accordion-item>
     </f7-accordion>-->

    <f7-block-title>Image</f7-block-title>
    <f7-row no-gap>
      <f7-col width="25"></f7-col>
      <f7-col width="50"><img src="../img/logo.png"></f7-col>
    </f7-row>
    <!--<img src="../logo.png">-->

    <f7-block-title>Actions</f7-block-title>
    <f7-block>
      <f7-row>
        <f7-col width="30">
          <f7-button fill @click="sendAddress()" icon-fa="home">Open</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-actions :opened="testVar" @close="doSomething" @closed="doSomething">
      <!-- Actions Group -->
      <f7-actions-group>
        <!-- Actions Label -->
        <f7-actions-label>Hello</f7-actions-label>
        <!-- Actions Buttons -->
        <f7-actions-button>Button 1</f7-actions-button>
        <f7-actions-button @click="doSomething">Button 2</f7-actions-button>
      </f7-actions-group>
      <!-- Another Group -->
      <f7-actions-group>
        <!-- Cancel/Close Button -->
        <f7-actions-button color="red" bold>Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

    {{testVar}}
    <f7-badge color="red">5</f7-badge>

    <f7-card title="Card Title" content="Card Content" footer="Card Footer"></f7-card>

    <f7-list>
      <!-- Additional "checkbox" prop to enable checkbox list item -->
      <f7-list-item checkbox value="check_1" checked title="Checkbox 1"></f7-list-item>
      <f7-list-item checkbox value="check_2" title="Checkbox 2"></f7-list-item>
    </f7-list>

    <hr>
    <f7-block-title>Checkbox</f7-block-title>

    <!-- With boolean value -->
    <f7-checkbox :checked="jobIsDone" @change="jobIsDone = $event.target.checked"></f7-checkbox>

    <!-- With array value -->
    <f7-checkbox
      value="banana"
      :checked="fruits.indexOf('banana') >= 0"
      @change="checkFruits"
    ></f7-checkbox>

    <f7-checkbox
      value="orange"
      :checked="fruits.indexOf('orange') >= 0"
      @change="checkFruits"
    ></f7-checkbox>

    <f7-checkbox
      value="apple"
      :checked="fruits.indexOf('apple') >= 0"
      @change="checkFruits"
    ></f7-checkbox>

    <hr>

    <f7-block-title>Chip</f7-block-title>

    <f7-chip text="Example Chip"></f7-chip>

    <!-- Colored Chip -->
    <f7-chip text="Another Chip" color="red"></f7-chip>

    <!-- Media Chip -->
    <f7-chip text="Jane Doe" media="J" media-bg-color="red"></f7-chip>

    <!-- Deleteable Chip -->
    <f7-chip text="Another Chip" deleteable @delete="onChipDelete"></f7-chip>

    <!-- Deleteable Media Chip -->
    <f7-chip text="Jane Doe" media-bg="red" deleteable @delete="onChipDelete($event, 1)" v-if="testVar2">
      <img slot="media" src="http://lorempixel.com/100/100/people/9/">
    </f7-chip>

    <!-- With Icon -->
    <f7-chip text="Add Contact" color="blue">
      <f7-icon slot="media" f7="add_round"></f7-icon>
    </f7-chip>


    <f7-block-title>List</f7-block-title>
    <f7-list>
      <!--<f7-list-group v-for="(group, key) in contacts">-->
      <!--<f7-list-item :title="key" group-title></f7-list-item>-->
      <!--<f7-list-item v-for="name in group" :title="name"></f7-list-item>-->
      <!--</f7-list-group>-->
      <f7-list-group v-for="(contact, $index) in contacts.A" :key="$index">
        <f7-list-item :title="contact"></f7-list-item>
      </f7-list-group>
    </f7-list>

    <f7-fab color="pink" @click="doSomething">
      <f7-icon f7="add"></f7-icon>
    </f7-fab>

    <f7-fab color="pink" @click="doSomething" position="top">
      <f7-icon fa="add"></f7-icon>
    </f7-fab>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <!--<f7-block strong theme-dark="isThemeDark">-->
      <f7-row>
        <!--<f7-col width="50">-->
        <!--<f7-button fill raised v-on:click="sendAddress()">Popup</f7-button>-->
        <!--</f7-col>-->
        <f7-col width="50">
          <f7-button fill raised popup-open="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
  export default {
//  el: '#address-form',
    data() {
      return {
        testVar: false,
        testVar2: true,
        jobIsDone: false,
        fruits: [],
        contacts: {
          'A': [
            'Aaron',
            'Abbie',
            'Adam',
            'Adele',
            'Agatha',
            'Agnes',
            'Albert',
            'Alexander'
          ],
          'B': [
            'Bailey',
            'Barclay',
            'Bartolo',
            'Bellamy',
            'Belle',
            'Benjamin'
          ],
          'C': [
            'Caiden',
            'Calvin',
            'Candy',
            'Carl',
            'Cherilyn',
            'Chester',
            'Chloe'
          ],
          'V': [
            'Vladimir'
          ]
        }
      }
    },
    created: function () {
      const self = this;
      // Create toast
      if (!self.toastCenter) {
        self.toastCenter = self.$f7.toast.create({
          text: 'I\'m on center',
          position: 'center',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastCenter.open();
    },
    methods: {
      sendAddress: function () {
        this.testVar = !this.testVar;
        //http request to server here
      },
      doSomething: function () {
        console.info("123: ", 123);
      },
      checkFruits(event) {
        const self = this;
        const value = event.target.value;
        if (event.target.checked) {
          self.fruits.push(value);
        } else {
          self.fruits.splice(self.fruits.indexOf(value), 1);
        }
      },
      onChipDelete(event, index) {
        this.testVar2 = !this.testVar2;
        console.info("event: ", event);
        console.info("index: ", index);
      }
    },
    pageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.toastCenter) self.toastCenter.destroy();
    }
  }
</script>
