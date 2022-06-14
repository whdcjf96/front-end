<template>
<!--  새 회원가입일 경우 submitted = false -->
  <div v-if="!submitted">

    <div class="mb-3">
      <label for="Title" class="form-label">
        Title
      </label>
      <input type="text" class="form-control" id="title" required name="title" v-model="complain.title">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">
        Content
      </label>
      <input type="text" class="form-control" id="content" required name="content" v-model="complain.content">
    </div>
    <div class="mb-3">
      <label for="targetPage" class="form-label">
        Target_Page
      </label>
      <input type="text" class="form-control" id="targetPage" required name="targetPage" v-model="complain.targetPage">
    </div>
    <div class="mb-3">
      <label for="writer" class="form-label">
        Writer
      </label>
      <input type="text" class="form-control" id="writer" required name="writer" v-model="complain.writer">
    </div>
      <div class="mb-3">
        <button @click="saveComplain" class="btn btn-primary">Submit</button>
      </div>
    </div>
<!--  저장버튼을 눌렀을 경우-->
  <div v-else>
    <div class="alert alert-success" role="alert">
      Save Complain successfully!
    </div>
    <button @click="newComplain" class="btn btn-primary">
      Add New Complain
    </button>
  </div>
</template>

<script>
import ComplainDataService from "@/services/ComplainDataService";
export default {

  name:"add-customer",
  data(){
    return{
      complain:{
        no:null,
        title:"",
        content:"",
        targetPage:"",
        writer:""
      },
      submitted:false
    }
  },
  methods:{
    //저장 메소드 호출
    saveComplain(){
    //  회원 임시 객체 만들기
      var data = {
        title: this.complain.title,
        content: this.complain.content,
        targetPage: this.complain.targetPage,
        writer: this.complain.writer

      }
    //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      ComplainDataService.create(data)
          .then((response)=>{
            this.complain= response.data.no;
            this.submitted = true; //DB insert 성공
          })
          .catch((e)=>{
            alert(e);
          })
    },
    //새 회원 가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newComplain(){
      this.submitted = false;
      this.complain= {};
    }
  }
}
</script>