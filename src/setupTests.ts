import '@testing-library/jest-dom'

// Minimal IntersectionObserver polyfill for test environment (jsdom)
class MockIntersectionObserver {
	constructor() {}
	observe() { return null }
	unobserve() { return null }
	disconnect() { return null }
}

// @ts-ignore
global.IntersectionObserver = global.IntersectionObserver || MockIntersectionObserver
