<template>
  <div :class="{'current-day': isCurDate,
                'day-in-month': true }"
       :style="{backgroundImage: `url(${imageUrl})`}">
    <div>
      <span>{{calcDate(date)}}</span>
      <v-flex class="day__actions justify-end" >
        <span class="day__icon icon_add" @click="openDialog">
              <v-icon light>add</v-icon>
            </span>
        <span class="day__icon icon_upload" @click="onChooseFile">
              <v-icon light>save_alt</v-icon>
            </span>
      </v-flex>
      <input type="file"
             accept=".png, .jpg, .jpeg, .svg"
             ref="fileInput"
             style="display: none;"
             @change="onFilePicked">
    </div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <create-event-form :date="date" @closeDialog = "dialog=!dialog"></create-event-form>
    </v-dialog>

  </div>
</template>

<script>
  import CreateEventForm from '@/components/CreateEventForm'
  export default {
    props:{
      date:{
        type: Object
      },
      isCurDate:{
        type: Boolean
      }
    },
    components:{
      'create-event-form': CreateEventForm
    },
    data(){
      return{
        image: null,
        imageUrl: '',
        dialog: false
      }
    },
    computed:{

    },
    methods:{
      onChooseFile(){
        this.$refs.fileInput.click();
      },
      onFilePicked(e){
        const files = e.target.files;
        let filename = files[0].name;
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!');
        }
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result;
        });
        fileReader.readAsDataURL(files[0]);
        this.image = files[0];
        console.log(this.image);
      },
      calcDate(date){
        return date.get('date');
      },
      openDialog(){
        this.dialog = !this.dialog
      }
    },
    created(){
    }
  }
</script>

<style scoped>
  .day-in-month{
    position: relative;
    background-position: center;
    /*background-size: 100%;*/
  }
  .day-in-month > div {
    height: 0;
    padding: 10% 10% 80%
  }
  .day-in-month > div > span{
    font-weight: 700;
  }
  .day__actions{
    position: absolute;
    /*background-color: #ececec;*/
    bottom: 0;
    right: 0;
  }
  .day__icon{
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
  /*.day-in-month > div > button:nth-child(2){*/
    /*bottom: 10%;*/
    /*right: 10%;*/
  /*}*/
  /*.day-in-month > div > *:nth-child(3){*/
    /*top: 10%;*/
    /*right: 10%;*/
  /*}*/
  .current-day{
    background-color: #97eacc;
  }
  @media screen and (max-width: 600px){
    .day-in-month > div > span{
      font-size: 12px;
    }
  }
</style>
