import CopyWebpackPlugin from 'copy-webpack-plugin';
import { relative, resolve } from 'path';
import Config from 'webpack-chain';

import { getProjectRootPath } from './project';
import { getEntryDirPath } from './platform';
import { env } from '..';

/**
 * @internal
 */
export let copyRules = new Set([]);

/**
 * @internal
 */
export let additionalCopyRules = [];

/**
 * Utility to add new copy rules. Accepts a glob or an object. For example
 *  - **\/*.html - copy all .html files found in any sub dir.
 *  - myFolder/* - copy all files from myFolder
 *
 * When passing an object - no additional processing is done, and it's
 * applied as-is. Make sure to set every required property.
 *
 * The path is relative to the folder of the entry file
 * (specified in the main field of the package.json)
 *
 * @param {string|object} globOrObject
 */
export function addCopyRule(globOrObject: string | object) {
	if (typeof globOrObject === 'string') {
		return copyRules.add(globOrObject);
	}

	additionalCopyRules.push(globOrObject);
}

/**
 * Utility to remove a copy rule. The glob should be the exact glob
 * to remove. For example
 *  - fonts/** - to remove the default copy rule for fonts
 *
 * @param {string} glob
 */
export function removeCopyRule(glob: string) {
	copyRules.delete(glob);
}

/**
 * @internal
 */
export function applyCopyRules(config: Config) {
	const entryDir = getEntryDirPath();
	const globOptions = {
		dot: false,
		ignore: [],
	};

	// todo: do we need to handle empty appResourcesPath?
	// (the CLI should always pass the path - maybe not required)
	if (env.appResourcesPath) {
		const appResourcesFullPath = resolve(
			getProjectRootPath(),
			env.appResourcesPath
		);

		// ignore everything in App_Resources (regardless where they are located)
		globOptions.ignore.push(`**/${relative(entryDir, appResourcesFullPath)}/**`);
	}

	config.plugin('CopyWebpackPlugin').use(CopyWebpackPlugin, [
		{
			patterns: Array.from(copyRules)
				.map((glob) => ({
					from: glob,
					context: entryDir,
					noErrorOnMissing: true,
					globOptions,
				}))
				.concat(additionalCopyRules),
		},
	]);
}
