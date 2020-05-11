import React from 'react';
import StorefrontLayout from '../layout'

const Register = (props) => {
    let errors;
    if(props.errors) {
        errors = props.errors.map(err => 
            <ul>
                <li>{err}</li>
            </ul>
        )
    }

    return (
        <StorefrontLayout categories={props.categories} cartNum={props.cartNum} isLogin={props.isLogin}>
            <div className="container pt-3">
                <div className={"alert alert-danger " + (!props.errors && "d-none")} role="alert">
                    {errors}
                </div>
                <form className="form-horizontal" action='/register' method="POST">
                        <div className="control-group">
                            <label className="control-label">First name</label>
                            <div className="controls">
                                <input type="text" id="firstname" name="firstname" placeholder="" className="input-xlarge" />
                                <p className="help-block">First name can contain any letters or numbers</p>
                            </div>
                        </div>
                    
                        <div className="control-group">
                            <label className="control-label">Last name</label>
                            <div className="controls">
                                <input type="text" id="lastname" name="lastname" placeholder="" className="input-xlarge" />
                                <p className="help-block">Last name can contain any letters or numbers</p>
                            </div>
                        </div>

                        <div className="control-group">
                            <label className="control-label">E-mail</label>
                            <div className="controls">
                                <input type="email" id="email" name="email" placeholder="" className="input-xlarge" />
                                <p className="help-block">Please provide your E-mail</p>
                            </div>
                        </div>
                    
                        <div className="control-group">
                            <label className="control-label">Password</label>
                            <div className="controls">
                                <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
                                <p className="help-block">Password should be at least 4 characters</p>
                            </div>
                        </div>
                    
                        <div className="control-group">
                            <label className="control-label">Password (Confirm)</label>
                            <div className="controls">
                                <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
                                <p className="help-block">Please confirm password</p>
                            </div>
                        </div>
                    
                        <div className="control-group">
                            <div className="controls">
                                <button className="btn btn-success">Register</button>
                            </div>
                        </div>
                </form>
            </div>
        </StorefrontLayout>
    )
}

export default Register;