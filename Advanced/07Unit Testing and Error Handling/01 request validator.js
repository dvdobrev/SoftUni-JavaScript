function solve(object){
    validateMethod(object);
    validateUri(object);
    validateVersion(object);
    validateMessage(object);

    return object;

    function validateMessage() {
        let propName = 'message';
        let messageRegex = /^[^<>\\&'"]*$/;

        if (object[propName] === undefined || 
            !messageRegex.test(object[propName])) {
            throw new Error(`Invalid request header: Invalid Message`);
            }
    }

    function validateVersion(object) {
        let propName = 'version';
        let validateVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (object[propName] === undefined || 
            !validateVersion.includes(object[propName])) {
            throw new Error(`Invalid request header: Invalid Version`);
            }
    }

    function validateUri(object) {
        let propName = 'uri';
        let uriRegex = /^\*$|^[a-zA-Z0-9.]+$/;

        if (object[propName] === undefined || !uriRegex.test(object[propName])) {
            throw new Error(`Invalid request header: Invalid URI`);
        }
    }

    function validateMethod(object) {
        let validateMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';

        if (object[propName] === undefined || 
            !validateMethods.includes(object[propName])) {
            throw new Error(`Invalid request header: Invalid Method`);
        } 
    }
}

solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  })

// solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   })