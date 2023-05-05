/// <reference path="./global-types.d.ts" />
/**
 * IMPORTANT: this is not generated automatically due to this issue:
 * https://github.com/microsoft/TypeScript/issues/36763
 * the reference path above will get rewritten and break on compilation unless kept here
 * Once issue is resolve we can remove this index.d.ts from repo and go back to auto generation on tsc
 */
export type { NativeScriptConfig } from './config';
export { iOSApplication, AndroidApplication } from './application';
export type { ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData, DiscardedErrorEventData, CssChangedEventData, LoadAppCSSEventData, AndroidActivityEventData, AndroidActivityBundleEventData, AndroidActivityRequestPermissionsEventData, AndroidActivityResultEventData, AndroidActivityNewIntentEventData, AndroidActivityBackPressedEventData, SystemAppearanceChangedEventData } from './application';
import { AndroidApplication, iOSApplication, systemAppearanceChanged, getMainEntry, getRootView, _resetRootView, getResources, setResources, setCssFileName, getCssFileName, loadAppCss, addCss, on, off, notify, hasListeners, run, orientation, getNativeApplication, hasLaunched, systemAppearance, setAutoSystemAppearanceChanged, setMaxRefreshRate } from './application';
export declare const Application: {
	launchEvent: string;
	displayedEvent: string;
	uncaughtErrorEvent: string;
	discardedErrorEvent: string;
	suspendEvent: string;
	resumeEvent: string;
	exitEvent: string;
	foregroundEvent: string;
	backgroundEvent: string;
	lowMemoryEvent: string;
	orientationChangedEvent: string;
	systemAppearanceChangedEvent: string;
	fontScaleChangedEvent: string;
	systemAppearanceChanged: typeof systemAppearanceChanged;
	setMaxRefreshRate: typeof setMaxRefreshRate;
	getMainEntry: typeof getMainEntry;
	getRootView: typeof getRootView;
	resetRootView: typeof _resetRootView;
	getResources: typeof getResources;
	setResources: typeof setResources;
	setCssFileName: typeof setCssFileName;
	getCssFileName: typeof getCssFileName;
	loadAppCss: typeof loadAppCss;
	addCss: typeof addCss;
	on: typeof on;
	off: typeof off;
	notify: typeof notify;
	hasListeners: typeof hasListeners;
	run: typeof run;
	orientation: typeof orientation;
	getNativeApplication: typeof getNativeApplication;
	hasLaunched: typeof hasLaunched;
	systemAppearance: typeof systemAppearance;
	setAutoSystemAppearanceChanged: typeof setAutoSystemAppearanceChanged;
	android: AndroidApplication;
	ios: iOSApplication;
	suspended: boolean;
	inBackground: boolean;
};
import { setString, getString, clear, flush, getAllKeys, getBoolean, getNumber, hasKey, remove, setBoolean, setNumber } from './application-settings';
export declare const ApplicationSettings: {
	clear: typeof clear;
	flush: typeof flush;
	hasKey: typeof hasKey;
	remove: typeof remove;
	setString: typeof setString;
	getString: typeof getString;
	getAllKeys: typeof getAllKeys;
	getBoolean: typeof getBoolean;
	setBoolean: typeof setBoolean;
	getNumber: typeof getNumber;
	setNumber: typeof setNumber;
};
export declare const AccessibilityEvents: {
	accessibilityBlurEvent: string;
	accessibilityFocusEvent: string;
	accessibilityFocusChangedEvent: string;
};
export { AccessibilityLiveRegion, AccessibilityRole, AccessibilityState, AccessibilityTrait, FontScaleCategory } from './accessibility';
export { Color } from './color';
import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from './connectivity';
export declare const Connectivity: {
	connectionType: typeof connectionType;
	getConnectionType: typeof getConnectionType;
	startMonitoring: typeof startMonitoring;
	stopMonitoring: typeof stopMonitoring;
};
export * from './core-types';
export { CSSUtils } from './css/system-classes';
export { ObservableArray, ChangeType } from './data/observable-array';
export type { ChangedData } from './data/observable-array';
export { Observable, WrappedValue, fromObject, fromObjectRecursive } from './data/observable';
export type { PropertyChangeData, EventData } from './data/observable';
export { VirtualArray } from './data/virtual-array';
export type { ItemsLoading } from './data/virtual-array';
export { File, FileSystemEntity, Folder, knownFolders, path, getFileAccess, AndroidDirectory } from './file-system';
export type { HttpRequestOptions, HttpResponse, Headers, HttpResponseEncoding, HttpContent } from './http';
import { getFile, getImage, getJSON, getString as httpGetString } from './http';
export declare const Http: {
	getFile: typeof getFile;
	getImage: typeof getImage;
	getJSON: typeof getJSON;
	getString: typeof httpGetString;
	request: (options: import('./http').HttpRequestOptions) => Promise<import('./http').HttpResponse>;
};
export { ImageAsset } from './image-asset';
export type { ImageAssetOptions } from './image-asset';
export { ImageSource } from './image-source';
export { ModuleNameResolver, _setResolver } from './module-name-resolver';
export type { ModuleListProvider, PlatformContext } from './module-name-resolver';
export { isAndroid, isIOS, Screen, Device, platformNames } from './platform';
export type { IDevice } from './platform';
export { profile, enable as profilingEnable, disable as profilingDisable, time as profilingTime, uptime as profilingUptime, start as profilingStart, stop as profilingStop, isRunning as profilingIsRunning, dumpProfiles as profilingDumpProfiles, resetProfiles as profilingResetProfiles, startCPUProfile as profilingStartCPU, stopCPUProfile as profilingStopCPU } from './profiling';
export type { InstrumentationMode, TimerInfo } from './profiling';
export { encoding } from './text';
export * from './trace';
export * from './ui';
import { GC, isFontIconURI, isDataURI, isFileOrResourcePath, executeOnMainThread, mainThreadify, isMainThread, dispatchToMainThread, executeOnUIThread, releaseNativeObject, getModuleName, openFile, openUrl, isRealDevice, layout, ad as androidUtils, iOSNativeHelper as iosUtils, Source, escapeRegexSymbols, convertString, dismissSoftInput, dismissKeyboard, queueMacrotask, queueGC, throttle, debounce, dataSerialize, dataDeserialize, copyToClipboard, getFileExtension, isEmoji, getDurationWithDampingFromSpring } from './utils';
import { SDK_VERSION } from './utils/constants';
import { ClassInfo, getClass, getBaseClasses, getClassInfo, isBoolean, isDefined, isFunction, isNullOrUndefined, isNumber, isObject, isString, isUndefined, toUIString, verifyCallback, numberHasDecimals, numberIs64Bit } from './utils/types';
export declare const Utils: {
	GC: typeof GC;
	SDK_VERSION: typeof SDK_VERSION;
	RESOURCE_PREFIX: string;
	FILE_PREFIX: string;
	queueMacrotask: typeof queueMacrotask;
	queueGC: typeof queueGC;
	debounce: typeof debounce;
	throttle: typeof throttle;
	isFontIconURI: typeof isFontIconURI;
	isDataURI: typeof isDataURI;
	isFileOrResourcePath: typeof isFileOrResourcePath;
	getFileExtension: typeof getFileExtension;
	executeOnMainThread: typeof executeOnMainThread;
	executeOnUIThread: typeof executeOnUIThread;
	mainThreadify: typeof mainThreadify;
	isMainThread: typeof isMainThread;
	dispatchToMainThread: typeof dispatchToMainThread;
	releaseNativeObject: typeof releaseNativeObject;
	escapeRegexSymbols: typeof escapeRegexSymbols;
	convertString: typeof convertString;
	getModuleName: typeof getModuleName;
	openFile: typeof openFile;
	openUrl: typeof openUrl;
	isRealDevice: typeof isRealDevice;
	layout: typeof layout;
	android: typeof androidUtils;
	ad: typeof androidUtils;
	ios: typeof iosUtils;
	dataSerialize: typeof dataSerialize;
	dataDeserialize: typeof dataDeserialize;
	numberHasDecimals: typeof numberHasDecimals;
	numberIs64Bit: typeof numberIs64Bit;
	setTimeout: typeof setTimeout;
	setInterval: typeof setInterval;
	clearInterval: typeof clearInterval;
	clearTimeout: typeof clearTimeout;
	Source: typeof Source;
	ClassInfo: typeof ClassInfo;
	getClass: typeof getClass;
	getBaseClasses: typeof getBaseClasses;
	getClassInfo: typeof getClassInfo;
	isBoolean: typeof isBoolean;
	isDefined: typeof isDefined;
	isFunction: typeof isFunction;
	isNullOrUndefined: typeof isNullOrUndefined;
	isNumber: typeof isNumber;
	isObject: typeof isObject;
	isString: typeof isString;
	isUndefined: typeof isUndefined;
	toUIString: typeof toUIString;
	verifyCallback: typeof verifyCallback;
	dismissSoftInput: typeof dismissSoftInput;
	dismissKeyboard: typeof dismissKeyboard;
	copyToClipboard: typeof copyToClipboard;
	isEmoji: typeof isEmoji;
	getDurationWithDampingFromSpring: typeof getDurationWithDampingFromSpring;
};
export { XmlParser, ParserEventType, ParserEvent } from './xml';
