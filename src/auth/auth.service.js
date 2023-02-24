import axios from 'axios';
import bcrypt from "bcryptjs";

export async function login() {

    const password = "password";
    const email = "email"

    const resGetHashPassword = await axios.get(`https://api.sorare.com/api/v1/users/${email}`);

    const salt = resGetHashPassword.data.salt;

    const hashedPassword = bcrypt.hashSync(password, salt);

    const resSignIn = await axios.post('https://api.sorare.com/graphql', {
        query: `
        mutation SignInMutation($input: signInInput!) {
            signIn(input: $input) {
                currentUser {
                    slug
                    jwtToken(aud: "test-sorareclash") {
                        token
                        expiredAt
                    }
                }
                errors {
                    message
                }
            }
        }
        `,
        variables: {
            input: {
                email,
                password: hashedPassword
            }
        }
    })

    const data = resSignIn.data.data.signIn;

    if (data.currentUser) {
        return data.currentUser
    } else {
        return data.errors;
    }
}