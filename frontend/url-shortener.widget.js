(function() {
    const WIDGET_ORIGIN = 'http://localhost:8080';
    const WIDGET_ID = 'url-shortener-widget';
    const WIDGET_TOGGLE_MESSAGE = 'url-shortener:toggle';
    const WIDGET_TOGGLE_CLASS = 'collapsed';
    const WIDGET_IFRAME_STYLES = `
            #${WIDGET_ID} {
                position: fixed;
                bottom: 0;
                right: 0;
                border: 0;

                width: 500px;
                height: 200px;
                margin-right: 30px;

                transition: height 0.3s ease-out, width 0.3s ease-out;
            }

            #${WIDGET_ID}.${WIDGET_TOGGLE_CLASS} {
                height: 45px;
                width: 130px;
            }
        `;

    function toggleWidget( { origin, data } ) {
        if ( origin !== WIDGET_ORIGIN ) {
            return;
        }
        if ( data === WIDGET_TOGGLE_MESSAGE ) {
            document.getElementById( WIDGET_ID ).classList.toggle( WIDGET_TOGGLE_CLASS );
        }
    }

    function addStylesToHeader( styles ) {
        const styleElement = document.createElement( 'style' );
        styleElement.innerHTML = styles;
        document.head.appendChild( styleElement );
    }

    function appendWidgetFrame() {
        const frame = document.createElement( 'iframe' );
        frame.id = WIDGET_ID;
        frame.src = WIDGET_ORIGIN;
        frame.classList.add(WIDGET_TOGGLE_CLASS);
        document.body.appendChild( frame );
    }

    window.addEventListener('message', toggleWidget);
    addStylesToHeader(WIDGET_IFRAME_STYLES);
    appendWidgetFrame();
})();
