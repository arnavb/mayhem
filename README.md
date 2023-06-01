# mayhem

This is a clone of a messaging app, along the likes of Discord or Slack, made
for learning purposes. Currently a work in progress but the UI is made with
Next.js. Backend stack is Fastify with Typescript (may change).

## Implementation notes/checklist

Overall:

- Figure out authentication (!!!)
  - **Goals**: Social login (Google, maybe Github)
  - **Ideas**:
    - OAuth2 using passport.js on the backend, figuring out Next.js integration
      TBD.
    - Use something based on NextAuth.js, backend integration TBD.
    - Tokens? JWT?
  - Ideas:
    - https://github.com/nextauthjs/next-auth/discussions/1290#discussioncomment-3339772

Frontend:

- Come up with some sort of UI/design scheme.
- Need components to represent servers, channels, messages, user input, user
  list.

Backend:

- Create models representing the following:
  - User:
    - id
    - email
    - username#XXXX <-- 4 digit id
    - belongs to many servers
    - has many messages
  - Server
    - id
    - name
    - has many channels
    - has many users
  - Channel
    - id
    - name
    - belongs to a single server
  - Message
    - id
    - content
    - belongs to a single user
- Create REST API routes for the following:
  - User registration/authentication
  - Joining/leaving servers (if implemented)
  - Getting chat history (unsure)
  - Getting specific chat messages
  - Getting user information/user card.
  - Getting/modifying channels in server.
  - Getting/modifying servers a user is associated with.
- Create Websocket routes for the following (may initially represent as REST
  API):
  - Joining a specific channel in a server to talk. Channel should support:
    - Realtime updates of messages as users send (creation/editing/deletion)
