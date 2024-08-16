
/**
 * @export
 * @interface IdatoFacade
 */
export interface IdatoFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IdatoFacade
     */
    findAll(): Promise<any[]>;
}