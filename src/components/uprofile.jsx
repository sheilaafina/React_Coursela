import NavbarStudent from './general/navbar_student'
import "../css/tprofile.css";
import React, {useState} from 'react';

export default function StudentProfile(){
	const token = document.cookie;
	const split = token.split(".");
	let parsedToken = JSON.parse(atob(split[1]));
	let fullname = parsedToken["fullname"]
	let username = parsedToken["user"]
	let email = parsedToken["email"]
	const [getFullName, setFullName] = useState(fullname);
	const [getUserName, setUserName] = useState(username);
	const [getEmail, setEmail] = useState(email);
	// setFullName(fullname);
	// setUserName(username);
	// setEmail(email);
    return(
		<div>
		<NavbarStudent/>
		<div className="body-uprofile">
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
						<h5 id="user-name">{getUserName}</h5>
						<h6 id="user-email">{getEmail}</h6>
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
							<h6>Full Name</h6>
							<p id="fullname">{getFullName}</p>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<h6>Email</h6>
							<p id="email">{getEmail}</p>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<h6>Username</h6>
							<p id="username">{getUserName}</p>
						</div>
					</div>
				</div>
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="text-right">
							<button type="button" id="submit" name="submit" class="btn btn-secondary"><a href="/uhome">Cancel</a></button>
							<button type="button" id="submit2" name="submit" class="btn btn-outline-primary"><a href="uprofile-edit">Edit</a></button>
						</div>
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