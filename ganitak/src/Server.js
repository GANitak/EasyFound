import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import AsyncProps, { loadPropsOnServer } from 'async-props'

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, renderProps) => {

    // 1. load the props
    loadPropsOnServer(renderProps, (err, asyncProps, scriptTag) => {

      // 2. use `AsyncProps` instead of `RoutingContext` and pass it
      //    `renderProps` and `asyncProps`
      const appHTML = renderToString(
        <AsyncProps {...renderProps} {...asyncProps} />
      )

      // 3. render the script tag into the server markup
      const html = createPage(appHTML, scriptTag)
      res.send(html)
    })
  })
})

function createPage(html, scriptTag) {
  return `
    <!doctype html>
    <html>
      <!-- etc. --->
      <body>
        <div id="app">${html}</div>

        <!-- its a string -->
        ${scriptTag}
      </body>
    </html>
  `
}