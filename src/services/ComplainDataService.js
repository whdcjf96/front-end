import http from '../http-common'


// springboot 연결하기 위한 메소드 정의
class ComplainDataService{
    // 모든 회원 조회
    getAll(params){
        return http.get('/complainMenu',{params});
    }

//    id로 회원 조회
    get(id){
        return http.get(`/complainMenu/${id}`);
    }

//    회원 데이터를 생성(insert 문 호출)
    create(data){
        return http.post('/complainAdd',data);
    }

//    회원 데이터를 수정 요청(update 문 호출)
    update(id,data){
        return http.put(`/complainUp/${id}`, data);
    }

//    회원 데이터를 삭제 요청(update 문 호출)
    delete(id){
        return http.put(`/complainMenu/deletion/${id}`);
    }
}

export default new ComplainDataService()