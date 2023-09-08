import { useParams } from "react-router-dom";

import {CardDetail, CardSyncronize} from "./component/card-detail";
import { useState, useEffect } from "react";

import { OperatorServices } from "src/services/OperatorServices";
import { da } from "date-fns/locale";

export function DetailSection(){
    const {id} = useParams();
    const [data, setData] = useState(null);

    const operatorService = new OperatorServices();

    useEffect(() => {
        fetch();
      }, []);

    async function fetch() {
        const result = await operatorService.getPromiseById(id);
        console.log(result);
        setData(result);
    }

    if (data != null) {
        return (
            <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
                <p className="font-bold mb-5">
                    Hey Operator -{" "}
                    <span className="text-gray-500 font-normal">
              here's what's happening with your patient today
            </span>
                </p>
                {data.status == "accepted" ? <CardDetail data={data}/> : <CardSyncronize data={data}/>}
            </div>
        );
    } else {
        return(<></>);
    }
}