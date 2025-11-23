import { NumberProvider } from './NumberProvider.ts';

export class StubNumberProvider_Flexibel implements NumberProvider {
    
    private numbersToReturn: Array<number>;

    constructor(numbersToReturn: Array<number>) {
        this.numbersToReturn = numbersToReturn;
    }

    public async readNumbers(): Promise<Array<number>> {
        return Promise.resolve(this.numbersToReturn);
    }
}