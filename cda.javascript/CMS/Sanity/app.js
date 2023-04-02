import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true, // Set to `false` if you want to use the preview API
});

client
  .fetch('*[_type == "post"]{title, slug, body}')
  .then(posts => {
    // Display the blog posts
  })
  .catch(error => console.error('Error fetching data:', error));
