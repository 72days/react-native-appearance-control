# react-native-appearance-control

Dark and light mode appearance control.

## Installation

```sh
npm install react-native-appearance-control
```

```sh
yarn add react-native-appearance-control
```

## Usage

These methods will set the native appearance for the app to either force the app into dark/light mode (irrespective of the phone's configuration), or to use the system mode and let the phone's configuration dictate whether to use a light or dark appearance.

Combine this with your own state control (e.g. a global theme context) to give the user the power to choose their own appearance.

```js
import { setAppearanceDark, setAppearanceLight, setAppearanceSystem } from 'react-native-appearance-control';

// ...

<View>
  <Button title="Dark" onPress={setAppearanceDark} />
  <Button title="Light" onPress={setAppearanceLight} />
  <Button title="Auto/System" onPress={setAppearanceSystem} />
</View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
