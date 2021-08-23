(() => {
  const listener = e => e.stopPropagation();
  const query = () => document.querySelectorAll('a[target=_blank]').forEach(a => {
    a.removeEventListener('click', listener);
    a.addEventListener('click', listener, true);
  });
  query();
  setInterval(query, 400); // wait time between DOM queries, in milliseconds
})();
