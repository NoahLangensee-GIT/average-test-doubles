import { NumberProvider } from './NumberProvider.ts';

export class MockNumberProvider implements NumberProvider {
    
    private numbersToReturn: Array<number>;
    
    public callCount: number = 0;

    constructor(numbersToReturn: Array<number>) {
        this.numbersToReturn = numbersToReturn;
    }

    public async readNumbers(): Promise<Array<number>> {
        this.callCount++; 
        return Promise.resolve(this.numbersToReturn);
    }
}