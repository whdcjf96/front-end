<template>
  <div class="container mt-3">
    <!--    TODO: 수정 시작-->
    <!--    search 관련 입력박스 시작-->
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Search By Title"
            v-model="searchTitle"
        >
        <div class="input-group-append">
          <button class="btn btn-outline-secondary"
                  type="button"
                  @click="page=1; retrieveComplain();">
            Search
          </button>
        </div>
      </div>
    </div>
    <!--    search 관련 입력박스 끝-->
    <!--    TODO: PAGE 바 시작-->
    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize"
                @change="handlePageSizeChange($event)">
          <!--          pageSizes:[3,6,9]-->
          <option v-for="size in pageSizes"
                  :key="size"
                  :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <!--        page: 현재페이지, count : 총데이터 건수-->
      <!--        pageSize : 1페이지당 개수-->
      <b-pagination
          v-model="page"
          :total-rows="count"
          :per-page="pageSize"
          prev-text="Prev"
          next-text="Next"
          @change="handlePageChange">
      </b-pagination>

    </div>
    <!--    TODO: PAGE 바 끝-->

    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">No</th>
        <th scope="col">Title</th>
        <th scope="col">Content</th>
        <th scope="col">Target_Page</th>
        <th scope="col">Writer</th>
      </tr>
      </thead>
      <!--      조회 데이터 생성 부분-->
      <tbody v-for="(complain, index) in complains"
             :key="index"
      >
      <tr>
        <td>{{ complain.firstName }}</td>
        <td>{{ complain.lastName }}</td>
        <td>{{ complain.email }}</td>
        <td>{{ complain.phone }}</td>
        <td><a :href="'/customers/'+complain.id" class="btn btn-primary">Edit</a></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import ComplainDataService from "@/services/ComplainDataService";
export default {
  /* eslint-disable */
  name: "customers",
  data() {
    return {
      complains: [],
      searchTitle: "",
      page: 1,
      count: 0,
      pageSize: 3,
      pageSizes: [3, 6, 9]
    }
  },
  methods: {
    //  모든 회원 조회 서비스 호출
    retrieveComplain() {
      //Todo : getRequestParams 호출 추가
      const params = this.getRequestParams(
          this.searchTitle,
          this.page,
          this.pageSize
      );
      //Todo : getAll() -> getAll(params)
      // axios로 spring에 모든 회원 조회 요청
      ComplainDataService.getAll(params)
          .then((response) => {
            const {complains, totalItems} = response.data;
            //springboot 받은 객체 정보
            this.complains = complains;
            //springboot에서 받은 총 데이터 건수
            this.count = totalItems;
          })
          .catch((e) => {
            console.log(e);
          })
    },


    //  Todo: getRequestParams 추가
    //  역할 : springboot로 매개변수들 전송
    //  웹 매개변수 : http://localhost:8080/customers?page=1&size=3
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      //searchEmail값이 있으면 매개변수로 전송
      if (searchTitle) {
        params["title"] = searchTitle;
      }
      if (page) {
        params["page"] = page - 1;
      }
      if (pageSize) {
        params["size"] = pageSize;
      }
      //  3개가 다 들어왔다면
      //  params{ "email":"fkdldhs22@naver.com", "page":0, "size":3}
      return params;
    },
    //  Todo : 신규 메소드 2개 추가
    //  현재page를 다른 페이지번호로 변경시 호출되는 메소드
    handlePageChange(value) {
      //현재 페이지 변경
      this.page = value;
      //재조회
      this.retrieveComplain();
    },
    //페이지사이즈(3,6,9) 변경시 호출되는 메소드
    handlePageSizeChange(event) {
      this.pageSize = event.target.value; // select박스의 값
      this.page = 1;
      //  재 조회
      this.retrieveComplain();
    },


  },
  //화면이 뜨자마자 실행되는 이벤트
  mounted() {
    // 화면 실행되자마자 모든 회원조회 실행
    this.retrieveComplain();
  }
}
</script>
