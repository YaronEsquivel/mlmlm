import { IdatoService } from "./interface";
import dato from "../../models/dato.model";


/**
 * @export
 * @implements {IdatoModelService}
 */
const datoService: IdatoService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof datoFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return dato.findAll();
    }
}

export default datoService;