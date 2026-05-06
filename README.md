# OutSystems Mapbox Native Plugin

This package is a Cordova-style native plugin starter for using Mapbox Maps in an OutSystems mobile app.

It wraps:

- `mapbox-maps-android`
- `mapbox-maps-ios`

The plugin opens a full-screen native map view over the OutSystems WebView. This is the most reliable pattern for OutSystems mobile apps because embedding native map views inside DOM elements is much more fragile.

## Actions

- `initialize(options)`
- `setCamera(options)`
- `addMarker(options)`
- `removeMarker(id)`
- `clearMarkers()`
- `getCamera()`
- `close()`

## Token Handling

You can pass the public runtime access token from the OutSystems client:

```javascript
window.MapboxPlugin.initialize({
  token: "pk.your_public_token",
  styleUrl: "mapbox://styles/mapbox/streets-v12",
  latitude: 12.9716,
  longitude: 77.5946,
  zoom: 12
});
```

Or inject a fallback token through OutSystems extensibility configuration:

```json
{
  "preferences": {
    "global": [
      {
        "name": "MAPBOX_ACCESS_TOKEN",
        "value": "pk.your_public_runtime_token_here"
      }
    ]
  }
}
```

If Mapbox dependency download requires authentication, configure `MAPBOX_DOWNLOADS_TOKEN` as a build-time secret. Do not expose that token to client-side code.

## OutSystems Setup

1. Push this folder to a Git repository.
2. Add the plugin repository URL to the mobile app extensibility configuration.
3. Create the Client Actions listed in `outsystems/ClientActions.md`.
4. Generate the Android/iOS mobile app.
5. Test on a real device or emulator.

## SDK Versions

- Android uses Mapbox Maps `11.20.2` by default.
- iOS uses Mapbox Maps `~> 11.0`.
- iOS runtime token assignment uses `MapboxOptions.accessToken`, which is the v11 token API.

## Notes

- This starter intentionally uses a full-screen native overlay.
- Marker image customization is not included yet. The default Mapbox point annotation behavior is used.
- For inline maps inside a Web Block, consider Mapbox GL JS instead of the native SDKs.
