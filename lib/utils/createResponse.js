module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {

const responseText = `
HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: 17
Content-Type: ${contentType}\r
\r
${body}
`.trim()


    return responseText;
};
