const editPost = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('#title').value.trim();
  const post_content = document.querySelector('#content').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (post_title && post_content) {
    const response = await fetch(`/api/posts/edit/${id}`, {
      method: 'PUT',
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

const deletePost = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/delete/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response)
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};

document.querySelector('#delete').addEventListener('click', deletePost);
document.querySelector('#edit').addEventListener('click', editPost);
