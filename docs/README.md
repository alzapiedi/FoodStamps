# FoodStamps


## Minimum Viable Product

FoodStamps is a web application for sharing pictures of food, inspired by
Instagram and built using Ruby on Rails and React.js.
FoodStamps allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, delete, comment on and like stamps
- [ ] Follow other users to access the stamps they share.
- [ ] Tag a stamp with multiple tags and search stamps by tag
- [ ] Optional: Tag a stamp with a geolocation.

## Design Docs

<!-- [view]: ./docs/views.md -->
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Stamp Model and JSON API (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Stamps.

[Details][phase-one]

### Phase 2: Flux Architecture and Stamp CRUD (2 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Stamp store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the `Feed`, `FeedItem` and `StampForm`. At the end of Phase 2,
Stamps can be created, read, edited and destroyed in the browser.

[Details][phase-two]

### Phase 3: Comments and Tags (3 days)

Phase 3 adds the ability to comment on stamps and tag a stamp with multiple tags.
Tags are added at the time the stamp is created, but users can edit an existing
stamp to add tags. Tags are added by putting "#tag_name" in the description of the
Stamp.  The Stamp create/edit page will also have a `Map` component added to
optionally tag a stamp with a geolocation.

[Details][phase-three]

### Bonus Features (TBD)
- [ ] Users can optionally add locations to a stamp.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
