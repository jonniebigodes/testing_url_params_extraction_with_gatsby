import React from "react"
import queryString from "query-string"
export default ({ location }) => {
  if (location.search === "") {
    return (
      <>
        <h1>A normal page without any query params/args</h1>
      </>
    )
  }
  const queryParams = queryString.parse(location.search)
  console.log(queryParams)
  return (
    <>
      <h1>A normal page with some params/args</h1>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
    </>
  )
}
