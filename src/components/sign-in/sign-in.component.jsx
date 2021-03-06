import React from "react";
import "./sign-in.component.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        });
    };

    handleChange = event => {
        const {
            value,
            name
        } = event.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" value={this.state.email} required handleChange={this.handleChange}/>

                    <FormInput name="password" label="Password" type="password" value={this.state.password} required
                               handleChange={this.handleChange}/>

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {" "}
                            Sign In with Google{" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SingIn;
