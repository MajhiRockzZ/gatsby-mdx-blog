import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h2: props => {
    return <h2 {...props}>{props.children}</h2>
  },
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
