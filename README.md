# Slackit

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Slackit is a web chat application built on Rails and ReactJS  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Slack-inspired site: creation of channels and real time chat amongst groups
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Slackit will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Anonymous/Demo User (MVP)
- [ ] Create, delete channels (MVP)
- [ ] Create, read messages (MVP)
- [ ] Organize notes within Notebooks (MVP)
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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Notes Model, API, and basic APIUtil (1.5 days)

**Objective:** Channels can be created, destroyed through
the API.

- [ ] create `Channel` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] jBuilder views for channel
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Channels can be created, destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `ChannelIndex`
  - [ ] `ChannelIndexItem`
  - [ ] 'ChannelForm`
  - [ ] 'MessageForm'

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Notebooks (1 day)

**Objective:** Create Reddit JSON api functionality.

  - [ ] Setup background requests to Reddit api
  - [ ] parse data through backend
  - [ ] merge incoming data with existing components within channels

### Phase 6: Reddit posting (1.5 days)

**Objective:** Users can post comments within web app which reflect in live reddit site

  - [ ] setup OAuth
  - [ ] create posts

### Phase 7: Allow Complex Styling in Notes (0.5 days)

**objective:** Enable complex styling of layouts.

- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] More reddit integration
- [ ] Infinite scrolling, pagination
- [ ] User statistics/dashboard`

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
