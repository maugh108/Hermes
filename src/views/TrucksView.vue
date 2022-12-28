<template>
  <v-container>
        <v-row class="pa-10">
            <v-btn color="primary" @click="CargarOrdenes">Cargar camiones</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">Agregar Camion</v-btn>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" >
                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.Numero}}</td>
                            <td>{{row.item.Marca}}</td>
                            <td>{{row.item.Modelo}}</td>
                            <td>{{row.item.Año}}</td>
                            <td>{{row.item.VINnumber}}</td>
                            <td>{{row.item.Placas}}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default{
        name:'Trucks',
        data(){
            return{
                headers: [
                    { text: 'Numero'},
                    { text: 'Marca'},
                    { text: 'Modelo' },
                    { text: 'Año'},
                    { text: 'VIN Number'},
                    { text: 'Placas'},
                ],
                items:[],
                backendData: [
                    {Numero: "15", Marca: "Ford", Modelo: "150", Año: "2015", VINnumber: "1XKAD49X9BJ276534", Placas:"T146562"},
                    {Numero: "15", Marca: "Ford", Modelo: "150", Año: "2015", VINnumber: "1XKAD49X9BJ276534", Placas:"T146562"},
                    {Numero: "15", Marca: "Ford", Modelo: "150", Año: "2015", VINnumber: "1XKAD49X9BJ276534", Placas:"T146562"},
                    {Numero: "15", Marca: "Ford", Modelo: "150", Año: "2015", VINnumber: "1XKAD49X9BJ276534", Placas:"T146562"},
                    {Numero: "15", Marca: "Ford", Modelo: "150", Año: "2015", VINnumber: "1XKAD49X9BJ276534", Placas:"T146562"},
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