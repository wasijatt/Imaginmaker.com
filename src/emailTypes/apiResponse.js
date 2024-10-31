// apiResponse.js

// Function to create API response object
function createApiResponse(success, message, isAcceptedMessage) {
    return {
        success: success, // true or false
        message: message, // your message string
        isAcceptedMessage: isAcceptedMessage // optional, true or false
    };
}

export default createApiResponse;
