const response = (statusCode, data, message, res) => {
    res.json(statusCode,[
        {
            payload : {
                data,
                message
            },
            metadata : {
                prev : "",
                nest : "",
                current : ""
            }
        }
    ])
}

module.exports = response