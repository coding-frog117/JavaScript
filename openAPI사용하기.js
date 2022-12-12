const url="http://apis.data.go.kr/B551011/KorService/areaBasedSyncList?numOfRows=100&serviceKey=IITWUWwsppFxj6y%2FxUirJP2lfq9yl9LXNi5m8fn6RyTCH%2FLIkX9ylKlPWVXa132oUVIcEdHLIXwAi4ZNT%2FFDhw%3D%3D&MobileOS=ETC&MobileApp=AppTest&showflag=1&_type=json"

async function start(url){
    let response = await fetch(url);

    if (response.ok){
        let data=await response.json();
        console.log(data);
    } else {
        console.log('Error: ', response.status);
    }
}

start(url);