<template>
    <v-container>
        <h1>Crear o Actualizar Direccion</h1>
        <form @submit.prevent="CreateLocation">
            <v-text-field v-model="street"  name="street" outlined filled label="Calle"></v-text-field>
            <v-text-field v-model="city"    name="city" outlined filled label="Ciudad"></v-text-field>
            <v-text-field v-model="state"   name="state" outlined filled label="Estado"></v-text-field>
            <v-text-field v-model="zipcode" name="zipcode" outlined filled label="CP"></v-text-field>
            <v-btn color="primary" type="submit">Crear o Actualizar direccion</v-btn>
        </form>
    </v-container>
</template>
<script>
    export default{
        name:'ExpandLocation',
        data(){
            return{
                street:null,
                city:null,
                state:null,
                zipcode:null
            }
        },
        methods:{
            CreateLocation(){
                const postData = {
                    street: this.street,
                    city: this.city,
                    state: this.state,
                    zipcode: this.zipcode
                }
            },
        }
    }
</script>