let hostname = 'http://localhost:8080';
if (window.location.hostname === 'mosquiteer.herokuapp.com') {
    hostname = 'https://mosquiteer-backend.herokuapp.com/';
}
export default {
    getAllMosquitoBreeding: hostname + '/getAllMosquitoBreeding',
    reportMosquitoBreeding: hostname + '/reportMosquitoBreeding',
    getRSSFeed: hostname + '/getRSSFeed'

}