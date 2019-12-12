var React = require('react');
import $ from 'jquery';
import axios from 'axios';
import { Redirect, browserHistory } from 'react-router';


class LoginPopUpModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            repassword: '',
            checkval: '',
            signinpass: '',
            signinemail: '',
            forpass: '',
            errmsg:'',
            toLogin: false,
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.getSignUpData = this.getSignUpData.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.SignInn = this.SignInn.bind(this);
        this.ForgetPassword = this.ForgetPassword.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleValidation() {
        var name = this.state.name;
        var email = this.state.email;
        var phone = this.state.phone;
        var password = this.state.password;
        var repassword = this.state.repassword;
        var checkval = this.state.checkval;

        let errors = {};
        let formIsValid = true;

        //Name
        //if (!name) {
        //    formIsValid = false;
        //    errors["name"] = "Cannot be empty";
        //}

        //Phone
        if (phone.length < 10) {
            formIsValid = false;
            errors["phone"] = "Please Enter Valid Number";
        }

        //Email       
        //let lastAtPos = email.lastIndexOf('@');
        //let lastDotPos =email.lastIndexOf('.');

        //if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        //    formIsValid = false;
        //    errors["email"] = "Email is not valid";           
        //    }

        //Password
        if (password != repassword) {

            formIsValid = false;
            errors["repassword"] = "Password Not Match";
        }


        this.setState({ errors: errors });

        return formIsValid;
    }

    getSignUpData(e) {

        var name = this.state.name;
        var email = this.state.email;
        var phone = this.state.phone;
        var checkval = this.state.checkval;

        const password = this.state.password;

        const repassword = this.state.repassword;

        if (this.handleValidation()) {

            let data = [];
            data.push({ "kanName": name }, { "kanEmail": email }, { "kanMobile": phone }, { "kanPass": password }, { "kanRePass": repassword }, { "kanCheck": checkval });

            var url = 'http://localhost:1337/SignUp';
            axios.post(url, data).then((response) => {
                //alert("Successfully Updated Data");
                window.location.reload();
            });

        } else {
            e.preventDefault();
        }
        //$("#myModalLogin").fadeIn("fast");
    }

    SignInn() {
        
        var mail = this.state.signinemail;
        var pass = this.state.signinpass;
        let data = [];
        data.push({ "kanPass": pass }, { "kanEmail": mail });
        var url = 'http://localhost:1337/SignInData';
        axios.post(url, data).then((response) => {
            //alert(JSON.stringify(response.data));
            if (response.data == "") {

                this.setState({ toLogin: false, errmsg:"Please,Check Your Email And Password" })

            } else {

                this.setState({ toLogin: true })
            }

        });
        //if (mail != '' && pass != '') {
        //    this.setState({ toLogin: true })
        //}  
           
    }

    ForgetPassword() {
        var mail = this.state.forpass;
       
        let data = [];
        data.push({ "kanEmail": mail });
        var url = 'http://localhost:1337/ForgetPassword';
        axios.post(url, data).then((response) => {
            //alert(JSON.stringify(data));

        });
    }

    render() {
        if (this.state.toLogin === true) {
            // return <Redirect to='/About' />
            browserHistory.push('/About')
        }
        return (           
                <div>
                
                <div id="myModalLogin" className="modal fade clientlogin-modal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class=" sideleft">
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a data-toggle="tab" href="#signin">Sign In</a></li>
                                        <li><a data-toggle="tab" href="#signup">Sign Up</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div id="signin" class="tab-pane fade in active">
                                            <div class="col-sm-7">
                                                
                                                    <div class="form-group email">
                                                        <input type="email" onChange={this.handleChange} class="form-control" name="signinemail" placeholder="Enter your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                                                    </div>
                                                    <div class="form-group subject">
                                                         <input type="password" onChange={this.handleChange} class="form-control" name="signinpass" required placeholder="Enter your password" />
                                                   </div>
                                                <div class="form-group">
                                                    <span style={{ color: "red" }}>{this.state.errmsg}</span>
                                                </div>
                                                <br />
                                                <button class="btn btn-default submit-btn" type="submit" onClick={this.SignInn} >SIGN IN</button>
                                                    <a href="#" class="trouble-text" data-target="#myModalForgot" data-toggle="modal">Trouble loggin in?</a>
                                                    <div class="clear"></div>
                                                
                                            </div>
                                            <div class="col-sm-5 sideleft hidden-xs">
                                                <div class="aside-information">
                                                    <h4>Get Your Assignment</h4>
                                                    <img src="../public/images/img_assignment.png" />
                                                    <ul>
                                                        <li>Submit your Assignment</li>
                                                        <li>Pay for Assignment</li>
                                                        <li>Get Assignment Solution</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                        <div id="signup" class="tab-pane fade">
                                            <div class="col-sm-7">

                                                <div class="form-group name">
                                                    <input type="text" onChange={this.handleChange} class="form-control" name="name" placeholder="Enter your Name" required />
                                                    <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                                </div>
                                                <div class="form-group email">
                                                    <input type="email" onChange={this.handleChange} class="form-control" name="email" placeholder="Enter your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />

                                                </div>
                                                <div class="form-group name">
                                                    <input type="text" onChange={this.handleChange} class="form-control" id="phone" name="phone" placeholder="Enter your phone number" required maxLength="10" />
                                                    <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                                                </div>
                                                <div class="form-group subject">
                                                    <input type="password" onChange={this.handleChange} class="form-control" name="password" placeholder="Enter your password" required />
                                                </div>
                                                <div class="form-group subject">
                                                    <input type="password" onChange={this.handleChange} class="form-control" name="repassword" placeholder="Re-enter password" required />
                                                    <span style={{ color: "red" }}>{this.state.errors["repassword"]}</span>
                                                </div>
                                                <div class="checkbox custom-checkbox">
                                                    <label><input type="checkbox" onChange={this.handleChange} value="1" name="checkval" required /> <span class="checkbox-check"></span> I have read Terms & Conditions of website and i agrre to it.</label>
                                                </div>
                                                <button class="btn btn-default submit-btn" type="submit" onClick={this.getSignUpData}>SIGN UP</button>

                                                <div class="clear"></div>
                                                <br />


                                            </div>
                                            <div class="col-sm-5 sideleft hidden-xs">
                                                <div class="aside-information">
                                                    <h4>Get Your Assignment</h4>
                                                    <img src="../public/images/img_assignment.png" />
                                                    <ul>
                                                        <li>Submit your Assignment</li>
                                                        <li>Pay for Assignment</li>
                                                        <li>Get Assignment Solution</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="myModalForgot" className="modal fade clientlogin-modal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="col-sm-7 sideleft forgot-conten">
                                    <h3 class="forgot-title">Forgot Password</h3>
                                    <form id="contactform_popup" class="contact-form form-conten">
                                        <div class="form-group email">
                                            <input type="email" onChange={this.handleChange} class="form-control" name="forpass" placeholder="Enter your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" autocomplete="off" />
                                        </div>
                                        <br />
                                        <button class="btn btn-default submit-btn" type="submit" onClick={this.ForgetPassword}>SUBMIT</button>
                                    </form>
                                </div>
                                <div class="col-sm-5 sideleft hidden-xs">
                                    <div class="aside-information">
                                        <h4>Get Your Assignment</h4>
                                        <img src="../public/images/img_assignment.png" />
                                        <ul>
                                            <li>Submit your Assignment</li>
                                            <li>Pay for Assignment</li>
                                            <li>Get Assignment Solution</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
              )
        
    }
}

export default LoginPopUpModal;