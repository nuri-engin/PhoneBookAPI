## Available routes

- [POST] Create a new contact: http://localhost:3000/v1/contacts
- [GET] Get all contacts: http://localhost:3000/v1/contacts
- [GET] Get a specific contact: http://localhost:3000/v1/contacts/:contactId
- [GET] Query contacts with params: http://localhost:3000/v1/contacts
    - Available query parameters: 
        - sortBy: 'name:desc', // sort order
        - limit: 5, // maximum results per page
        - page: 2, // page number
- [PATCH] Update a specific contact: http://localhost:3000/v1/contacts/:contactId
- [DELETE] Delete a specific contact: http://localhost:3000/v1/contacts/:contactId
