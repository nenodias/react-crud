import _ from 'lodash';

const SERVICE_ENDPOINT = 'http://127.0.0.1:5000';


class ProgramaService{

    async save() {
        const url = `${SERVICE_ENDPOINT}/api/programs`;
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        const children = _.get(data, 'data.children');
        if(!children){
            throw new Error(`RedditService getDefaultSubreddits failed, children not returned`);
        }
        return _.map(children,(subreddit) => {
            return {
                title: _.get(subreddit, 'data.display_name'),
                description: _.get(subreddit, 'data.public_description'),
                url: _.get(subreddit, 'data.url')
            }
        });
    }

    async getPrograms() {
        const url = `${SERVICE_ENDPOINT}/api/programs`;
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

    async getProgramaById(id){
        const url = `${SERVICE_ENDPOINT}/api/programs/${id}`;
        const response = await fetch(url,{
            method:'GET',
            headers:{
                Accept:'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`RedditService getPostsFromSubreddit failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        const children = _.get(data, 'data.children');
        if(!children){
            throw new Error(`RedditService getPostsFromSubreddit failed, children not returned`);
        }
        return _.map(children, (post) => {
            const body = _.get(post, 'data.selftext_html');
            const objeto = {
                id: _.get(post, 'data.id'),
                title: _.get(post, 'data.title'),
                topicUrl: subredditUrl,
                body: body,
                thumbnail: this._validateUrl( _.get(post, 'data.thumbnail') ),
                url: !body ? this._validateUrl(_.get(post, 'data.url') ) : undefined,
            };
            console.log(objeto);
            return objeto;
        });
    }

}

export default new ProgramaService();
