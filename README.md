# AirGateway API JavaScript Client

The AirGateway JavaScript client library - sometimes known as an SDK - makes it easy to interact with the AirGateway API from your server-side JavaScript applications.

**Content**

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Documentation](#documentation)

## Prerequisites

- Node >= 16.14.2

## Installation

You can install this library into your current project by executing the following command:

```
npm i @airgateway/api
```

## Usage

To get started, import the `AirGateway` module into your code and initialise it using your access token, base path and agency:

```javascript
import { AirGateway } from "@airgateway/api";

const airGateway = new AirGateway(
    process.env.AIRGATEWAY_TOKEN,
    process.env.BASE_PATH,
    process.env.AGENCY
);
```

### Making API Requests

Once initialized, you can use the AirGateway instance to make API requests.
Example:

```javascript
async function fetchProviderList() {
    try {
        // Fetching the list of providers from the API
        const response = await airGateway.getProviderList();

        // Log the response data in a structured format
        console.log("Provider list fetched successfully:", response);
    } catch (error) {
        // Log a more detailed error message
        console.error("Error fetching provider list:", error);
    }
}

fetchProviderList();
```

Expected output from `console.log(response)`:

```json
{
    "providers": ["BA", "IB", "LH"]
}
```

#### Errors

If there are any errors with your request, the client library will throw an error which you can catch.

```javascript
try {
    const response = await airGateway.getAgencyPresets();
} catch (error) {
    console.log(error);
}
```

Expecting output from `console.log(error)` similar to:

```json
{
    "group": "authentication",
    "code": "AGW_expired_JWT",
    "status": 401,
    "detail": "Expired JWT.",
    "requestID": "c963416698d142a28f30ac92b22b3bb4",
    "sessionID": ""
}
```

## Documentation

You can learn more about the AirGateway API and this library in our [documentation](https://api.airgateway.com/v1.2/swagger-ui/).
