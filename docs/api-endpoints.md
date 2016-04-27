# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### channels

- `GET /api/channels`
  - channels index/search
  - accepts `tag_name` query param to list channels by tag
  - accepts pagination params (if I get there)
- `POST /api/channels`
- `GET /api/channels/:id`
- `PATCH /api/channels/:id`
- `DELETE /api/channels/:id`

### Messages

- `GET /api/messages`