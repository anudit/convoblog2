const { promises : fs } = require('fs')
const path = require('path')


module.exports = ({
  poweredByHeader: false,
  //  exportPathMap: async function() {
  //   const routes = {
  //     '/': { page : '/'},
  //     "/info": { page: "/info"}
  //   }

  //   const postsDirectory = path.join(process.cwd(), 'posts')
  //   const filenames = await fs.readdir(postsDirectory);
  //   filenames.forEach(blog => {
  //     let fn =  blog.replace('.md', '');
  //     routes[`/blog/${fn}`] = { page: `/blog/[postid]`, query: { postid: fn } };
  //   });

  //   console.log('routes', routes);
  //   return routes
  // }
});
