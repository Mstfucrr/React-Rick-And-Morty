
# <img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-PNG-HD-Quality.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="20%" height="auto" /> WITH REACT

### The goal of this project is to turn the [Figma](https://www.figma.com/file/yG06KXDlMRs1dPMmuWG1e8/viravira.co---Frontend-Developer-Task-(Rick-and-Morty)?type=design&node-id=0-1&mode=design&t=JHMwFi0WJ8aQvBP4-0) design into a web application using React and to pull data from the [GraphQL API](https://rickandmortyapi.com/graphql) and display it in the design.

* **The purpose of your project includes the following elements**
  - Turning a design into an app: Turning your Figma design into a real web application using React.
  - Fetching data: Using appropriate queries to pull data through the GraphQL API
  - Displaying data: Using captured data to show details of characters, locations or other data items in the app. For example, placing data appropriately in the design to show characters' names, images, statuses, types, etc.

---



## Using the API in this Project

#### Api Connection

```http
  https://rickandmortyapi.com/graphql
```


| Operation | Parameters | Description |
| :--------------------------------- | :----------------------------------------------- | :---------------------------------------------------------------- |
| `character(id: ID!)`  | `id: ID!` | Gets a specific character by ID. |
| `location(id: ID!)` |  `id: ID!` | Gets a specific location by ID. |
| `locations(page: Int, filter: FilterLocation)`  | `page: Int`, `filter: FilterLocation` | Gets a list of all locations by page number and optionally by filters.
| `getCharactersByLocation(id: string, page: number, filter?: FilterCharacter)` | `id: string`,`page: Int`, `filter: FilterCharacter` | Gets characters by Location ID, page number and optionally by filters. |

- `character(id: ID!)` : operation retrieves character information based on the ID of a given character.
- `location(id: ID!)` : operation retrieves location information according to the ID of a specific location.
- `locations(page: Int, filter: FilterLocation)` : operation returns a list of all locations with paging and filtering options.
- `getCharactersByLocation(id: string, page: number, filter?: FilterCharacter)` : operation returns a list of all characters according to the ID of a given location with paging and filtering options.

## Queries in the Project


* ### Location Queries
  
    - #### Retrieves the location by its ID.
  
      | Parameter | Type | Description |
      | :-------- | :------ | :----------------- |
      | `$id` | `ID!` | **Required**. ID of the location |

    ---

  - #### Retrieves All Locations.

    | Parameter | Type | Description |
    | :-------- | :----------- | :------------------------------------- |
    | `$page` | `Int!` | **Required**. Page number |
    | `$filter` | `FilterLocation` | Filtering options (optional) |

    ---

  - #### Retrieves Characters based on location id.

    | Parameter | Type | Description |
    | :-------- | :----------- | :------------------------------------- |
    | `$id` | `ID!` | **Required**. ID of the location |
    | `$page` | `Int!` | **Required**. Page number |
    | `$filter` | `FilterCharacter` | Filtering options (optional) |
    
* ### Character Queries

  - #### Retrieves character by id.

    | Parameter | Type | Description |
    | --------- | ---------- | --------------------------------- |
    | `id` | `ID!` | **Required**. Character ID |


## Technologies Used
 
#### The technologies used for this project are as follows:

**UI and Component Development:**
- [React](https://react.dev): JavaScript library for building user interfaces and components.
- [React DOM](https://www.npmjs.com/package/react-dom): Package used to connect React application to HTML DOM.
- [React Router DOM](https://github.com/remix-run/react-router): Package used to perform routing operations in React application.
- [Styled Components](https://github.com/styled-components/styled-components): Package that provides a custom CSS-in-JS solution for React components.
- [Bootstrap 4.6.2](https://getbootstrap.com/docs/4.6/getting-started/introduction/): HTML and CSS based design library.
- [Skeleton Loader](https://www.npmjs.com/package/skeleton-loader) : Skeleton loaders are visual placeholders for information while data is still loading. A skeleton loader provides a low fidelity representation of the interface that will be loaded.
  
**Server:**
- [Axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and manage the conversion of request and response data.

**Data Management and API Communication:**
- [GraphQL Request](https://www.npmjs.com/package/graphql-request): Package used to make HTTP requests to the GraphQL API.

**Style and Design:**
- Sass: A CSS preprocessor that improves the writing of CSS and makes it more organized.

**Other:**
- TypeScript: A programming language that provides static type checking for JavaScript.
- Web Vitals: A package used to measure web performance.

---

## Run on your computer

Clone the project

```bash
   gh repo clone Mstfucrr/React-Rick-And-Morty
```

Navigate to the project directory

```bash
  cd project_name
```

Install the required packages

```bash
  npm install
```

Build it
```bash
  npm run build
```

Run the project

```bash
  npm run start
```
And open **http://localhost:3000** to view it in the browser.

## Screenshots

<h3> WEB </h3>
<div>
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/98c222b8-23f2-4c55-8eb8-e5f41014ff57" width="60%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/81d792e4-1d94-4465-8209-d5169819e73d" width="60%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/8615c3b8-9e7d-422c-8868-e43e7543b722" width="60%" height="auto" />
</div>
  <h3> MOBILE </h3>
<div>
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/474eda3d-b51d-40ba-aede-af3d73af4552" width="33%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/8ce6f803-6fdd-42d0-8731-610fbd58645e" width="33%" height="auto" />
  <img src="https://github.com/Mstfucrr/React-Rick-And-Morty/assets/76887611/bfbc808e-3f88-4504-975c-35a91feb4b7a" width="33%" height="auto" />
</div>


## Annexes

### CLS REPORT

```bash
{
    "name": "CLS",
    "value": 0,
    "delta": 0,
    "entries": [],
    "id": "v2-1688851918689-1630438185744"
}
```

#### Design 
To look at the Figma Design page 
[click here.](https://www.figma.com/file/yG06KXDlMRs1dPMmuWG1e8/viravira.co---Frontend-Developer-Task-(Rick-and-Morty)?type=design&node-id=0-1&mode=design&t=JHMwFi0WJ8aQvBP4-0)

