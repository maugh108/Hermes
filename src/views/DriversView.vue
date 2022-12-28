<template>
    <v-container>
        <v-row class="pa-10">
            <v-btn color="primary" @click="CargarOrdenes">Cargar Conductores</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success">Agregar Conductor</v-btn>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" >
                    <template v-slot:item="row">
                        <tr>
                            <td>{{row.item.Nombre}}</td>
                            <td>{{row.item.Nacimineto}}</td>
                            <td>{{row.item.Licencia}}</td>
                            <td>{{row.item.Expiracion}}</td>
                            <td>{{row.item.Ciudad}}</td>
                            <td>{{row.item.Telefono}}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default{
        name:'Conductores',
        data(){
            return{
                headers: [
                    { text: 'Nombre'},
                    { text: 'Fecha de Nacimiento'},
                    { text: 'Licencia' },
                    { text: 'Expiracion' },
                    { text: 'Ciudad' },
                    { text: 'Telefono' },
                ],
                items:[],
                backendData: [
                    {Nombre: "Alberto Guajardo", Nacimineto: "22/02/91", Licencia: "xx2154584",  Expiracion: "04/05/2024", Ciudad:"Monterrey", Telefono: "8121208059"},
                    {Nombre: "Alberto Guajardo", Nacimineto: "22/02/91", Licencia: "xx2154584",  Expiracion: "04/05/2024", Ciudad:"Monterrey", Telefono: "8121208059"},
                    {Nombre: "Alberto Guajardo", Nacimineto: "22/02/91", Licencia: "xx2154584",  Expiracion: "04/05/2024", Ciudad:"Monterrey", Telefono: "8121208059"},
                    {Nombre: "Alberto Guajardo", Nacimineto: "22/02/91", Licencia: "xx2154584",  Expiracion: "04/05/2024", Ciudad:"Monterrey", Telefono: "8121208059"},
                    {Nombre: "Alberto Guajardo", Nacimineto: "22/02/91", Licencia: "xx2154584",  Expiracion: "04/05/2024", Ciudad:"Monterrey", Telefono: "8121208059"},
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