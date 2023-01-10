# react-native-appearance-control

Dark and light mode appearance control methods.

Force the app into dark/light mode (irrespective of the phone's configuration), or use the system mode and let the phone's configuration dictate whether to use a light or dark appearance.

Combine this with your own state control (e.g. a global theme context) to give the user the power to choose their own appearance.

## Installation

```sh
npm install react-native-appearance-control
```

```sh
yarn add react-native-appearance-control
```

## Usage

* setAppearanceDark - force this app into dark/night display
* setAppearanceLight - force this app into light display
* setAppearanceSystem - use the device's settings to derive colour scheme (i.e. mode unspecified)

```js
import { View, Button, useColorScheme } from 'react-native';
import { setAppearanceDark, setAppearanceLight, setAppearanceSystem } from 'react-native-appearance-control';

// ...

function MyApp() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: isDark ? '#000' : '#fff' }}>
      <Text style={{ color: isDark ? '#fff' : '#000' }}>Appearance: {colorScheme}</Text>
      <Button title="Dark" onPress={setAppearanceDark} />
      <Button title="Light" onPress={setAppearanceLight} />
      <Button title="Auto/System" onPress={setAppearanceSystem} />
    </View>
  )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
