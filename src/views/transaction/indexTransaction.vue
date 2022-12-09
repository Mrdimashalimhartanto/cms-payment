<template>
  <navbarTransaction/>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link to="/create-transaction" class="btn btn-primary btn-sm rounded shadow mb-3">
          buat transaksi
        </router-link>
        <!-- card & table -->
        <div class="card rounded shadow">
          <div class="card-header">
            TRANSACTION LIST
          </div>
          <div class="table-wrapper">
            <table class="table-responsive card-list-table">
              <thead>
                <th>Nama</th>
                <th>order id</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Channel</th>
                <th>Transaction Time</th>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in transaction.data" :key="index">
                  <td>{{transaction.name}}</td>
                  <td>{{transaction.order_id}}</td>
                  <td>{{transaction.amount}}</td>
                  <td>{{transaction.status}}</td>
                  <td>{{transaction.payment_channel}}</td>
                  <td>{{transaction.created_time}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <div class="card-body">
            <div class="table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>order id</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Payment Channel</th>
                  <th>Transaction Time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in transaction.data" :key="index">
                  <td>{{transaction.name}}</td>
                  <td>{{transaction.order_id}}</td>
                  <td>{{transaction.amount}}</td>
                  <td>{{transaction.status}}</td>
                  <td>{{transaction.payment_channel}}</td>
                  <td>{{transaction.created_time}}</td>
                  <td>
                    <div class="btn-group">
                      <router-link :to="{ name: 'EditTransaction', params: {id: 1}}" class="btn btn-sm btn-warning">
                        EDIT
                      </router-link>
                      <button class="btn btn-sm btn-danger">DELETE</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarTransaction from '@/components/navbarTransaction.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue';


export default {
  'name': 'indexTransaction',
  components: {
    navbarTransaction,
  },

  // GET API AXIOS
  setup() { 
    // reactive state

    let transaction = ref([]);

    onMounted(() => { 
      // get data api endpoint
      axios.get('http://be_laravel_jwt.dev/api/auth/view_get_list_trans_charge')
        .then((result) => {
          transaction.value = result.data
        }).catch((err) => { 
          console.log(err.response)
        });
    });

    return {
      transaction
    }

  }
};
</script>