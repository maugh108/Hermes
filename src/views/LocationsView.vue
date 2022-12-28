<template>
 <v-container>
        <v-row class="pa-10">
            <v-btn color="primary" @click="CargarOrdenes">Cargar Direcciones</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">Agregar Direccion</v-btn>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" >
                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.Calle}}</td>
                            <td>{{row.item.Ciudad}}</td>
                            <td>{{row.item.Estado}}</td>
                            <td>{{row.item.Codigo}}</td>
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
                    { text: 'Calle'},
                    { text: 'Ciudad'},
                    { text: 'Estado'},
                    { text: 'Codigo Postal'},
                ],
                items:[],
                backendData: [
                    {Calle: "932 jose Chavez Morado",  Ciudad: "San nicolas de los Garza", Estado: "Nuevo Leon", Codigo: "66414",},
                    {Calle: "932 jose Chavez Morado",  Ciudad: "San nicolas de los Garza", Estado: "Nuevo Leon", Codigo: "66414",},
                    {Calle: "932 jose Chavez Morado",  Ciudad: "San nicolas de los Garza", Estado: "Nuevo Leon", Codigo: "66414", },
                    {Calle: "932 jose Chavez Morado",  Ciudad: "San nicolas de los Garza", Estado: "Nuevo Leon", Codigo: "66414",},
                    {Calle: "932 jose Chavez Morado",  Ciudad: "San nicolas de los Garza", Estado: "Nuevo Leon", Codigo: "66414",}
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