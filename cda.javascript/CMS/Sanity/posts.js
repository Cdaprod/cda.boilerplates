export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    // Other fields...
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
      options: {
        minRows: 20,
      },
    },
  ],
  // ...
};
