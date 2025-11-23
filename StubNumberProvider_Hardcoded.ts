import { NumberProvider } from './NumberProvider.ts';

export class StubNumberProvider_Hardcoded implements NumberProvider {
    public async readNumbers(): Promise<Array<number>> {
        return Promise.resolve([5, 10, 15]);
    }
}