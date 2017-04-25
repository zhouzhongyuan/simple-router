function Router(){
    this.currentUrl = '';
    this.routes = {};
}
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

Router.prototype.route = function (url, cb) {
    this.routes[url] = cb;
}
Router.prototype.refresh = function () {
    this.currentUrl = window.location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
}