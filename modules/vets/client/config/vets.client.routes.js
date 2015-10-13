'use strict';

//Setting up route
angular.module('vets').config(['$stateProvider',
	function($stateProvider) {
		// Vets state routing
		$stateProvider.
		state('vets', {
			abstract: true,
			url: '/vets',
			template: '<ui-view/>'
		}).
		state('vets.list', {
			url: '',
			templateUrl: 'modules/vets/client/views/list-vets.client.view.html'
		}).
		state('vets.create', {
			url: '/create',
			templateUrl: 'modules/vets/client/views/create-vet.client.view.html'
		}).
		state('vets.view', {
			url: '/:vetId',
			templateUrl: 'modules/vets/client/views/view-vet.client.view.html'
		}).
		state('vets.edit', {
			url: '/:vetId/edit',
			templateUrl: 'modules/vets/client/views/edit-vet.client.view.html'
		});
	}
]);
