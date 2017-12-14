import _ from 'lodash';

const SERVICE_ENDPOINT = 'http://127.0.0.1:5000';


class ProgramaService{

    async save(program) {
        const url = `${SERVICE_ENDPOINT}/api/programs/`;
        const response = await fetch(url,{
            method:'POST',
            body:JSON.stringify(program),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`Programa save failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        if(!data){
            throw new Error(`Programa save failed, data not returned`);
        }
        const item = {
            id: _.get(data, 'id'),
            nome: _.get(data, 'nome'),
            valor: _.get(data, 'valor')
        };
        return item;
    }

    async getPrograms() {
        const url = `${SERVICE_ENDPOINT}/api/programs/`;
        const response = await fetch(url,{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`Programa getPrograms failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return _.map(data,(programa) => {
            const item = {
                id: _.get(programa, 'id'),
                nome: _.get(programa, 'nome'),
                valor: _.get(programa, 'valor')
            };
            return item;
        });
    }

    async getProgramById(id){
        const url = `${SERVICE_ENDPOINT}/api/programs/${id}`;
        const response = await fetch(url,{
            method:'GET',
            headers:{
                Accept:'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`Programa getProgramaById failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return {
            id: _.get(data, 'id'),
            nome: _.get(data, 'nome'),
            valor: _.get(data, 'valor'),
        };
    }

}

export default new ProgramaService();
