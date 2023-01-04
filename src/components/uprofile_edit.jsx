import NavbarStudent from "./general/navbar_student"
import '../css/tprofile_edit.css'
import React, {useState} from "react";

export default function StudentEdit(){
	const token = document.cookie;
	let splitToken = token.split(".");
	let user = JSON.parse(atob(splitToken[1]));
	let username = user["user"]
	let password = user["passkey"]
	let email = user["email"]
	// const [getFullName, setFullName] = useState(fullname);
	const [getUserName, setUserName] = useState("");
	const [getFullName, setFullName] = useState("");
	const [getEmail, setEmail] = useState("");
	const inputFullName = (e) => {setFullName(e.target.value)};
	const inputUserName = (e) => {setUserName(e.target.value)};
	const inputEmail = (e) => {setEmail(e.target.value)};

	console.log(getFullName)

	const clickHandler =() => {

        var myHeaders = new Headers();
		myHeaders.append("Authorization", "Basic" + btoa(username + ":" + password));
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"fullname": getFullName,
			"email": getEmail,
			"username": getUserName
		});

		var requestOptions = {
			method: 'PUT',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		console.log(raw)

		fetch("http://127.0.0.1:5000/updateuser", requestOptions)
			.then(response => response.text())
			.then(result => {
				alert("Profile had been updated successfully, please login again!")
				window.location.href = "/"
			})
			.catch(error => {
				console.log('error', error)
				alert("Failed update profile.")
			});}
	
    return(
		<div>
		<NavbarStudent/>
		<div className="edit_profile">
        <div className="container">
		<div className="row gutters">
		<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					<div className="user-profile">
						<div className="user-avatar">
							<img src="/img/profilpic.webp" alt="Maxwell Admin"/>
						</div>
						<h5 id="user-name">{username}</h5>
						<h6 id="user-email">{email}</h6>
					</div>
				</div>
			</div>
			</div>
		</div>
		</div>
		<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-2 text-primary">Personal Details</h6>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="fullName">Full Name</label>
							<input type="text" className="form-control" id="fullname" placeholder="Enter full name" onChange={inputFullName}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="eMail">Email</label>
							<input type="email" className="form-control" id="email" placeholder="Enter email" onChange={inputEmail}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label for="phone">Username</label>
							<input type="text" className="form-control" id="username" placeholder="Enter username" onChange={inputUserName}/>
						</div>
					</div>
				</div>
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
							<button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
							<button onClick={clickHandler} type="button" id="submit" name="submit" className="btn btn-primary">Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		</div>
		</div>
    )
}