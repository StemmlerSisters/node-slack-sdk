#!/usr/bin/env node

import { fileURLToPath } from 'url';
import childProcess from 'child_process';
import path from 'path';
import fs from 'fs';

/**
 * Implementation of the start hook that begins a new process to run the app.
 * The child processes will continue until exited or interrupted by the caller.
 */

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  start(process.cwd());
}

/**
 * Start hook implementation that verifies and runs an app in Socket Mode.
 * @param {string} cwd - The current working directory of the project.
 */
export default function start(cwd) {
  // TODO - Format so that its less miss-able in output
  console.log('Preparing local run in developer mode (Socket Mode)'); // eslint-disable-line no-console
  validateEnvironment();

  const customPath = process.env.SLACK_CLI_CUSTOM_FILE_PATH;
  const pkgJSONMain = getPackageJSONMain(cwd);
  const pkgJSONDefault = 'app.js';
  const fullPath = path.resolve(cwd, customPath || pkgJSONMain || pkgJSONDefault);
  console.log(fullPath); // eslint-disable-line no-console

  const app = childProcess.spawn('node', [`${fullPath}`]);
  app.stdout.setEncoding('utf-8');
  app.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
  app.stderr.on('data', (data) => {
    process.stderr.write(data);
  });
  app.on('close', (code) => {
    console.log(`Local run exited with code ${code}`); // eslint-disable-line no-console
  });
}

/**
 * Gathers the main value from the package.json for the project if present.
 * @param {string} cwd - The current working directory of the project.
 * @returns {string | undefined} - The main script to run for the project.
 */
function getPackageJSONMain(cwd) {
  try {
    const packageJSONPath = path.join(cwd, 'package.json');
    const { main } = JSON.parse(fs.readFileSync(packageJSONPath, 'utf-8'));
    return main;
  } catch {
    return undefined;
  }
}

/**
 * Confirms environment variables are prepared by the CLI.
 */
function validateEnvironment() {
  if (!process.env.SLACK_CLI_XOXB) {
    throw new Error('Missing local run bot token. Please see Slack CLI maintainers to troubleshoot.');
  }
  if (!process.env.SLACK_CLI_XAPP) {
    throw new Error('Missing local run app token. Please see Slack CLI maintainers to troubleshoot');
  }
}
