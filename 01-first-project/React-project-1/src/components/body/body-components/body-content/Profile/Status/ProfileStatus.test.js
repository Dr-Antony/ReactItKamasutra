import React from 'react';
import TestRenderer from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';





describe("ProfileStatus component", () => {
    test('testing testing', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus state='state' />);
        const testInstance = testRenderer.root;
        expect(testInstance.props.state).toBe('state');
    })

    test('testing fisting', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus state='state' />);
        const testInstance = testRenderer.root;
        let button = testInstance.findAllByType("button")
        button.props.onClick();
        let input = testInstance.findAllByType("input")
        expect(input.props.value).toBe('yf');
    })
})




// Видимо библиотека претерпела множество изменений, поэтому посмотри актуальные видео по тестированию. 
