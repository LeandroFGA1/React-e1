import React from 'react'
import styled from "styled-components"
const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    
.login {
  background-color: white;
  border: 1.2px solid #dfdfdf;
  width: 370px;
  height: 550px;
  padding: 40px;
  border-radius: 10px;
}

.login .login__title {
  font-size: 30px;
  margin-bottom: 30px;
}

.form label {
  display: inline-block;
  margin-bottom: 5px;
  opacity: 0.6;
}

.form .form__input {
  width: 100%;
  height: 40px;
  border: 1.2px solid #dfdfdf;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 8px;
}

.form .form__input[type="text"], .form .form__input[type="password"]
{
  font-size:16px;
}

.form .form__check {
  margin-bottom: 40px;
}

.form .find-password {
  margin-bottom: 45px;
}

.login a {
  color: #1C7F9A;
}

.login a:hover {
  text-decoration: underline;
}

.btn {
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.form__btn {
  margin-bottom: 50px;
}

.btn--red {
  color: white;
  background-color: var(--crimson);
}

`;

function LoginComponent() {
    return (
        <LoginContainer>
            <div class="login">
                <h5 class="login__title">Login</h5>
                <div class="login__form form">
                    <label for="username">Username</label>
                    <input type="text" name="username" class="form__input" />
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form__input" />
                    <input type="checkbox" name="remember-me" class="form__check" />
                    <label for="remember-me">Remember me</label>
                    <div class="find-password"><a href="#">Lost your password?</a></div>
                    <div class="form__btn btn btn--red">LOGIN</div>
                    <p class="sign-up">Don't have an account? <a href="#">Sign up</a>.</p>
                </div>
            </div>
    </LoginContainer>
    )
}

export default LoginComponent