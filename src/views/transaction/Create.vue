<template>
  <NavbarTransaction/>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link to="/transaction" class="btn btn-primary btn-sm my-2">Kembali</router-link>
        <!-- form untuk create transaction -->
        <div class="card rounded-shadow">
          <div class="card-header">
            BUAT TRANSAKSI
          </div>
          <div class="card-body">
            <form @submit.prevent="store()">
              <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" v-model="transaction.title">
                <div class="text-danger">
                  Validasi gagal
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Amount</label>
                <input type="text" class="form-control" v-model="transaction.amount">
                <div class="text-danger">
                  Validasi gagal
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Transaction Time</label>
                <input type="text" class="form-control" placeholder="yyyy-mm-dd hh:mm:ss" v-model="transaction.time">
                <div class="text-danger">
                  Validasi gagal
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Type</label>
                <select id="" class="form-select" v-model="transaction.type">
                  <option value="expense">EXPANSE</option>
                  <option value="revenue">REVENUE</option>
                </select>
              </div>
              <button class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarTransaction from '@/components/navbarTransaction.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';


export default {
  name: 'CreateTransaction',
  components: {
    NavbarTransaction,
  },

  // API COMPOSISION
  setup() { 
  //  data binding
    const transaction = reactive({
      title: '',
      amount: '',
      time: '',
      type: ''
    });


    const validation = ref([]);

    const router = useRouter();

    function store() { 
      axios.post(
        'http://laravel-vue-payment.dev/api/transaction-post', transaction
      )
        .then(() => {
          router.push({
            name: 'transaction.index'
          });
        }).catch((err) => {
          validation.value = err.response.data
         });
    }

    return {
      transaction,
      validation,
      router,
      store
    }
  }

  
};
</script>