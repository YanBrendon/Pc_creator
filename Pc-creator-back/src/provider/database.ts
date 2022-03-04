import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise'
import { PoolOptions } from 'mysql2/typings/mysql'

@Injectable()
export class DataBase {
    getConexao():Pool
    {
        const options: PoolOptions = {
            host: '127.0.0.1',
            database: 'pc-creator',
            user: 'root',
            password: 'tijolao360',

            
            typeCast:((field: any, next: () => void) => {
                if (field.type == "NEWDECIMAL") {
                    var value = field.string();
                    return (value === null) ? null : Number(value);
                }

                return next()
            })
        }

        return createPool(options)
    }
}
