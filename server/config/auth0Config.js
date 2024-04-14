import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000/api",
    issuerBaseURL: "https://dev-0i5hl0ctttkjzb6f.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck