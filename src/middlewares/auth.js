import jwt from 'jsonwebtoken';

export const checkAndVerify = (req, res, next) => {
    const { Authorization } = req.headers;
    try {
        if (Authorization == null) {
            return res.status(400).json({
                message: "authorization token is missing"
            });
        };
        const tokens = Authorization.split(" ");
        if (token.length != 2) {
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
        const payload = jwt.verify(token, '@12345');
        const { phoneNumber, userID } = payload;
        req.locals = {
            phoneNumber,
            userID
        }
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
            return res.status(500).json({
                message: "wrong token is given"
            });
        };
        return res.status(500).json({
            message: "failed to verify token"
        });
    };
};