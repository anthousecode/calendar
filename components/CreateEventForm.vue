<template>
  <v-card class="pa-4">
    <v-card-title class="mb-3">
      <h3 class="title mb-0">Create an event</h3>
      <p class="headline ml-3"> {{dateStr}}</p>
    </v-card-title>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row justify-space-between>
        <v-flex xs4>
          <p class="subheading">From</p>
          <v-layout row justify-space-between align-center>
            <v-flex xs4>
              <v-text-field type="number"
                            placeholder="00"
                            v-model="hoursFrom"
                            :rules="requiredRules"
                            required
              ></v-text-field>
            </v-flex>
            <div>:</div>
            <v-flex xs4>
              <v-text-field type="number"
                            placeholder="00"
                            v-model="minutesFrom"
                            :rules="requiredRules"
                            required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4>
          <p class="subheading">To</p>
          <v-layout row justify-space-between align-center>
            <v-flex xs4>
              <v-text-field type="number"
                            placeholder="00"
                            v-model="hoursTo"
                            :rules="requiredRules"
                            required
              ></v-text-field>
            </v-flex>
            <div>:</div>
            <v-flex xs4>
              <v-text-field type="number"
                            placeholder="00"
                            v-model="minutesTo"
                            :rules="requiredRules"
                            required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-text-field
        v-model="title"
        :rules="requiredRules"
        label="Title"
        required
      ></v-text-field>
      <v-textarea
        v-model="desc"
        label="Description"
      ></v-textarea>
      <v-flex xs8>
        <v-select
          v-model="status"
          :items="statuses"
          :rules="requiredRules"
          label="Event status"
          required
        ></v-select>
      </v-flex>

      <v-btn
        color="primary"
        flat
        :disabled="!valid"
        @click="submit"
      >
        OK
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-card>
</template>

<script>
  import moment from 'moment';
  export default {
    props: {
      date: {
        type: Object
      }
    },
    data(){
      return {
        hoursFrom: 0,
        hoursTo: 0,
        minutesFrom:0,
        minutesTo:0,
        valid: true,
        title: '',
        desc:'',
        status: null,
        requiredRules: [v => !!v || 'This field is required'],
        statuses:[
          'Status 1',
          'Status 2',
          'Status 3',
          'Status 4'
        ]
      }
    },
    computed:{
      dateStr(){
        return this.date.format("dddd Do MMM YYYY");
      }
    },
    methods:{
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.$emit('closeDialog', {
            title: this.title,
            desc: this.desc,
            status: this.status
          })
        }
      },
      clear(){
        this.$refs.form.reset();
      }
    }
  }
</script>

<style scoped>

</style>
