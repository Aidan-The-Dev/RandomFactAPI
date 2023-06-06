# Random Facts API

The Random Facts API is a simple API that provides random facts on various topics. It allows developers to retrieve random facts programmatically, which can be useful for trivia apps, educational tools, or any project that requires interesting and engaging facts.

## Usage

### Get a Random Fact

- Endpoint: `/random-fact`
- Method: GET
- Response Format: JSON

Example Request:

```http
GET /random-fact
```

Example Response:
```json
{
  "fact": "The Earth is approximately 4.5 billion years old."
}
```
---

Running the API locally
1. Clone the repository

```bash
git clone https://github.com/your-username/random-facts-api.git
```
---

### Install dependencies

```bash
cd random-facts-api
npm install
```
---

### Start the server

```bash
npm start
```
---

## Contributing
<br>

### Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to submit a pull request. Please make sure to follow the code style, make sure any facts that are added are 100% factual and conduct appropriate tests.
