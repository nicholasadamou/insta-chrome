# 📸 insta-chrome

## What is _insta-chrome_? 🤔

Easily browse Instagram from a Chrome popup.

- All information stays local, extension is just a few lines of JavaScript. 🎉

## How to Use

Clone the repository and install all dependencies by running:

```bash
git clone https://github.com/nicholasadamou/insta-chrome
cd insta-chrome/
yarn install # Optionally, 'npm' can be used instead.
```

Finally, toss the contents of the `./build/` directory into [`chrome://extensions`](chrome://extensions).

## Watching

```bash
yarn watch
```

Then, open `https://localhost:9966`.

## Credits

- [Segment](https://open.segment.com/)'s [chrome-sidebar](https://www.npmjs.com/package/chrome-sidebar) module is used to embed an _iframe as a chrome extension_.

## License

Copyright (c) by Nicholas Adamou. Some rights reserved.

`insta-chrome` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
