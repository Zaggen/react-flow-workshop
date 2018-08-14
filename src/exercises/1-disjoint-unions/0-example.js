// @flow
// TODO: Fix Config type to properly handle coodependant props and simplify if
// TODO: Show how to keep props DRY with exact props and spread
// TODO: Show example with state

type Config =
  | {|
      rootUrl: string,
    |}
  | {|
      rootUrl: string,
      dynamicLink: boolean,
      userId: number,
    |}

function createUserLink(config: Config): string {
  if (config.dynamicLink && config.userId) {
    return `${config.rootUrl}/users/${config.userId}`
  }
  return `${config.rootUrl}/users/`
}

// other-file.js

const link = createUserLink({
  rootUrl: 'www.mywebsite.com',
  dynamicLink: true,
  userId: 2,
})

const link2 = createUserLink({
  rootUrl: 'www.mywebsite.com',
})
