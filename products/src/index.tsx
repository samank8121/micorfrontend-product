import('./bootstrap').catch((err) => {
  console.error('Failed to load application:', err);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML =
      '<div>Failed to load application. Please try refreshing the page.</div>';
  }
});
