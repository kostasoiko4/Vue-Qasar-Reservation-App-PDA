<template>
  <q-page class="flex flex-center">

    <!-- Food Items -->
    <div v-for="row in 20" :key="row">
      <div class="row">
          <div class="col">

            <q-card class="cardMenu">
              <q-img
                v-ripple
                class="cardImg"
                src="https://cdnimg.webstaurantstore.com/uploads/seo_category/2019/5/table-dining-sets.jpg"
              />
              <q-card-section>
                <div class="row">
                  <div class="col-5">
                    <div style="margin-top: 10px;">
                      <q-item-label class="text-h5">Table {{row}}</q-item-label>   
                    </div>
                    <div style="margin-top: 20px;">
                      <q-item-label class="text-h6" style="color: grey;">Seats: 4</q-item-label>   
                    </div>
                  </div>
                  <div class="col">
                    <div style="margin-top: 10px;">
                      <q-item-label class="text-h5" v-if="row > 9">Exterior Table</q-item-label>
                      <q-item-label class="text-h5" v-if="row < 10">Interior Table</q-item-label>      
                    </div>
                    <div style="margin-top: 20px;">
                      <q-item-label class="text-h6" style="color: grey;">Minimum Order: 10$</q-item-label>
                    </div>
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
  name: 'PageTables'
})
</script>
