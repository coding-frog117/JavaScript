// const searchImg = async () => {
//     let json;
//     //패치를 안기다려주고 바로 if 문으로 들어왔기 때문에 else 문으로 빠짐. 그래서 통신될때까지 기다려! 하기 위해서 await라는 키워드 붙여야 하고 얘는 반드시 async라는 함수에 사용되어야 함
//     const response = await fetch('https://api.unsplash.com/search/photos?query=flower&client_id=ouyAtmeS61VDAw3mv-ICVQoPVGIsokI2rkQS4X1qs08', {
//         method: "GET"
//     }); //여기까지 헤더부분
//     if (response.ok) {
//         //await 안해주면 pending 상태(아직 통신이 시작되지 않은 상태)로 머문다. 
//         json = await response.json(); //바디 정보를 읽는 부분

//         // 요청시 받아오는 데이터 : 1. 헤더(요청헤더-우리가 서버로 요청하는 정보에 대한 명세,응답헤더- 서버가 cl에게 보내는 정보에 대한 명세), 2. 데이터(body) 를 전달받음. 따라서 우리는 헤더, 바디를 다 받을 때까지 기다려줘야 함. 그래서 fetch의 경우 header와 body를 읽는 두 개의 await가 필요하다.
//     } else {
//         alert('http error', + response.status);
//     }

//     console.log(json);
// }

import axios from 'axios';

const searchImg= async(keyword)=>{
    //axios는 통신을 좀더 쉽게 할수 있게 해준 라이브러리.
    // fetch는 json형태로 파싱해줘야 하는데 axios는 파싱해줄 필요 없음
    // 응답형태 설정 가능.
    //fetch는 서버의 응답을 보면서 상태정보 직접 만들어야 함. 하지만 axios는 오류 상태가 종류별로 구분되어있어서 에러핸들링 편의 제공.
    //interceptor : then 이나 catch로 처리되기 전에 요청과 응답을 가로챌 수 있음.
    const response= await axios.get(
        'https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: "Client-ID ouyAtmeS61VDAw3mv-ICVQoPVGIsokI2rkQS4X1qs08"
        },
        params: {
            query: keyword
        },
        responseType: 'json'
    })
    .catch(function (error) {
        if (error.response) {
            // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // 요청이 전송되었지만, 응답이 수신되지 않았습니다. 
            // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
            // node.js에서는 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
        } else {
            // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
            console.log('Error', error.message);
        }
        console.log(error.config);
    })
    return response.data.results
}
export default searchImg;