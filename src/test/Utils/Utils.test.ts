import { IncomingMessage } from "http";
import { Utils } from "../../app/Utils/Utils";

describe('Utils test suite', () => {
    test('getRequestPath valid request', () => {
        const request = {
            url: 'http://localhost:8080/login'
        } as IncomingMessage;
        const result = Utils.getRequestBasePath(request);
        expect(result).toBe('login');
    });

    test('getRequestPath with no path name', () => {
        const request = {
            url: 'http://localhost:8080'
        } as IncomingMessage;
        const result = Utils.getRequestBasePath(request);
        expect(result).toBeFalsy();
    });

    test('getRequestPath with no path name', () => {
        const request = {
            url: ''
        } as IncomingMessage;
        const result = Utils.getRequestBasePath(request);
        expect(result).toBeFalsy();
    });
});