import { config, DotenvParseOutput } from 'dotenv';
import { IConfigService } from './config.interface';

export class ConfigService implements IConfigService{
    private config: DotenvParseOutput;

constructor(){
    const { error, parsed } = config()
    if (error) {
        throw new Error('Not found file .env')
    }
    if (!parsed) {
        throw new Error('.env is empty or invalid format');
    }
    this.config=parsed;
}

    get(key: string): string {
        const res = this.config[key]
        if (!res) { 
            throw new Error(`${key} not found in the env`)
        }
        return res;
    }

}