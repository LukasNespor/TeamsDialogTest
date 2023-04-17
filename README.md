# Teams dialog test app
## How to use
1. Run ngrok app ``.\ngrok http https://localhost:3000``
2. Update ``REACT_APP_BASE_URL`` in ``.env`` file to ngrok endpoint
3. Update  ``staticTabs > contentUrl`` in ``package/manifest.json`` file to ngrok endpoint
4. Zip content of ``package`` folder and upload to Teams as a custom app
5. Run ``npm install`` and ``npm start``
6. Open app in Teams client/browser
