import '../css/ulogin.css'
import { useState } from 'react';
import React from 'react'

export default function Login(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e) => {
        setUserName(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const clickHandler =() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + btoa(username+':'+password) );
        console.log(btoa(username+':'+password))

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/login", requestOptions)
        .then(response => response.json())
        .then((result) => {
            if (result.message==="Success!") {
                window.location.href = "/uhome"
                setCookie("token" , result.token, 7)
                // document.cookie = "token=" + result.token + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
                console.log(result);
            }


            else {
                alert("Please enter your username/password correctly")
                const inputs = document.querySelectorAll('#username2, #password2');
                inputs.forEach(input => {
                input.value = '';
            });
            }
        })
        .catch(error => console.log('error', error)); }
    
        function setCookie(cName, cValue, expDays) {
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        }


    return(
        <div className="ulogin">
        <div className="container-ulogin" id="container">
        <div className="form-container-ulogin sign-up-container-ulogin">
            {/* <!-- <form action="#"> --> */}
            <div id="container-signup-ulogin">
                <h1 className="h1-ulogin">Create Account</h1>
                <input className="input-ulogin" id="fullname" type="text" placeholder="Name"/>
                <input className="input-ulogin" id="username" type="text" placeholder="Username"/>
                <input className="input-ulogin" id="email" type="email" placeholder="Email"/>
                <input className="input-ulogin" id="password" type="password" placeholder="Password"/>
                <button className="button-ulogin" onClick={clickHandler}>Sign Up</button>
            </div>
                {/* <!-- </form> --> */}
        </div>
        <div className="form-container-ulogin sign-in-container-ulogin">
            {/* <!-- <form action="#"> --> */}
            <div id="container-signin-ulogin">
                <h1 className="h1-ulogin">Sign In</h1>
                <input className="input-ulogin" id="username2" type="text" placeholder="Username" onChange={handleChangeUsername}/>
                <input className="input-ulogin" id="password2" type="password" placeholder="Password" onChange={handleChangePassword}/>
                <button className="button-ulogin" onClick={clickHandler}>Sign In</button>
            {/* <!-- </form> --> */}
            </div>
        </div>
        <div className="overlay-container-ulogin">
            <div className="overlay-ulogin">
                <div className="overlay-panel-ulogin overlay-left-ulogin">
                    <h1 className="h1-ulogin">Welcome Back</h1>
                    <p className="p-ulogin">To keep connected with us please login with your personal info</p>
                    <button className="button-ulogin-black" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel-ulogin overlay-right-ulogin">
                    <h1 className="h1-ulogin">Hello, Friend</h1>
                    <p className="p-ulogin">Enter your personal details and start journey with us</p>
                    <button className="button-ulogin-black" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}




// export default function Login(){
//     const [username, setUserName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleChangeUsername = (e) => {
//         setUserName(e.target.value)
//     }

//     const handleChangePassword = (e) => {
//         setPassword(e.target.value)
//     }

//     const clickHandler =() => {
//         var myHeaders = new Headers();
//             myHeaders.append("Authorization", "Basic " + btoa(username+':'+password) );
//             console.log(btoa(username+':'+password))

//             var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             redirect: 'follow'
//             };

//             fetch("http://127.0.0.1:5000/login_teacher", requestOptions)
//             .then(response => response.json())
//             .then((result) => { alert("OK");
//                 if (result.message==="Success!") {
//                     window.location.href = "/tcourse-edit"
//                     // setCookie("token" , result.tokent, 7)
//                     document.cookie = "token=" + result.token + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
//                     console.log(result);
//                 }

//                 else {
//                     alert("Please enter your username/password correctly")
//                     // location.reload();
//                     const inputs = document.querySelectorAll('#username2, #password2');
//                     inputs.forEach(input => {
//                     input.value = '';
//                 });
//                 }
//             })
//             .catch(error => console.log('error', error));
    
//             // function setCookie(cName, cValue, expDays) {
//             //     let date = new Date();
//             //     date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//             //     const expires = "expires=" + date.toUTCString();
//             //     document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
//             // }

//     }

//     return(
//         <div className="body-signIn">
//         <div className="container-logIn" id="container">
//             <div className="form-container sign-up-containers">
//             {/* <!-- <form action="#"> --> */}
//             <div id="container-signup">
//                 <h1 className="h1-signIn">Create Account</h1>
//                 <input className="input-signIn" id="fullname" type="text" placeholder="Name"/>
//                 <input className="input-signIn" id="username" type="text" placeholder="Username"/>
//                 <input className="input-signIn" id="email" type="email" placeholder="Email"/>
//                 <input className="input-signIn" id="password" type="password" placeholder="Password"/>
//                 <button className="button-signIn" onClick={clickHandler}>Sign Up</button>
//             </div>
//                 {/* <!-- </form> --> */}
//             </div>
//         </div>
//         <div className="signIn-containers sign-in-containers">
//             {/* <!-- <form action="#"> -->  */}
//             <div id="container-signIn">
//                 <h1 className="h1-signIn">Sign In</h1>
//                 <input className="input-signIn" id="username2" type="text" placeholder="Username" onChange={handleChangeUsername}/>
//                 <input className="input-signIn" id="password2" type="password" placeholder="Password" onChange={handleChangePassword}/>
//                 <button className="button-signIn" onClick={clickHandler}>Sign In</button>
//             {/* <!-- </form> -->  */}
//             </div>
//         </div>
//         <div className="overlay-containers">
//             <div className="overlays">
//                 <div className="overlay-panels overlay-lefts">
//                     <h1 className="h1-signIn">Welcome Back</h1>
//                     <p className="p-signIn">To keep connected with us please login with your personal info</p>
//                     <button className="ghost" id="signIn">Sign In</button>
//                 </div>
//                 <div className="overlay-panels overlay-rights">
//                     <h1 className="h1-signIn">Hello, Friend</h1>
//                     <p className="p-signIn">Enter your personal details and start journey with us</p>
//                     <button className="ghost" id="signUp">Sign Up</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }