import jwt from 'jsonwebtoken';

export const checkAndVerify = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    try {
        if (authorization == null) {
            return res.status(400).json({
                message: "authorization token is missing"
            });
        };
        const tokens = authorization.split(" ");
        if (tokens.length != 2) {
            return res.status(200).json({
                message: "invalid token"
            });
        };
        const [format, token] = tokens;
        if (format != 'Bearer') {
            return res.status(400).json({
                message: "invalid token format"
            });
        };
        const { TOKEN_SECRET } = process.env;
        const payload = jwt.verify(token, TOKEN_SECRET);
        const { phoneNumber, userId } = payload;
        req.locals = {
            phoneNumber,
            userId
        };
        console.log("payload", payload);
        return next();
    } catch (error) {
        console.log(error.message);
        const errorMessage = error.message;
        if (errorMessage == "jwt expired") {
            return res.status(500).json({
                message: "jwt token is expired ,please login again. "
            });
        };
        if (errorMessage == "invalid signature") {
            console.log(errorMessage);
            return res.status(500).json({
                message: "wrong token is given"
            });
        };
        return res.status(500).json({
            message: "failed to verify token"
        });
    };
};