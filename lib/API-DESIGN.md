# API design

> TL;DR - The goal of this file is to give some insight and instruction on how the API should be structured so we can reference this file whenever we are making updates to the API

#### Definitions of the Page Object

Example GET request for a single page

```bash
GET https://dev.huoa.org/wp-json/wp/v2/pages/312
```

```json
{
  "id": 312,
  "date": "2020-10-12T19:40:21",
  "date_gmt": "2020-10-12T19:40:21",
  "guid": {
    "rendered": "https://dev.huoa.org/?page_id=312"
  },
  "modified": "2020-10-12T19:50:08",
  "modified_gmt": "2020-10-12T19:50:08",
  "slug": "page-api-example",
  "status": "publish",
  "type": "page",
  "link": "https://dev.huoa.org/page-api-example/",
  "title": {
    "rendered": "Page Api Example"
  },
  "content": {
    "rendered": "",
    "protected": false
  },
  "excerpt": {
    "rendered": "",
    "protected": false
  },
  "author": 1,
  "featured_media": 0,
  "parent": 0,
  "menu_order": 0,
  "comment_status": "closed",
  "ping_status": "closed",
  "template": "",
  "meta": [ ],
  "acf": { // This is where most of our data for each page lives
    "description": "This is the Meta Description that will be used on page", // This is used of SEO
    "page_api_example": { // This should match the Page Tile but be in all_lowercase naming convention
      "section_one": {
        "title": "Title of Section One",
        "body": "Body of section one. This will consist of longer content, not just a title"
      },
      "section_two": {
        "title": "Title of Section Two",
        "body": "Body of section two. This will consist of longer content, not just a title"
      },
      "section_three": {
        "title": "Title of Section Three",
        "body": "Body of section three. This will consist of longer content, not just a title"
      }
    }
  }
  // Theres more stuff down here but not necessary for our purposes
}
```
