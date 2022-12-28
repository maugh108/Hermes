<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center" >
      <v-col class="max-height" cols="12" md="4" align="center" >
        <div class="primary fill-height mx-4 dashboard-overflow">
          <h1 class="white--text">Ordenes Nuevas</h1>
          <OrderCard v-for="(order, index) in newOrders" :order="order" :key="index"/>
        </div>
      </v-col>
      <v-col class="max-height" cols="12" md="4" align="center">
        <div class="primary fill-height mx-4 dashboard-overflow">
          <h1 class="white--text">Ordenes En Curso</h1>
          <OrderCard v-for="(order, index) in currentOrders" :order="order" :key="index"/>
        </div>
      </v-col>
      <v-col class="max-height" cols="12" md="4" align="center">
        <div class="primary fill-height mx-4 dashboard-overflow">
          <h1 class="white--text">Ordenes Entregadas</h1>
          <OrderCard v-for="(order, index) in deliveredOrders" :order="order" :key="index"/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import OrderCard from '../components/OrderCard.vue';
  export default {
    name: 'Home',
    data(){
      return{
        newOrders:[
          {origen: "San antonio TX", destino: "Monterry", driver:"Alberto", trailer:"123", truck:"123"},
          {origen: "Nuevo Laredo Tp", destino: "Laredo Texas", driver:"Sergio Liogon", trailer:"dsa", truck:"412e"},
          {origen: "Monterry NL", destino: "NewYork", driver:"Miguel Moore", trailer:"asd12", truck:"edw"},
          {origen: "Laredo Texas", destino: "Nuevo Laredo", driver:"Rafael Salazar", trailer:"12", truck:"123123"},
          {origen: "Dallas TX", destino: "San antonio TX", driver:"JGL", trailer:"as1", truck:"53424312"}
        ],
        currentOrders:[
          {origen: "San antonio TX", destino: "Monterry", driver:"Alberto", trailer:"123", truck:"123"},
          {origen: "Nuevo Laredo Tp", destino: "Laredo Texas", driver:"Sergio Liogon", trailer:"dsa", truck:"412e"},
          {origen: "Monterry NL", destino: "NewYork", driver:"Miguel Moore", trailer:"asd12", truck:"edw"},
          {origen: "Laredo Texas", destino: "Nuevo Laredo", driver:"Rafael Salazar", trailer:"12", truck:"123123"},
          {origen: "Dallas TX", destino: "San antonio TX", driver:"JGL", trailer:"as1", truck:"53424312"}
        ],
        deliveredOrders:[
          {origen: "San antonio TX", destino: "Monterry", driver:"Alberto", trailer:"123", truck:"123"},
          {origen: "Nuevo Laredo Tp", destino: "Laredo Texas", driver:"Sergio Liogon", trailer:"dsa", truck:"412e"},
          {origen: "Monterry NL", destino: "NewYork", driver:"Miguel Moore", trailer:"asd12", truck:"edw"},
          {origen: "Laredo Texas", destino: "Nuevo Laredo", driver:"Rafael Salazar", trailer:"12", truck:"123123"},
          {origen: "Dallas TX", destino: "San antonio TX", driver:"JGL", trailer:"as1", truck:"53424312"}
        ]
      }
    },
    components:{
      OrderCard
    }
  }
</script>

<style>
  .max-height{
    height: 93vh;
  }
  .dashboard-overflow{
    overflow-y: auto;
    overflow-anchor: 1px;
  }
</style>
