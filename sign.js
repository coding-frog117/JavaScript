const url = "https://mandarin.api.weniv.co.kr";

try{

	const res = await fetch(url+"/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body : JSON.stringify({
                       "user": {
				"username": "songyeeun",
				"email": "syeshe@weniv.com",
				"password": "cogury123",
				"accountname": "yeeun",
				"intro": "cogury",
				"image": "https://mandarin.api.weniv.co.kr/1641906557953.png"
		}
                    })
                });
	const resJson = await res.json();
	console.log(resJson);
} catch(err){
  console.error(err);
}