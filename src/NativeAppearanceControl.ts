import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setAppearanceDark(): Promise<void>;
  setAppearanceLight(): Promise<void>;
  setAppearanceSystem(): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AppearanceControl');
