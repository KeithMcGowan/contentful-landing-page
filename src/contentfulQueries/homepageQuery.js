export const homepageQuery = `
query($isPreview: Boolean=false) {
  person2(id: "3lsIww5Gtd8YbhXsgXoQj5", preview: $isPreview) {
    name
    socialFacebook
    socialGithub
    socialLinkedin
    bio {
      json
    }
    image {
      title
      url(transform: {cornerRadius: -1, format: PNG, width: 350})
    }
  }
  allBookmarks: bookmarkCollection {
    items {
      ...bookmarkFields
    }
  }
  
  favoriteTagCollection: tagCollection(where: {
    title_contains: "favorite"
  }, limit: 5) {
    items {
      title
      linkedFrom {
        bookmarkCollection {
          items {
            ...bookmarkFields
          }
        }
      }
    }
  }
}

fragment bookmarkFields on Bookmark {
  sys {
    id
  }
  title
  url
  comment
  tagsCollection(limit: 5) {
    items {
      title
    }
  }
}
`;
