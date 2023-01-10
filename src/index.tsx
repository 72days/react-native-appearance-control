import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-appearance-control' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const AppearanceControlModule = isTurboModuleEnabled
  ? require('./NativeAppearanceControl').default
  : NativeModules.AppearanceControl;

const AppearanceControl = AppearanceControlModule
  ? AppearanceControlModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setAppearanceDark() {
  AppearanceControl.setAppearanceDark();
}

export function setAppearanceLight() {
  AppearanceControl.setAppearanceLight();
}

export function setAppearanceSystem() {
  AppearanceControl.setAppearanceSystem();
}
