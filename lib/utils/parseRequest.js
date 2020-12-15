module.exports = rawRequest => {
    //Need to return method, path, body
    const methodSplit = rawRequest.split(' ');
    const bodySplit = rawRequest.split('\r\n\r\n');

    
    const responseObject = {
        method: methodSplit[0],
        path: methodSplit[1],
        body: bodySplit[1]
    }
    return responseObject;
};
