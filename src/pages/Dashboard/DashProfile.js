import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router'
import axios from "axios";
// import { useParams } from "react-router-dom";

import '../../assets/css/dashboard.css';


export default function DashProfile(userInfo) {
    // console.log(userInfo.userInfo._id);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [photo, setPhoto] = useState("");


    const [errors, setErrors] = useState(false);


    const routerHistory = useHistory();

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const res = await fetch(`/${userInfo.userInfo._id}/userDetail`);
            res.json()
                .then(res => {
                    setFullname(res.fullname);   // here res is the object of user detail that contains id, title, author, description
                    setEmail(res.email);
                    setBio(res.bio);
                    setAddress(res.address);
                    setContactNo(res.contactNo);
                    setPhoto(res.photo);
                })
                .catch(err => setErrors(err));
        }
    }, [])

    const onFullnameChange = e => setFullname(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onBioChange = e => setBio(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);
    const onContactNoChange = e => setContactNo(e.target.value);
    const onPhotoChange = e => setPhoto(e.target.files[0]);

    // let JWTToken = localStorage.getItem('user');

    const handleSubmit = e => {
        e.preventDefault();
        // const data = { fullname, email, bio, address, contactNo};

        let formData = new FormData();
        formData.append('photo', photo);
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('bio', bio);
        formData.append('address', address);
        formData.append('contactNo', contactNo);

        // console.log(formData.get('contactNo'));
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        axios.put(`/${userInfo.userInfo._id}/updateProfile`, formData, config)
            .then(res => {
                swal({
                    title: "Saved!!",
                    text: "Your profile is saved successfully!",
                    icon: "success",
                })
                routerHistory.push('/dashboard/profile');
            })
            .catch(err => {
                console.log(err);
                swal("Oops!", "Seems like we couldn't update your profile", "error");
            });

        // const requestOptions = {
        //     method: "PUT",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // };
        // console.log('inside submitttt')

        // fetch(`/${userInfo.userInfo._id}/updateProfile`, requestOptions)
        //     .then(response => response.json())
        //     .then(res => swal({
        //         title: "Saved!!",
        //         text: "Your profile is updated successfully!",
        //         icon: "success",
        //     }).then(function () {
        //         routerHistory.push('/dashboard/profile');
        //     }))
        //     .catch(err => {
        //         swal("Oops!", "Seems like we couldn't update your profile", "error");
        //     });
    };

    return (
        <div className="dashboard">
            <div className="container" id="">
                <div className="row pt-5 pt-md-5 pt-lg-5    ">
                    <div className="col pl-5 mx-mt-2 mx-lg-5 px-md-2 px-lg-5 mt-5 mt-md-5 mt-lg-5 pt-md-5 pt-lg-5 d-flex flex-column flex-md-row  flex-lg-row">
                        <img src={`http://localhost:3001/`+photo} alt="profile" style={{ borderRadius: "50px", width: "100px", height: "100px" }} />
                        <div className=" pl-1 ml-md-5 l-lg-5 mt-2 mt-md-4 mt-lg-4">
                            <p className="p-user-name mb-0 pb-0">{fullname}</p>
                            <p className="p-user-email mt-0 pt-0">{email}< br /></p>
                            <p className="p-bio">{bio}</p>
                            <p className="p-contact">{address} <br />
                                {contactNo}</p>

                            <button className="delete-btn" data-toggle="modal" data-target="#updateProfile">Update Profile</button>
                            <button className="delete-btn mt-2 mt-md-2 mt-lg-0  ml-md-2 ml-lg-2" data-toggle="modal" data-target="#changePassword">Change Password</button>


                            {/* Update Profile Modal */}
                            <div className="modal fade" id="updateProfile" tabIndex="-1" role="dialog" aria-labelledby="updateProfileLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="updateProfileLabel">Update Profile</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <label className="form-label">Name</label>
                                                        </div>
                                                        <div className=" col-12 col-md-8 col-lg-8">
                                                            <input type="text" className="profile-update-form" name="fullname" value={fullname} onChange={onFullnameChange} />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <label className="form-label">Email</label>
                                                        </div>
                                                        <div className="col-12 col-md-8 col-lg-8">
                                                            <input type="email" className="profile-update-form" name="email" value={email} onChange={onEmailChange} />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <label className="form-label">Address</label>
                                                        </div>
                                                        <div className="col-12 col-md-8 col-lg-8">
                                                            <input type="text" className="profile-update-form" name="address" value={address} onChange={onAddressChange} />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <label className="form-label">Contact</label>
                                                        </div>
                                                        <div className="col-12 col-md-8 col-lg-8">
                                                            <input type="text" className="profile-update-form" name="contactNo" value={contactNo} onChange={onContactNoChange} />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <label className="form-label">Bio</label>
                                                        </div>
                                                        <div className="col-12 col-md-8 col-lg-8">
                                                            <textarea type="text" cols="19" className="profile-update-form" name="bio" value={bio} onChange={onBioChange}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <label className="form-label">Profile Picture</label>
                                                        </div>
                                                        <div className="col-12 col-md-7 col-lg-7 profile-upload-btn-wrap">
                                                            <label className="profile-upload-btn" htmlFor="upload">
                                                                Upload from here
                                                                <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><g><rect fill="none" height="24" width="24" /></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" /></g></svg>
                                                            </label>
                                                            <input type="file" id="upload" name="photo" accept=".png, .jpg, .jpeg" onChange={onPhotoChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="delete-btn">Update</button>
                                                <button type="button" className="delete-btn" data-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>



                            {/* Change Password */}
                            <div className="modal fade" id="changePassword" tabIndex="-1" role="dialog" aria-labelledby="changePasswordLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <form >
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="changePasswordLabel">Change Password</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-12 col-md-5 col-lg-5">
                                                            <label className="form-label">Current Password</label>
                                                        </div>
                                                        <div className=" col-12 col-md-7 col-lg-7">
                                                            <input type="text" className="profile-update-form" name="current-password" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className=" col-12 col-md-5 col-lg-5">
                                                            <label className="form-label">New Password</label>
                                                        </div>
                                                        <div className="col-12 col-md-7 col-lg-7">
                                                            <input type="email" className="profile-update-form" name="new-password" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-5 col-lg-5">
                                                            <label className="form-label">Retype Password</label>
                                                        </div>
                                                        <div className="col-12 col-md-7 col-lg-7">
                                                            <input className="profile-update-form" type="text" name="retype-password" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="delete-btn" data-dismiss="modal">Save</button>
                                                <button type="button" className="delete-btn" data-dismiss="modal">Cancel</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}