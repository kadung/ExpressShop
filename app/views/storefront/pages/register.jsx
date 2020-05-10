import React from 'react';
import StorefrontLayout from '../layout'

const Register = (props) => {
    return (
        <StorefrontLayout categories={props.categories} cartNum={props.cartNum} isLogin={props.isLogin}>
            <div className="container pt-3">
                <form class="form-horizontal" action='/register' method="POST">
                        <div class="control-group">
                            <label class="control-label" for="firstname">First name</label>
                            <div class="controls">
                                <input type="text" id="firstname" name="firstname" placeholder="" class="input-xlarge" />
                                <p class="help-block">First name can contain any letters or numbers</p>
                            </div>
                        </div>
                    
                        <div class="control-group">
                            <label class="control-label" for="lastname">Last name</label>
                            <div class="controls">
                                <input type="text" id="lastname" name="lastname" placeholder="" class="input-xlarge" />
                                <p class="help-block">Last name can contain any letters or numbers</p>
                            </div>
                        </div>

                        <div class="control-group">
                            <label class="control-label" for="email">E-mail</label>
                            <div class="controls">
                                <input type="text" id="email" name="email" placeholder="" class="input-xlarge" />
                                <p class="help-block">Please provide your E-mail</p>
                            </div>
                        </div>
                    
                        <div class="control-group">
                            <label class="control-label" for="password">Password</label>
                            <div class="controls">
                                <input type="password" id="password" name="password" placeholder="" class="input-xlarge" />
                                <p class="help-block">Password should be at least 4 characters</p>
                            </div>
                        </div>
                    
                        <div class="control-group">
                            <label class="control-label"  for="password_confirm">Password (Confirm)</label>
                            <div class="controls">
                                <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge" />
                                <p class="help-block">Please confirm password</p>
                            </div>
                        </div>
                    
                        <div class="control-group">
                            <div class="controls">
                                <button class="btn btn-success">Register</button>
                            </div>
                        </div>
                </form>
            </div>
        </StorefrontLayout>
    )
}

export default Register;