<!--TODO: Replace the code below with proper React app bootstrap-->
document.getElementById('app-root').innerHTML = `<button id="toggle">Toggle Widget</button>`;
document.getElementById( 'toggle' ).addEventListener( 'click', () => {
    window.parent.postMessage('url-shortener:toggle', '*');
    document.body.classList.toggle('opened');
} );
