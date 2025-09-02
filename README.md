# feed-zipper-player-react

Lightweight React wrapper for the FeedZipper Player embed.

## Install

```bash
npm install @feed-zipper/feed-zipper-player-react
# or
yarn add @feed-zipper/feed-zipper-player-react
```

## Usage

```tsx
import FZPlayer from "@feed-zipper/feed-zipper-player-react";

export default function Page() {
  return (
    <FZPlayer
      channelId="YOUR_CHANNEL_ID"
      apiKey="YOUR_PUBLIC_API_KEY"
      style={{ height: 480 }}
    />
  );
}
```

### Props

- `channelId` (string) – required. Maps to `data-id` on the embed script.
- `apiKey` (string) – required. Maps to `data-key` on the embed script.
- `className` (string) – optional. Applied to the outer container.
- `style` (CSSProperties) – optional. Applied to the outer container. Defaults to `width: 100%`.
- `referrerPolicy` (ReferrerPolicy) – optional. Sets `data-referrerpolicy` to control referrer behavior for the embed.

## Notes

- The component injects the public embed script `https://player.feedzipper.com/embed.min.js` inside its own container. Cleanup occurs on unmount or when props change.
- Compatible with Next.js App Router; the `"use client"` directive is included but is harmless in plain React.

## License

MIT


