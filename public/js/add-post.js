const addPost = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('#title').value.trim();
  const post_content = document.querySelector('#content').value.trim();

  if (post_title && post_content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_title, post_content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert('Failed to update post');
    }
  }
};

document.querySelector('#create').addEventListener('click', addPost);
