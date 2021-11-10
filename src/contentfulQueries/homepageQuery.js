export const homepageQuery = `
query{
  person2(id: "3lsIww5Gtd8YbhXsgXoQj5") {
    name
    socialFacebook
    socialGithub
    socialLinkedin
    bio {
      json
    }
    image {
      title
      url(transform: {
        cornerRadius:-1
        format: PNG
        width: 350
      })
    }
  }

  bookmarkCollection {
    items {
      sys {
        id
      }
      title
      url
      comment
      tagsCollection {
        items {
          title
        }
      }
    }
  }
}
`;