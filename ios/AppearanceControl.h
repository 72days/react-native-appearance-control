
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAppearanceControlSpec.h"

@interface AppearanceControl : NSObject <NativeAppearanceControlSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AppearanceControl : NSObject <RCTBridgeModule>
#endif

@end
