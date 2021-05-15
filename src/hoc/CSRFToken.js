import Cookies from 'js-cookie';

const csrfToken = Cookies.get('csrftoken');

export default csrfToken;