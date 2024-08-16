import { datoService } from "../../services";
import { IdatoFacade } from "./interface";


/**
 * @export
 * @implements {IdatoModelService}
 */
const datoFacade: IdatoFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof datoFacade
     */
    async findAll(): Promise<any[]> {

        let dato = await datoService.findAll();
        return dato;
    }
}

export default datoFacade;