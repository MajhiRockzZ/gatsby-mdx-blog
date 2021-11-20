import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote } from './src/components/Complete'

// const Testing = ({ children }) => {
//   return <code className="code">{children}</code>
// }

const components = {
  h2: Headings.myH2,
  h3: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
