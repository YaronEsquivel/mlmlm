
/**
 * @export
 * @interface IdatoService
 */
export interface IdatoService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IdatoService
     */
    findAll(): Promise<any[]>;
}