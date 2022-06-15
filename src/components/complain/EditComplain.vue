<template>
<!--  기존 회원이 있을 경우 currentCustomer != null-->
  <div v-if="currentComplain">
<!--    mb-3 : m(margin), b(bottom), 1:25px,2:50px l(left), r(right), p(padding)-->
    <div class="mb-3">
      <label for="title" class="form-label">
        Title
      </label>
      <input type="text" class="form-control" id="title" required name="title" v-model="currentComplain.title">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">
        Content
      </label>
      <input type="text" class="form-control" id="content" required name="content" v-model="currentComplain.content">
    </div>
    <div class="mb-3">
      <label for="targetPage" class="form-label">
        TargetPage
      </label>
      <input type="text" class="form-control" id="targetPage" required name="targetPage" v-model="currentComplain.targetPage">
    </div>
    <div class="mb-3">
      <label for="writer" class="form-label">
        writer
      </label>
      <input type="text" class="form-control" id="writer" required name="writer" v-model="currentComplain.writer">
    </div>
    <div class="mb-3">
      <button @click="updateComplain" class="btn btn-primary me-3">Update </button>
      <button @click="deleteComplain" class="btn btn-danger">Delete</button>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{message}}
    </div>
  </div>
</template>

<script>
//화면 설명 : 회원정보 수정/삭제 화면
import ComplainDataService from "@/services/ComplainDataService";
export default {
  name: "edit-complain",
  data(){
    return{
      currentComplain:null,
      message:''
    }
  },
  methods:{
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getComplain(no){
      ComplainDataService.get(no)
          .then((response)=>{
            this.currentComplain = response.data;
          }).catch((e)=>{
            alert(e);
      })
    },
    updateComplain(){
      ComplainDataService.update(this.currentComplain.no, this.currentComplain)
          .then(()=>{
            this.message = 'The Complain was updated successfully!';
          }).catch((e)=>{
            alert(e);
      })
    },
    deleteComplain(){
      ComplainDataService.delete(this.currentComplain.no)
          .then(()=>{
            //router/index.js 안에 name
            //화면 이동 : customers 화면으로 이동됨
            //route : 매개변수 접근
            //router : 화면이동
            this.$router.push({name:'complainMenu'});
          }).catch((e)=>{
            alert(e);
      })
    }
  },
  //http://localhost:8000/:id
  //$route : router/index.js, params.id
  mounted() {
    alert(this.currentComplain);
    this.getComplain(this.$route.params.no);
  }
}
</script>

<style scoped>

</style>