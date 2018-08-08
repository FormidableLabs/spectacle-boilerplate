const { getOptions } = require('loader-utils')
const mdx = require('@mdx-js/mdx')
const matter = require('gray-matter')
const stringifyObject = require('stringify-object')
const normalizeNewline = require('normalize-newline')

const EXREG = /export\sdefault\s\(/g
const MODREG = /^(import|export)\s/
const SLIDEREG = /\n---\n/
const TRANSREG = /^export const transition.*\s(.*)/
const hasDefaultExport = str => /export default/.test(str);

const defaultLayout = (str) => {
  if (!hasDefaultExport(str)) {
    str = `import {DefaultSlide} from './slides'

export default DefaultSlide

${str}`;
  }
  return str;
}

module.exports = async function (src) {
  const callback = this.async()
  const options = getOptions(this) || {}

  const { data, content } = matter(src)

  const transitions = [];

  const inlineModules = []
  const slides = normalizeNewline(content)
    .split(SLIDEREG)
    .map(str => defaultLayout(str))
    .map(str => mdx.sync(str, options))
    .map(str => str.trim())
    .map(str => str.replace(EXREG, '('))
    .map(str => {
      const lines = str.split('\n')
      let transition = null;
      lines.forEach(line => {
        let match = line.match(TRANSREG);
        if (match && match[1]) {
          transition = match[1];
        }
      })

      transitions.push(transition);

      return lines.filter(str => !TRANSREG.test(str))
        .filter(Boolean)
        .join('\n')
    })
    .map(str => {
      const lines = str.split('\n')
      inlineModules.push(
        ...lines.filter(str => MODREG.test(str))
      );
      return lines.filter(str => !MODREG.test(str))
        .filter(Boolean)
        .join('\n')
    })

  const {
    modules = []
  } = data

  const code = `import React from 'react'
import { MDXTag } from '@mdx-js/tag'
${modules.join('\n')}
${inlineModules.filter(function (el, i, arr) {
      return arr.indexOf(el) === i;
    }).join('\n')}

export const transitions = [
  ${transitions.join(',')}
]

export default [
  ${slides.join(',\n\n')}
]`

  return callback(null, code)
}