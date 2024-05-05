import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MySqlConfigService {
    constructor(private configService: ConfigService) {}
    
    get port() {
        return this.configService.get<number>('mysql.port')
    }

    get host() {
        return this.configService.get<string>('mysql.host')
    }

    get username() {
        return this.configService.get<string>('mysql.username')
    }

    get password() {
        return this.configService.get<string>('mysql.password')
    }

    get database() {
        return this.configService.get<string>('mysql.database')
    }
}