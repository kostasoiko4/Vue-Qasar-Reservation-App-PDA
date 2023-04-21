<template>
  <q-page class="flex flex-center">

    <!-- Food Items -->
    <div v-for="row in 10" :key="row">
      <div class="row">
          <div class="col">

            <q-card class="cardMenu">
              <q-img
                v-ripple
                class="cardImg"
                src="https://cdn.e-food.gr/cdn-cgi/image/w=800,h=450,fit=cover,q=100,f=auto/restaurants/4461917/banner_item/000000000012?c=5a2f12c4dde63ec40631e077bff7aef8"
              />
              <q-card-section>
                <div class="row">
                  <div class="col-7">
                    <div>
                      <q-item-label class="text-h5">Roasted Chicken</q-item-label>   
                      <q-item-label caption >#143F3DR</q-item-label>
                    </div>
                    <div style="margin-top: 10px;">
                      <q-item-label class="text-h6">Price: 3.50$</q-item-label>
                      <q-item-label >Inventory: 15</q-item-label>
                    </div>
                  </div>
                  <div class="col flex flex-center">
                    <q-item-label class="quantityText text-h4">1</q-item-label>
                    <q-btn class="removeButton" label="remove"/>
                  </div>    
                </div>     
              </q-card-section>
            </q-card>

          </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageMenu'
})
</script>
