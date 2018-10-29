<template>
  <div :class="{'current-day': isCurDate,
                'day-in-month': true }"
       :style="{backgroundImage: `url(${imageUrl})`}">
    <div>
      <span>{{date}}</span>
      <v-btn absolute fab light small >
        <v-icon dark>add</v-icon>
      </v-btn>
      <v-btn  absolute  fab light small @click="onChooseFile">
        <v-icon light >save_alt</v-icon>
      </v-btn>
      <input type="file"
             accept=".png, .jpg, .jpeg, .svg"
             ref="fileInput"
             style="display: none;"
             @change="onFilePicked">
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      date:{
        type: Number
      },
      isCurDate:{
        type: Boolean
      }
    },
    data(){
      return{
        image: null,
        imageUrl: ''
      }
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
      }
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
  .day-in-month > div > button:nth-child(2){
    bottom: 10%;
    right: 10%;
  }
  .day-in-month > div > *:nth-child(3){
    top: 10%;
    right: 10%;
  }
  .current-day{
    background-color: #97eacc;
  }
  @media screen and (max-width: 600px){
    .day-in-month > div > span{
      font-size: 12px;
    }
  }
</style>
