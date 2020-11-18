(async () => {
  const el = document.getElementById('replaceme');
  el.textContent = 'Loading';
  try {
    // Ensure that we can make a request to the data server.
    await fetch('https://byteboard.dev/api/serverinfo/servertime');
    el.textContent = 'Success! Your local environment is working.';
  } catch (err) {
    console.error(err);
    el.textContent = 'Unable to make a request to the server. Please ensure ' +
      'you are running the web server from either localhost or 127.0.0.1';
  }
})();