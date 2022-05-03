import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "XXXXXX",
    ClientId: 'XXXXX'
};

export default new CognitoUserPool(poolData)