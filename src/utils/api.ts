import * as fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), './src/contents')

// ディレクトリ名を全て取得
export const getPostSlugs = () => {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })
  const dirNames = allDirents.filter((dirent) => dirent.isDirectory()).map(({ name }) => name)

  return dirNames
}

/**
 * 与えられたslugから記事の内容を取得して返す
 * @param slug
 * @param fields 取得したい値 (slug | content | title | tags)
 */
type Item = {
  slug: string
  content: string
  title: string
  tags: string[]
  categories: string[]
  createdAt: string
  updatedAt?: string
}

export const getPostBySlug = (slug: string, fields: string[] = []): Item => {
  // file read
  const fullPath = join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const item: Item = {
    slug: '',
    content: '',
    title: '',
    tags: [],
    categories: [],
    createdAt: '',
    updatedAt: '',
  }

  fields.forEach((field) => {
    field === 'slug' && (item[field] = slug)
    field === 'content' && (item[field] = content)
    if ('title' === field || 'createdAt' === field || 'updatedAt' === field || 'tags' === field || 'categories' === field) {
      item[field] = data[field]
    }
  })

  return item
}

/**
 * 全ての記事から指定したfieldsの値を取得する
 * @param fields 取得したい値 (slug | content | title | tags | categories)
 */

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => {
      const slugA = a.slug.toString().toLowerCase()
      const slugB = b.slug.toString().toLowerCase()

      return slugA >= slugB ? 1 : -1
    })

  return posts
}
