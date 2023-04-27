const button = document.querySelector('button');

const state = {
  status: 'default'
};

button.addEventListener('click', () => {
  const pod = document.querySelector('.podeliahvorsorgeportal');
  if (state.status === 'switched') {
    pod.style.removeProperty('--color-primary');
    pod.style.removeProperty('--color-secondary');
    state.status = 'default';
  } else {
    pod.style.setProperty('--color-primary', 'var(--color-goldenrod)');
    pod.style.setProperty('--color-secondary', 'var(--color-tomato)');
    state.status = 'switched';
  }
});
