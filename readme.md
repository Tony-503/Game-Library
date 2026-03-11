# WEB103 Project 1 - *Game Library*

Submitted by: **Tony Hernandez**

About this web app: **App the diplay data for the user in cards making organize**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [ ] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**

- [x] The user can search for items by a specific attribute

## PostgreSQL Database

The app uses PostgreSQL for the `games` table. The schema is created and seeded from [server/config/reset.js](c:/Users/tonyh/Game-Library/server/config/reset.js).

```sql
CREATE TABLE IF NOT EXISTS games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price_point VARCHAR(20) NOT NULL,
  audience VARCHAR(100) NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  submitted_by VARCHAR(100) NOT NULL,
  submitted_on TIMESTAMP NOT NULL
);
```

Database connection settings are loaded from environment variables in [server/config/database.js](c:/Users/tonyh/Game-Library/server/config/database.js): `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGPORT`, and `PGDATABASE`.

Example seeded fields come from [server/data/games.js](c:/Users/tonyh/Game-Library/server/data/games.js), including:

- `name`
- `price_point`
- `audience`
- `image`
- `description`
- `submitted_by`
- `submitted_on`

## Video Walkthrough
Here's a walkthrough of implemented required features:
[Video Walkthrough](https://www.loom.com/share/2c01aae9eaf543b1a3b66719cea24f6c)

## Video Walkthrough 2
[Video Walkthrough](https://www.loom.com/share/6e3825a9ac0f4ae1bb6a47fe84cd4f42)




<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  Add GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

## License

Copyright [2026] [Tony Hernandez]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.