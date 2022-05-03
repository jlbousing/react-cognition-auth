import React, {useState} from 'react'
import UserPool from '../UserPool';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        var attributeList = [];

        var dataEmail = {
	         Name: "email",
	        Value: email,
        };

        var dataPhoneNumber = {
	        Name: 'phone_number',
	        Value: '+15555555555',
        };

        var attributeEmail = new CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new CognitoUserAttribute(
            dataPhoneNumber
        );

        attributeList.push(attributeEmail);
        attributeList.push(attributePhoneNumber);
        
        UserPool.signUp(email, password, attributeList, null, (err, data) => {

            if(err){
                console.log(err);
            }

            console.log(data);
        });
    }
  return (
    <div>
        <form onSubmit={onSubmit}>

            <label htmlFor='name'>Name</label>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}>
            </input>
            <label htmlFor='email'>Email</label>
            <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}>
            </input>

            <label htmlFor='password'>Password</label>
            <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}>
            </input>

            <input type="submit" value="ENTER"></input>
        </form>
    </div>
  )
}
