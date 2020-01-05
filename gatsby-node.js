exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/a-dynamic-page/",
    component: require.resolve("./src/templates/PageTemplate.js"),
    context: {},
  })
}
