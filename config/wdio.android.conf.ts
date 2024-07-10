import { join } from 'path';
import { config as baseConfig } from './wdio.shared.local.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,

// ============
// Specs
// ============ 
specs:[
    '../tests/specs/*.ts'
],

capabilities:[
    {
         // The defaults you need to have in your config
         platformName: 'Android',
         maxInstances: 1,
         'appium:deviceName': 'Pixel 6 API 35',
         'appium:platformVersion': '15.0',
         'appium:orientation': 'PORTRAIT',
         'appium:automationName': 'UiAutomator2',
         // The path to the app     
         'appium:app': join(process.cwd(), './apps/app-release.apk'),
         // @ts-ignore
         'appium:appWaitActivity': 'com.buildware.MainActivity',
         'appium:noReset': false,
         'appium:newCommandTimeout': 240,
     }
    
]

}

