<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">

        <!-- Shop Overview Card -->
        <q-card class="cardIndex">
          <q-img
            v-ripple
            src="https://cdn.e-food.gr/cdn-cgi/image/w=800,h=450,fit=cover,q=100,f=auto/restaurants/4461917/banner_item/000000000012?c=5a2f12c4dde63ec40631e077bff7aef8"
          />
          <q-card-section>
            <q-item>
              <q-item-label class="text-h4" style="margin-bottom: 30px;">My Restaurant</q-item-label>
            </q-item>
            <div style="margin-bottom: 20px;">
              <q-item clickable v-ripple to="/menu">
                <q-item-section>
                  <q-item-label class="text-h5">Menu Items:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h5">15</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Foods:</q-item-label>
                  <q-item-label class="text-h6">Drinks:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6">8</q-item-label>
                  <q-item-label class="text-h6">7</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div style="margin-bottom: 25px;">
              <q-item clickable v-ripple to="tables">
                <q-item-section>
                  <q-item-label class="text-h5">Tables:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h5">24</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Available:</q-item-label>
                  <q-item-label class="text-h6">Booked:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6">14</q-item-label>
                  <q-item-label class="text-h6">10</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <!-- Shop Owner Only View-->
            <div v-if="user==='owner'">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-h5">Days Total:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h5">2.400€</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="cardNavigation" v-ripple @click="navigation('menu')">
          <q-card-section class="flex flex-center">
            <q-item>
              <q-item-label class="text-h3" style="margin-top: 5px;">Menu</q-item-label>
            </q-item>
          </q-card-section>
        </q-card>

        <q-card class="cardNavigation" v-ripple @click="navigation('tables')">
          <q-card-section class="flex flex-center">
            <q-item>
              <q-item-label class="text-h3" style="margin-top: 5px;">Tables</q-item-label>
            </q-item>
          </q-card-section>
        </q-card>

        <q-card class="cardNavigation" v-ripple @click="navigation('orders')">
          <q-card-section class="flex flex-center">
            <q-item>
              <q-item-label class="text-h3" style="margin-top: 5px;">Orders</q-item-label>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
      <div class="col">

        <!-- Order List Card -->
        <q-card class="cardIndex" style="overflow-y: scroll">
          <q-card-section>
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

        <!-- Shop Owner Only View -->
        <div v-if="user==='owner'">
          <!-- Add Handlers -->
          <q-card class="cardAdd" clickable v-ripple @click="addItem = true">
            <q-card-section>
              <q-item-label class="text-h5" style="margin-top: 4px;">
                <q-icon name="add" style="font-size: 35px;"/>
                Add Item
              </q-item-label>
            </q-card-section>
          </q-card>
          
          <q-card class="cardAdd" clickable v-ripple @click="addTable = true">
            <q-card-section>
              <q-item-label class="text-h5" style="margin-top: 4px;">
                <q-icon name="add" style="font-size: 35px;"/>
                Add Table
              </q-item-label>
            </q-card-section>
          </q-card>

          <!-- Edit Handlers -->
          <q-card class="cardEdit" clickable v-ripple>
            <q-card-section>
              <q-item-label class="text-h5" style="margin-top: 4px;">
                <q-icon name="edit" style="font-size: 35px;"/>
                Edit Item
              </q-item-label>
            </q-card-section>
          </q-card>

          <q-card class="cardEdit" clickable v-ripple>
            <q-card-section>
              <q-item-label class="text-h5" style="margin-top: 4px;">
                <q-icon name="edit" style="font-size: 35px;"/>
                Edit Table
              </q-item-label>
            </q-card-section>
          </q-card>

          <q-card class="cardEdit" clickable v-ripple>
            <q-card-section>
              <q-item-label class="text-h5" style="margin-top: 4px;">
                <q-icon name="edit" style="font-size: 35px;"/>
                Edit Shop
              </q-item-label>
            </q-card-section>
          </q-card>
        </div>

        <!-- Waiter Only View -->
        <div v-if="user==='waiter'">
          <!-- New Order Card -->
          <q-card class="cardOrder" v-ripple>
            <q-card-section>
              <q-item-label class="text-h5" style="margin-bottom: 10px;">New Order</q-item-label>
              <q-separator dark/>

              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Table:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <!-- Table Handler -->
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Order:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <!-- Order Handler -->
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Total:</q-item-label>
                </q-item-section>
                <q-item-section>
                  <!-- Total Handler -->
                </q-item-section>
              </q-item>

              <q-btn class="addBtn">Add Order</q-btn>

              <q-btn class="cancelBtn" flat>Cancel</q-btn>
            </q-card-section>
          </q-card>
        </div>

      </div>  
    </div>

    <!-- Add Item Dialog -->
    <q-dialog v-model="addItem">
      <q-card class="cardDialog">
        <q-card-section>
          <q-item-label class="text-h5" style="margin-bottom: 10px;">Add Menu Item</q-item-label>
          <q-separator style="margin-bottom: 20px;"/>
          <q-separator dark style="margin-bottom: 10px;"/>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-uploader
              label="Upload Image"
              auto-upload
              url="http://localhost:8081/upload"
              accept=".jpg, image/*"
              style="width: 96%;"
            />

            <q-input
              v-model="name"
              label="Item name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              autogrow
              v-model="description"
              label="Item Description"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              type="number"
              prefix="€"
              v-model="price"
              label="Price"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type a price',
                val => val > 0 || 'Please type a real price'
              ]"
            />

            <div>
              <q-btn label="Save Item" type="submit" color="primary" style="float: right; margin-bottom: 20px;"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" style="float: right; margin-right: 10px; margin-bottom: 20px;"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Add Table Dialog -->
    <q-dialog v-model="addTable">
      <q-card class="cardDialog">
        <q-card-section>
          <q-item-label class="text-h5" style="margin-bottom: 10px;">Add Table</q-item-label>
          <q-separator style="margin-bottom: 20px;"/>
          <q-separator dark style="margin-bottom: 10px;"/>
          <q-item-label class="text-h5" style="margin-bottom: 35px; color: grey;">Table 21</q-item-label>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >

            <q-input
              v-model="name"
              type="number"
              label="Seats"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type a price',
                val => val > 0 || 'Please type a real price'
              ]"
            />

            <q-input
              autogrow
              v-model="description"
              label="Table Description"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              type="number"
              prefix="€"
              v-model="price"
              label="Minimum Order"
              style="margin-bottom: 35px;"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type a price',
                val => val > 0 || 'Please type a real price'
              ]"
            />

            <div>
              <q-btn label="Save Item" type="submit" color="primary" style="float: right; margin-bottom: 20px;"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" style="float: right; margin-right: 10px; margin-bottom: 20px;"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

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
  name: 'PageIndex',

  setup () {
    const $q = useQuasar()

    const user = ref('owner')

    const name = ref(null)
    const description = ref(null)
    const price = ref(null)

    const addItem = ref(false)
    const addTable = ref(false)
    const orderDisplay = ref(false)

    const orderNum = ref(null)

    return {
      user,
      name,
      description,
      price,
      addItem,
      addTable,
      orderDisplay,
      orderNum,

      onSubmit () {
          $q.notify({
            color: 'positive',
            textColor: 'white',
            icon: 'check',
            message: 'Submitted'
          })
          addItem.value = false
          addTable.value = false
      },

      onReset () {
        name.value = null
        description.value = null
        price.value = null
      },

      changeOrderNum (order) {
        orderNum.value = order
      },

      navigation (page) {
        this.$router.push("/"+page)
      }
    }
  }
})
</script>
