Yes, Sanity.io is a headless CMS that can help you achieve this in an easier and more manageable way. Sanity provides a content management platform where you can store, structure, and update your content. You can use Sanity Studio, their customizable editing environment, to create and manage your blog posts, including writing content in Markdown.

To get started with Sanity, follow these steps:

Install the Sanity CLI: Install the Sanity CLI globally on your computer using npm or yarn:

```
npm install -g @sanity/cli
```

Initialize a new Sanity project: Run the following command and follow the prompts to create a new Sanity project:

```
sanity init
```

Choose the “Blog” schema template when prompted, which includes a basic structure for blog posts.

Configure your schema: Navigate to the schemas directory in your new Sanity project, and open the post.js file. Modify the schema to use a Markdown editor for the blog post content:

```
export default {
  name: ‘post’,
  title: ‘Post’,
  type: ‘document’,
  fields: [
    // Other fields...
    {
      name: ‘body’,
      title: ‘Body’,
      type: ‘markdown’,
      options: {
        minRows: 20,
      },
    },
  ],
  // ...
};
```
You’ll also need to add the following line to the resolvePreview() function in the resolveProductionUrl.js file:

```
process.env.SANITY_STUDIO_PREVIEW_SECRET_TOKEN
```

Start Sanity Studio: Run sanity start to start Sanity Studio locally. Open the provided URL in your browser to access the editing environment.
Manage your content: Use Sanity Studio to create and manage your blog posts. You can write content using the Markdown editor provided in the schema.
Deploy Sanity Studio: Deploy Sanity Studio to a live URL for easier content management using sanity deploy. This will allow you to access and edit your content from anywhere.
Integrate with your front-end: Use the Sanity JavaScript client to fetch content from your Sanity project and display it in your front-end application. Install the Sanity client using npm or yarn:
```
npm install @sanity/client
```

Fetch and display blog posts: In your front-end application, use the Sanity client to fetch your blog posts and display them on your website. For example:

```
import sanityClient from ‘@sanity/client’;

const client = sanityClient({
  projectId: ‘your-project-id’,
  dataset: ‘production’,
  useCdn: true, // Set to `false` if you want to use the preview API
});

client
  .fetch(‘*[_type == “post”]{title, slug, body}’)
  .then(posts => {
    // Display the blog posts
  })
  .catch(error => console.error(‘Error fetching data:’, error));
```
 
By using Sanity.io, you can manage your blog content more easily and efficiently, with a user-friendly interface for creating and editing your posts.