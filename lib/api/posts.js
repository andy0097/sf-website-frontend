export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('http://127.0.0.1:8000/posts', {method : 'GET'});
    console.log(res.json);
    return res.json();
  }