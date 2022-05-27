<template>
  <div class="list row">
<!--    search 관련 div 시작-->
    <div class="col-md-8">
      <div class="input-group mb-3">
<!--        검색 입력 박스-->
        <input type="text" class="form-control" placeholder="Search by title" v-model="title">
<!--        검색 버튼-->
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
            Search
          </button>
        </div>
      </div>
    </div>
<!--    search 관련 div 끝-->

<!--    목록을 보여주는 div 시작-->
    <div class="col-md-6">
        <h4>Tutorials List</h4>
<!--      제목 목록-->
        <ul class="list-group">
          <li class="list-group-item" :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
              :key = "index"
            @click="setActiveTutorial(tutorial,index)">{{ tutorial.title }}</li>
        </ul>
<!--      모든 목록 삭제 버튼-->
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorial">
          Remove All
        </button>
    </div>
<!--    목록을 보여주는 div 끝-->

<!--    상세 정보를 보여주는 div 시작-->
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Tutorial</h4>
        <div>
            <label><strong>Title:</strong></label>
          {{currentTutorial.title}}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{currentTutorial.description}}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{(currentTutorial.published == "Y") ? "Published" : "Pending"}}
        </div>
<!--        Link 추가-->
        <router-link :to="'/tutorials/' + currentTutorial.id" class="badge badge-primary">
          Edit
        </router-link>
      </div>
<!--      currentTutorial == null이면-->
      <div v-else>
        <br>
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
<!--    상세 정보를 보여주는 div 끝-->
  </div>
</template>

<script>
import TutorialDataService from "@/services/TutorialDataService";

export default {
  name : "toturials-list",
  data(){
    return{
      tutorials:[],
      currentTutorial:null,
      currentIndex: -1,
      title: ""
    }
  },
  methods:{
      //전체 목록 조회 메소드
      retrieveTutorials(){
        //백앤드 쪽으로 전체 데이터 요청
        TutorialDataService.getAll()
      //  성공하면 then으로 들어옴
            //      response : 헤더(상태정보, 쿠키 등), 바디(json)
            //  data : tutorial 객체(백엔드에서 전송됨)
            .then(response => {
                this.tutorials = response.data;
                //데이터가 잘 들어왔는지 로그 확인
                console.log("response.data : ", response.data);
            }).catch(e=>{
              console.log(e);
        })
      },
      //목록 삭제 후 화면 다시 로딩할때 사용할 메소드(새로고침)
      refreshList(){
        this.currentTutorial=null;
        this.currentIndex= -1;
        this.retrieveTutorials();
      },
      // vue의 data 변수에 값을 저장하는 메소드
      // 클릭했을때 저장함(@click 이벤트)
      setActiveTutorial(tutorial, index){
        this.currentTutorial=tutorial;
        this.currentIndex=index;
      },

      //모든 목록 삭제 메소드
      removeAllTutorial(){
        // 백엔드쪽으로 전체 데이터 삭제 요청
        TutorialDataService.deleteAll()
            .then(response => {
              console.log(response.data);
              // 모든 데이터 삭제했으므로 새로고침 메소드 호출
              this.refreshList();
            }).catch(e => {
              console.log(e);
        })
      },

  //  제목 검색을 위한 메소드
    searchTitle(){
        // 백엔드 쪽으로 제목 데이터를 요청
        TutorialDataService.findByTitle(this.title)
            .then(response => {
              //백엔드 쪽에서 받은 데이터를 vue의 date변수(tutorials)에 넣음
              this.tutorials=response.data;
              console.log(response.data);
            }).catch(e => {
              console.log(e);
        })
    }
  },
  // 최초화면이 로딩될때 실행되는 이벤트
  mounted() {
  //  전체 목록 가져오기 메소드 호출
    this.retrieveTutorials();

  }
}
</script>

<style>
  .list{
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>