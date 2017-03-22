/**
 * Created by Administrator on 2017/3/21.
 */
var routerApp = angular.module('myApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    /*·���ض��� $urlRouterProvider:���û��·��������ƥ�䵱ǰ�ĵ���״̬�������ͻ�Ĭ�Ͻ�·��·���� home.html,
     *���ҳ�����״̬���Ʊ������ĵط�. */
    $urlRouterProvider.otherwise('/index.html');
    $stateProvider
        .state('denglu', {
            url: '/denglu',
//						templateUrl: 'denglu1.html'
            templateUrl: 'shoye.html'
        }).state('YC', {
            url: '/YC',
            templateUrl: 'fan.html'
        }).state('F_Z', {
            url: '/F_Z',
            templateUrl: 'shoye.html'
        }).state('FS', {
            url: '/FS',
            templateUrl: 'index_fs.html'
        }).state('CW', {
            url: '/CW',
            templateUrl: 'financial_w.html'
        }).state('CZ', {
            url: '/CZ',
            templateUrl: 'financial_p.html'
        }).state('TX', {
            url: '/TX',
            templateUrl: 'financial_t.html'
        }).state('CT', {
            url: '/CT',
            templateUrl: 'financial_w.html'
        }).state('DP', {
            url: '/DP',
            templateUrl: 'index_sy.html'
        }).state('P_CZ', {
            url: '/P_CZ',
            templateUrl: 'financial_p2.html'
        }).state('GR_DP', {
            url: '/GR_DP',
            templateUrl: 'index_dianpu.html'
        }).state('WD_ZPK', {
            url: '/WD_ZPK',
            templateUrl: 'index_w_zpk.html'
        }).state('ZT', {
            url: '/ZT',
            templateUrl: 'home_z_d.html'
        }).state('zhuce', {
            url: '/zhuce',
            templateUrl: 'zhuce.html'
        }).state('Z_C', {
            url: '/Z_C',
            templateUrl: 'index.html'
        }).state('mima', {
            url: '/mima',
            templateUrl: 'mimachongzhi.html'
        })
});