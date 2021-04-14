const addSect = document.querySelector('#add-sect');
addSect.style.display = 'none';

const goToAdd = async (event) => {
  event.preventDefault();

  const commentSect = document.querySelector('#comment-sect');
  // hides comments and shows field for entering new comments
  commentSect.style.display = 'none';
  addSect.style.display = 'block';

//   // get id of current cocktail
//   const post_id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];
//   const comment_message = document
//     .querySelector('#comment-message')
//     .value.trim();

//   if (post_id && comment_message) {
//     const response = await fetch(`/api/comments`, {
//       method: 'POST',
//       body: JSON.stringify({ post_id, comment_message }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace(`/post/${post_id}`);
//     } else {
//       alert('Failed to create project');
//     }
//   }
};

const addComment = async (event) => {
  event.preventDefault();

  // get id of current cocktail
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const comment_message = document
    .querySelector('#comment-message')
    .value.trim();

  if (post_id && comment_message) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, comment_message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create project');
    }
  }
};


document.querySelector('#addComment').addEventListener('click', addComment);
document.querySelector('#add').addEventListener('click', goToAdd);
