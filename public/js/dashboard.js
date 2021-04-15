const addPost = async (event) => {
  event.preventDefault();
  document.location.replace('/dashboard/add');
};

document.querySelector('#addPost').addEventListener('click', addPost);
