// Loads the garden logic into the page's component script, then starts the runtime.
(async () => {
  const logic = document.querySelector('script[data-dc-script]');
  const res = await fetch('js/garden.js');
  logic.textContent = await res.text();

  const runtime = document.createElement('script');
  runtime.src = 'vendor/dc-runtime.js';
  document.head.appendChild(runtime);
})();
