export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }] // 🔥 rich text!
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    }
  ]
}