<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
<!--      조회 데이터 생성 부분-->
      <tbody v-for="(customer, index) in costomers"
              :key="index"
      >
      <tr>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.phone }}</td>
        <td><a :href="'/customers/'+customer.id" class="btn btn-primary">Edit</a></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import CustomerDataService from "@/services/CustomerDataService";
export default {
  /* eslint-disable */
  name:"customers",
  data(){
    return{
      costomers:[]
    }
  },
  methods:{
  //  모든 회원 조회 서비스 호출
    retrieveCustomers(){
      // axios로 spring에 모든 회원 조회 요청
      CustomerDataService.getAll()
          .then((response)=>{
            this.costomers = response.data;
          })
          .catch((e)=>{
            console.log(e);
          })
    }



  },
  //화면이 뜨자마자 실행되는 이벤트
  mounted() {
    // 화면 실행되자마자 모든 회원조회 실행
    this.retrieveCustomers();
  }
}
</script>

