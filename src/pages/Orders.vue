<template>
  <q-page class="flex flex-center">

    <div class="row">
      <!-- Days Orders -->
      <div class="col">
        <q-card class="cardIndex" style="overflow-y: scroll">
          <q-item>
            <q-item-label class="text-h4" style="margin-top: 10px;">Days Orders</q-item-label>
          </q-item>
          <q-card-section>
            <q-separator/>
            <q-list separator>

              <q-item clickable v-ripple v-for="order in 40" :key="order" @click="changeOrderNum(order), orderDisplay = true">
                <q-item-section>
                  <q-item-label>Table {{order}}</q-item-label>
                  <q-item-label caption>Order #{{order}}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Time: 15:15</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Total: 17.80€</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-card-section>
        </q-card>

        <q-card class="cardOrder" v-ripple>

        </q-card>
      </div>
      <!-- Active Orders -->
      <div class="col">
        <q-card class="cardIndex" style="overflow-y: scroll">
          <q-item>
            <q-item-label class="text-h4" style="margin-top: 10px;">Active Orders</q-item-label>
          </q-item>
          <q-card-section>
            <q-separator/>
            <q-list separator>

              <q-item clickable v-ripple v-for="order in 20" :key="order" @click="changeOrderNum(order), orderDisplay = true">
                <q-item-section>
                  <q-item-label>Table {{order}}</q-item-label>
                  <q-item-label caption>Order #{{order}}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Time: 15:15</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Total: 17.80€</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-card-section>
        </q-card>

        <q-card class="cardOrder" v-ripple>
          
        </q-card>
      </div>
    </div>

    <!-- Order Details Dialog -->
    <q-dialog v-model="orderDisplay">
      <q-card class="cardDialog">
        <q-item>
          <q-item-section>
            <q-item-label class="text-h5" style="margin-top: 10px;">Table {{orderNum}}</q-item-label>
            <q-item-label caption style="margin-left: 2px; margin-bottom: -5px;">Order #{{orderNum}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-section>
          <q-separator/>
          <q-item-label class="text-h6" style="margin-top: 15px;">Name: Oikonomou Konstantinos</q-item-label>
          <q-item-label class="text-h7 text-grey">Individuals: 2</q-item-label>
          <q-item-label class="text-h6" style="margin-top: 15px;">Arrival Time: 15:15</q-item-label>
          <q-item-label class="text-h6" style="margin-top: 15px;">Order:</q-item-label>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6" style="color: grey;">X2 Roasted Chicken<q-item-label style="float: right;">5.40€</q-item-label></q-item-label>
              <q-item-label class="text-h6" style="color: grey;">X2 Fried Potatos<q-item-label style="float: right;">2.30€</q-item-label></q-item-label>
              <q-item-label class="text-h6" style="color: grey;">X2 Coke Zero<q-item-label style="float: right;">1.20€</q-item-label></q-item-label>
            </q-item-section>
          </q-item>
          <q-item-label class="text-h6" style="margin-top: 10px;">Total: <q-item-label style="margin-right: 4px; float: right;">17.80€</q-item-label></q-item-label>
          <div style="margin-top: 40px;">
            <q-btn label="Close Order" type="submit" color="primary" style="float: right; margin-bottom: 20px;"/>
            <q-btn label="Edit Order" type="reset" color="primary" flat class="q-ml-sm" style="float: right; margin-right: 20px; margin-bottom: 20px;"/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog> 
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageOrders',
  
  setup (){
    const $q = useQuasar()
    const orderDisplay = ref(false)
    const orderNum = ref(null)

    return {
      orderDisplay,
      orderNum,

      changeOrderNum (order) {
        orderNum.value = order
      }
    }
  }
})
</script>
