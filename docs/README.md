# Slackit

[Heroku link][heroku]

[heroku]: http://slack-it.herokuapp.com

## Minimum Viable Product

Slackit is a web chat application built on Rails and ReactJS  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Slack-inspired site: real time chat and channel participation amongst users
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Slackit will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Anonymous/Demo User (MVP)
- [x] Create, read messages (MVP)
- [ ] Join different channels (MVP)
- [ ] OAuth Reddit integration - stream real time comments (expected feature, but not MVP)
- [ ] OAuth Reddit integration - post to threads from within Slackit (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] Setup new Rails project with Flux architecture skeleton
- [x] setup Webpack & Flux scaffold
- [x] create `User` model
- [x] user signup/signin pages
- [x] authentication
- [x] redirect to single page app (which will contain all chat based functionality)

### Phase 2: Chat (1.5 days)

**Objective:** Implement real time chat within Rails/React

- [x] create `Message' model
- [x] seed the database with a small amount of test data (users, messages)
- [x] CRUD API for messages ('MessageController')
- [x] setup `APIUtil` to interact with the API 
- [x] test out API interaction in the console.

### Phase 3: Channel integration with chat and users (1.5 days)

**Objective:** Users can interact with global channels

- [ ] Integrate channel id within messages model
- [x] setup React Router
- [x] implement Channel component, will be alongside Chat component
  - [x] `ChannelView`
  - [x] `ChannelIndexItem`'
  - [ ] Channel can either be a automatically subscribed channel, a private channel between users, and a private channel between 2 people (DM)
  - [ ] Structure the channelView to hold separate components - making up global channels, private channels, and private DMs

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (signup, signin, chat page) will be minimally styled.

- [x] Import Foundation library
- [x] Add custom stylings on top of Foundation
- [ ] Structure elements to match wireframe
- [ ] Follow styling guide

### Phase 5: Reddit API (1 day)

**Objective:** Create Reddit JSON api functionality.

  - [x] Setup background requests to Reddit api
  - [ ] parse data through backend
  - [ ] implement component alongside existing components such as channel/messages

### Phase 6: Reddit posting (2 days)

**Objective:** Users can post comments within web app which reflect in live reddit site

  - [ ] setup OAuth
  - [ ] create posts

### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] More reddit integration
- [ ] Infinite scrolling, pagination
- [ ] User statistics/dashboard