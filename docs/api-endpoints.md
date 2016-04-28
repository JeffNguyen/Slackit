# API Endpoints

## HTML API

### Root

#### Unauthenticated user
- `GET /sessions#new` - loads Login template

#### Authenticated user
- `GET /static_pages#root` - loads React chat interface

### Users

- `GET /users/sign_in`
- `POST /users/sign_in`
- `DELETE /users/sign_out`
- `GET /users/sign_up`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Messages

- `GET /api/messages`
  - loads channel specific messages based on what channel the user clicks
- `POST /api/messages``

### Channels

- `GET /api/channels`

### Reddit

- TBD