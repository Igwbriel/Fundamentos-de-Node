//  /users/:id

export function buildRoutePath(path) {
  const routerParametersRegex = /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(routerParametersRegex)));
}