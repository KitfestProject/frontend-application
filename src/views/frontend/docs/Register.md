## Required Endpoints and Request Bodies

1. **Register User:**

    - Endpoint: `/api/v1/auth/register`
    - Method: `POST`,

  ```bash
  - request_body: {
      "name": "Jone Doe",
      "email": "user@example.com",
      "password": "password123"
    }
    ```