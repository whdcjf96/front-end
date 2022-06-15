import http from '../http-common'


// springboot 연결하기 위한 메소드 정의
class ComplainDataService{
    // 모든 회원 조회
    getAll(params){
        return http.get('/complainMenu',{params});
    }

//    id로 회원 조회
    get(no){
        return http.get(`/complainMenu/${no}`);
    }

//    회원 데이터를 생성(insert 문 호출)
    create(data){
        return http.post('/complainAdd',data);
    }

//    회원 데이터를 수정 요청(update 문 호출)
    update(no,data){
        return http.put(`/complainMenu/${no}`, data);
    }

//    회원 데이터를 삭제 요청(update 문 호출)
    delete(no){
        return http.put(`/complainMenu/deletion/${no}`);
    }
}

export default new ComplainDataService()