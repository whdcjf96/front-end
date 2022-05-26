// axios 사용법
// ex) get방식) axios.get('/user/12345')
// ex) post방식) axios.post('/user',{id:'aa',name:'yjc'})
// axios : get, post, put, delete
// axios.post('/user,{id:aa',name:'yjc'})
//          .then(function(res){ 성공하면 then 들어옴}).catch(function(error){실패하면 catch들어옴})

import http from "../http-common";

//자바스크립트 class
class TutorialDataService{
//   tutorials 조회 메소드
//    axios -> spring 데이터 요청 -> spring -> db -> 결과반환
    getAll(){
        return http.get("/tutorials");
    }

//    id로 조회하는 메소드
    get(id){
        return http.get(`/tutorials/${id}`);
    }

//    tutorial 데이터 추가 메소드
    create(data){
        return http.post("/tutorials",data);
    }

//    tutorial 데이터 수정 메소드
    update(id,data){
        return http.put(`/tutorials/${id}`,data);
    }

//    tutorial 데이터 삭제 메소드
    delete(id){
        return http.put(`/tutorials/deletion/${id}`);
    }

//    tutorial 데이터 모두 삭제
    deleteAll(){
        return http.put(`/tutorials`);
    }

//    tutorial 데이터중에 title을 기준으로 검색 메소드
    findByTitle(title){
        return http.get(`/tutorials?title=${title}`);
    }
}
//export : 모듈을 다른 자바스크립트 파일에서 참조함
//new 모듈명 : class 객체생성을 위해 new 사용함
export default new TutorialDataService();