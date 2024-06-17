function initMirador() {
    // Only the /vault and /spotlight pages need Mirador viewers
    const pagePath = window.location.pathname;

    switch(true) {
        case pagePath.includes('vault') : initViewers(["vault-viewer-1","vault-viewer-2"]); break;
        case pagePath.includes('spotlight') : initViewers(["spotlight-viewer-1","spotlight-viewer-2"]); break;
    }
}

// initalize all Mirador viewers on the current page
function initViewers(array) {

    // Sanity check
    array.forEach((elementId) => console.log(elementId));

    // To Do:
    //  1. Create HTML elements with the needed ids, data attribute (data-manifest-url)
    //  2. Initalize a new viewer like so:
    //      var mirador = Mirador.viewer({
    //       "id": elementId,
    //       "windows": [
    //           {
    //               "loadedManifest": document.querySelector(elementId).dataset.manifestUrl,
    //               "canvasIndex": 0,
    //               "thumbnailNavigationPosition": 'far-bottom'
    //           }
    //       ]
}