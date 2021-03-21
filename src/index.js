import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getGalleryIdandKey } from './publicData';
import * as serviceWorker from './serviceWorker';

const {galleryId, userKey, adminKey} = getGalleryIdandKey()
ReactDOM.render(<App galleryId={galleryId} userKey={userKey} adminKey={adminKey}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
