#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

#import "AppearanceControl.h"

@implementation AppearanceControl

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setAppearanceLight) {
  if (@available(iOS 13.0, *)) {
    for (UIWindow* window in [UIApplication sharedApplication].windows) {
      window.overrideUserInterfaceStyle = UIUserInterfaceStyleLight;
    }
  }
}

RCT_EXPORT_METHOD(setAppearanceDark) {
  if (@available(iOS 13.0, *)) {
    for (UIWindow* window in [UIApplication sharedApplication].windows) {
      window.overrideUserInterfaceStyle = UIUserInterfaceStyleDark;
    }
  }
}

RCT_EXPORT_METHOD(setAppearanceSystem) {
  if (@available(iOS 13.0, *)) {
    for (UIWindow* window in [UIApplication sharedApplication].windows) {
     window.overrideUserInterfaceStyle = UIUserInterfaceStyleUnspecified;
    }
  }
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAppearanceControlSpecJSI>(params);
}
#endif

@end
