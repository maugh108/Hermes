<template>
    <v-container>
        <v-row class="pa-10">
            <v-btn color="primary" @click="CargarOrdenes">Cargar Ordenes</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">Crear Orden</v-btn>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" >
                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.driver}}</td>
                            <td>{{row.item.truck}}</td>
                            <td>{{row.item.trailer}}</td>
                            <td>{{row.item.origen}}</td>
                            <td>{{row.item.destino}}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default{
        name:'Orders',
        data(){
            return{
                headers: [
                    { text: 'Conductor'},
                    { text: 'Camion'},
                    { text: 'Trailer' },
                    { text: 'Origen'},
                    { text: 'Destino' },
                ],
                items:[],
                backendData: [
                    {origen: "San antonio TX", destino: "Monterry", driver:"Alberto", trailer:"123", truck:"123"},
                    {origen: "Nuevo Laredo Tp", destino: "Laredo Texas", driver:"Sergio Liogon", trailer:"dsa", truck:"412e"},
                    {origen: "Monterry NL", destino: "NewYork", driver:"Miguel Moore", trailer:"asd12", truck:"edw"},
                    {origen: "Laredo Texas", destino: "Nuevo Laredo", driver:"Rafael Salazar", trailer:"12", truck:"123123"},
                    {origen: "Dallas TX", destino: "San antonio TX", driver:"JGL", trailer:"as1", truck:"53424312"}
                ]
            }
        },
        methods:{
            CargarOrdenes(){
                this.items = this.backendData
            }
        }
    }
</script>

<style>
</style>