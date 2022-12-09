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
                <th>Title</th>
                <th>Amount </th>
                <th>Type</th>
                <th>Time</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in transaction.data" :key="index">
                  <td>{{transaction.title}}</td>
                  <td>{{transaction.amount}}</td>
                  <td>{{transaction.type}}</td>
                  <td>{{transaction.time}}</td>
                  <td>
                    <div class="btn-group">
                      <router-link :to="{ name: 'transaction.edit', params: {id: transaction.id}}" class="btn btn-sm btn-warning">
                        EDIT
                      </router-link>
                      <button class="btn btn-sm btn-danger">DELETE</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
  'name': 'IndexTransaction',
  components: {
    navbarTransaction,
  },

  // GET API AXIOS
  setup() { 
    // reactive state

    let transaction = ref([]);

    onMounted(() => { 
      // get data api endpoint
      axios.get('http://laravel-vue-payment.dev/api/transaction')
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