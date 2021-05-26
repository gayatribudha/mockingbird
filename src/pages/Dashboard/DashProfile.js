import React from 'react';
import { Link } from 'react-router-dom';

import pp from '../../assets/images/pp.jpg';
import '../../assets/css/dashboard.css';


export default function DashProfile() {
    return (
        <div className="dashboard">
            <div className="container" id="">
                <div className="row pt-5 pt-md-5 pt-lg-5    ">
                    <div className="col pl-5 mx-mt-2 mx-lg-5 px-md-2 px-lg-5 mt-5 mt-md-5 mt-lg-5 pt-md-5 pt-lg-5 d-flex flex-column flex-md-row  flex-lg-row">
                        <img src={pp} alt="profile-picture" style={{ borderRadius: "50px", width: "100px", height: "100px" }} />
                        <div className=" pl-1 ml-md-5 l-lg-5 mt-2 mt-md-4 mt-lg-4">
                            <p className="p-user-name mb-0 pb-0">Rita Ora</p>
                            <p className="p-user-email mt-0 pt-0">ritaora@gmail.com< br /></p>
                            <p className="p-bio">Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qui. Atque quia est corporis ut inventore sint illo</p>
                            <p className="p-contact">Kathmandu, Nepal <br />
                            +977 9844874635</p>

                            <button className="delete-btn" data-toggle="modal" data-target="#updateProfile">Update Profile</button>
                            <button className="delete-btn mt-2 mt-md-2 mt-lg-0  ml-md-2 ml-lg-2" data-toggle="modal" data-target="#changePassword">Change Password</button>


                            {/* Update Profile Modal */}
                            <div className="modal fade" id="updateProfile" tabindex="-1" role="dialog" aria-labelledby="updateProfileLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <form >
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="updateProfileLabel">Update Profile</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body row">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col-12 col-md-3 col-lg-3">
                                                            <label className="form-label">Name</label>
                                                        </div>
                                                        <div className=" col-12 col-md-9 col-lg-9">
                                                            <input type="text" className="profile-update-form" type="text" name="name" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-3 col-lg-3">
                                                            <label className="form-label">Email</label>
                                                        </div>
                                                        <div className="col-12 col-md-9 col-lg-9">
                                                            <input type="email" className="profile-update-form" type="text" name="email" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-3 col-lg-3">
                                                            <label className="form-label">Address</label>
                                                        </div>
                                                        <div className="col-12 col-md-9 col-lg-9">
                                                            <input type="text" className="profile-update-form" type="text" name="address" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-3 col-lg-3">
                                                            <label className="form-label">Contact</label>
                                                        </div>
                                                        <div className="col-12 col-md-9 col-lg-9">
                                                            <input type="text" className="profile-update-form" type="text" name="contact" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-3 col-lg-3">
                                                            <label className="form-label">Bio</label>
                                                        </div>
                                                        <div className="col-12 col-md-9 col-lg-9">
                                                            <textarea type="text" className="profile-update-form" type="text" name="bio" ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        {/* <div className="col-12 col-md-3 col-lg-3">
                                                            <label className="form-label">Upload Profie Picture</label>
                                                        </div> */}
                                                        {/* <div className="col-12 col-md-12 col-lg-12">
                                                            <button classsName="delete-btn">
                                                                <span>Upload Profile Picture</span>
                                                                <input type="file" className="" name="bio" />
                                                            </button>
                                                        </div> */}


                                                        {/* <div class="custom-file">
                                                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                                aria-describedby="inputGroupFileAddon01" />
                                                                <label class="custom-file-label" for="inputGroupFile01">Upload Profile Picture</label>
                                                            
                                                        </div> */}
                                                        <div className="col-md-3 col-lg-3">
                                                            <label className="form-label">ProfilePicture</label>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6 profile-upload-btn-wrap">
                                                            <label className="profile-upload-btn" for="upload">
                                                                Upload from here
                                                                <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><g><rect fill="none" height="24" width="24" /></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" /></g></svg>
                                                            </label>
                                                            <input id="upload" type="file" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="delete-btn" data-dismiss="modal">Update</button>
                                                <button type="button" class="delete-btn" data-dismiss="modal">Cancel</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>



                            {/* Change Password */}
                            <div className="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="changePasswordLabel" aria-hidden="true">
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
                                                            <input type="text" className="profile-update-form" type="text" name="current-password" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className=" col-12 col-md-5 col-lg-5">
                                                            <label className="form-label">New Password</label>
                                                        </div>
                                                        <div className="col-12 col-md-7 col-lg-7">
                                                            <input type="email" className="profile-update-form" type="text" name="new-password" />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mt-md-3 mt-lg-3">
                                                        <div className="col-12 col-md-5 col-lg-5">
                                                            <label className="form-label">Retype Password</label>
                                                        </div>
                                                        <div className="col-12 col-md-7 col-lg-7">
                                                            <input type="text" className="profile-update-form" type="text" name="retype-password" />
                                                        </div>
                                                    </div>
                                                    {/* <label className="form-label">Current Password</label>
                                                <input type="password" className="form-field ml-5" type="text"></input><br />
                                                <label className="form-label mt-2 ">New Password</label>
                                                <input type="email" className="form-field mt-2 ml-5" type="text"></input><br />
                                                <label className="form-label mt-2">Retype Password</label>
                                                <input type="password" className="form-field mt-2 ml-5" type="text"></input><br /> */}
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="delete-btn" data-dismiss="modal">Save</button>
                                                <button type="button" class="delete-btn" data-dismiss="modal">Cancel</button>

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