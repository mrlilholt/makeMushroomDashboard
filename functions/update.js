exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
      try {
        const data = JSON.parse(event.body); // Parse incoming JSON data
        console.log('Received data:', data);
  
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
    } else if (event.httpMethod === 'GET') {
      // Provide a dummy response for the dashboard
      const sampleData = {
        temperature: 50,
        humidity: 95,
        timestamp: new Date().toISOString(),
      };
  
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow CORS for local testing
        },
        body: JSON.stringify({ message: 'Sample data', data: sampleData }),
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
    }
  };
  