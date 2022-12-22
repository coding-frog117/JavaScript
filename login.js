import {useState} from 'react'

export default function LoginForm(){
    let [email,setEmail]= useState('');
    let [password, setPassword]= useState('');

    async function Login(){
    
        const url = "https://mandarin.api.weniv.co.kr";

        try{
        
            const res = await fetch(url+"/user/login/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body : JSON.stringify({
                                "user":{
                                    "email": `${email}`,
                                    "password": `${password}`
                                }
                            })
                        });
            const resJson = await res.json();
            if (resJson.user["token"]) {
                localStorage.setItem('login-token', resJson.user["token"]);
            }
        } catch(err){
        console.error(err);
        }

    return(
        <>
        <h1>
                로그인
            </h1>
            <section>
                <h2>이메일, 비밀번호 입력 컨테이너</h2>
                <form>
                    <div>
                        <label htmlFor="email" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}>이메일</label>
                        <input type="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="pw" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}>비밀번호</label>
                        <input type="password" id="pw"/>
                    </div>
                    <button id="login-btn" type="button">로그인</button>
                    <button type="button">이메일로 회원가입</button>
                </form>
                </section>
            </>
  )}}