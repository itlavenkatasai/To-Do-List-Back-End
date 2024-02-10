export const logDetailsAndProceed = (req, res, next) => {
    console.log("params", req.params);
    console.log("headers", req.headers);
    console.log('url', req.url);
    console.log('body', req.body);
    return next();
}