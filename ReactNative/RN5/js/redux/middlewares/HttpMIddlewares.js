
export const httpMiddleware = store => next => action => {
  console.log(`szw myMiddleware : ${action.type}`)
  let result = next(action)
  console.log(`szw myMiddleware result = ${JSON.stringify(result)}`)
  return result
}