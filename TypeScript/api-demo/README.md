# Demo API

This demo demonstrates a basic CRUD API for managing tasks in memory.

---

## Available Scripts

In your project directory, you can run:

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Run the server using `ts-node-dev` |
| `npm run build` | Compile TypeScript to JavaScript   |
| `npm start`     | Run the compiled server (`dist/`)  |

## API Endpoints

All requests and responses use `application/json`.

### `GET /`

Fetch all tasks.

**Response**

```json
{
  "tasks": [
    {
      "id": "uuid",
      "text": "Example Task"
    }
  ]
}
```

### `POST /`

Create a new task.

**Request Body**

```json
{
  "text": "New Task"
}
```

**Response**

```json
{
  "task": {
    "id": "uuid",
    "text": "New Task"
  }
}
```

### `PUT /:id`

Create a new task.

**Request Body**

```json
{
  "text": "Updated Task"
}
```

**Response**

```json
{
  "task": {
    "id": "uuid",
    "text": "Updated Task"
  }
}
```

### `DELETE /:id`

Delete a task by ID.

**Response**

- `204 No Content` if successful
- `404 Not Found` if task does not exist
