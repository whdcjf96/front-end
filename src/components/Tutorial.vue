<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentTutorial.title">
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="currentTutorial.description">
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ (currentTutorial=="Y") ? "Published" : "Pending" }}
      </div>
    </form>
<!--    form 끝-->

<!--    button 시작-->
      <!--      click시 published == Y-->
      <!--      다시 click시 published==N-->
      <button class="badge badge-primary mr-2" v-if='currentTutorial.published=="Y"' @click="updatePublished(false)">
        UnPublish
      </button>
      <button class="badge badge-primary mr-2" v-else @click="updatePublished(true)">
        Publish
      </button>
      <!--      delete 버튼-->
      <button class="badge badge-danger mr-2" @click="deleteTutorial">
        Delete
      </button>

      <!--      update 버튼-->
      <button type="submit" class="badge badge-success" @click="updateTutorial">
        Update
      </button>
    <!--    button 끝-->
      <p>{{ message }}</p>

  </div>
  <div v-else>
    <br>
    <p>Please click on a Tutorial...</p>
  </div>
</template>

/
<script>
import TutorialDataService from "@/services/TutorialDataService";
// 아래 eslint 적용 예외 처리
/* eslint-disable */
export default {
  name : "tutorial",
  data(){
    return{
      currentTutorial : null,
      message : ''
    };
  },
  methods:{
  //  id로 tutorial 데이터 상세 조회
  //  백엔드쪽에 요청
    getTutorial(id){
      //id로 벡엔드쪽에 요청하는 메소드
      TutorialDataService.get(id)
          .then(response => {
          //  response.data : 백엔드쪽에서 온 데이터
          //  response.data : tutorial 객체
            this.currentTutorial=response.data;
            console.log(response.data);

          }).catch(e => {
            console.log(e);
      })
    },

  //  tutorial 데이터 수정 메소드 호출
    updateTutorial(){
      //백엔드쪽에 id로 검색해서 데이터 수정 요청
      TutorialDataService.update(this.currentTutorial.id,this.currentTutorial)
          .then(response => {
            this.message='The tutorial was updated successfully!';
            console.log(response.data);
          }).catch(e => {
            console.log(e);
      })
    },

  //  백엔드쪽에 데이터 삭제 요청 메소드
    deleteTutorial(){
    //  백엔드쪽에 id로 데이터 삭제 요청
      TutorialDataService.delete(this.currentTutorial.id)
          .then(response => {
            console.log(response.data);
          //  TutorialsList 감(첫화면)
          //  this.$router.push(갈 페이지)
            this.$router.push({name: "tutorials"});
          }).catch(e => {
            console.log(e);
      })
    },
    //tutorial 테이블 published 컬럼 : Y or N
    //Published 컬럼을 수정하는 메소드
    updatePublished(status){
    // Todo : 나중에 천천히 작성
    }
  },
  // vue 화면이 로딩될때 자동으로 실행되는 이벤트
  mounted() {
    this.message='';
    // router/index.js => path: '/tutorials/:id'
    this.getTutorial(this.$route.params.id);
  }
}
</script>

<style>
  .edit-form{
    max-width: 300px;
    margin: auto;
  }
</style>