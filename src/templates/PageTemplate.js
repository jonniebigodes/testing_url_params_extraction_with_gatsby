import React from "react"
import queryString from "query-string"
const PageTemplate = ({ location }) => {
  if (location.search === "") {
    return (
      <>
        <h1>
          this is a programmatic page generated in <code>gatsby-node.js</code>
        </h1>
        <h2>
          to see the the query params in action add a param/arg to the url and
          check it out
        </h2>
      </>
    )
  }
  const queryParams = queryString.parse(location.search)
  console.log(queryParams)
  return (
    <>
      <h1>this is a programmatic page generated in <code>gatsby-node.js</code> with some args/params</h1>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
    </>
  )
}

export default PageTemplate
