import BaseApiService from "../../../services/BaseApiService";
import Utils from "../../../utils/Utils";

const fetchPosts = () => {
    const API_GET_POST = '/api/v1/search_by_date';
    const url = Utils.generateURL(API_GET_POST, {
        tags: 'story',
        page: 0
    })
    return BaseApiService.get(url);
}

export default {
    fetchPosts
}