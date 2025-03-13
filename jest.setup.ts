import '@testing-library/jest-dom'
import 'cross-fetch/polyfill';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'))
