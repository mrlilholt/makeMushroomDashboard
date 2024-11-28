exports.handler = async (event, context) => {
    try {
      const data = JSON.parse(event.body); // Parse incoming JSON data
      console.log('Received data:', data); // Log data for debugging
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data received successfully', data }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request', error: error.message }),
      };
    }
  };
  