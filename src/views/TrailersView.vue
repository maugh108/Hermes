<template>
   <v-container>
        <v-row class="pa-10">
            <v-btn color="primary" @click="CargarOrdenes">Cargar Trailers</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">Agregar trailer</v-btn>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" >
                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.Numero}}</td>
                            <td>{{row.item.Marca}}</td>
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
        name:'Trailers',
        data(){
            return{
                headers: [
                    { text: 'Numero'},
                    { text: 'Marca'},
                    { text: 'Año' },
                    { text: 'Vin Number'},
                    { text: 'Placas' },
                ],
                items:[],
                backendData: [
                    {Numero: "14512", Marca: "Wabash", Año:"2004", VINnumber: "1JJV532W38L107197", Placas: "T1788652"},
                    {Numero: "14512", Marca: "Wabash", Año:"2004", VINnumber: "1JJV532W38L107197", Placas: "T1788652"},
                    {Numero: "14512", Marca: "Wabash", Año:"2004", VINnumber: "1JJV532W38L107197", Placas: "T1788652"},
                    {Numero: "14512", Marca: "Wabash", Año:"2004", VINnumber: "1JJV532W38L107197", Placas: "T1788652"},
                    {Numero: "14512", Marca: "Wabash", Año:"2004", VINnumber: "1JJV532W38L107197", Placas: "T1788652"},
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