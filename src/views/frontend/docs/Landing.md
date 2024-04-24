## Required Endpoints and Request Bodies

- **Search Filter**:

- Endpoint: `/api/v1/search-events`
- Method: "GET",

  ```bash
  - request_body: {
      "search_term": "example event",
      "Location": "nairobi"
    }
  ```

- **Sort Upcoming Events**:

- Endpoint: `/api/v1/sort-events`
- Method: `GET`,

  ```bash
  - request_body: {
      "sort_value": "this_week",
    }
  ```

- **Get Upcoming Events**:

- Endpoint: `/api/v1/upcoming-events`
- Method: "GET",

- **Get Categories**:

- Endpoint: `/api/v1/categories`
- Method: "GET",

- **Get Recent Blogs**:

- Endpoint: `/api/v1/recent-blogs`
- Method: "GET",
