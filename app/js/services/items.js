/**
 * Created by leoduran on 5/11/14.
 */
(function () {
    'use strict';

    angular.module('app')
        .factory('itemsService', function ($q, $timeout) {
            function getItems() {
                var deferred = $q.defer();

                $timeout(function () {
                    deferred.resolve([
                        {
                            title: 'Jade Template Language',
                            content: {
                                bookmark: 'http://jade-lang.com/'
                            },
                            tags: ['jade', 'nodejs', 'template-engine'],
                            type: 'bookmark'
                        },
                        {
                            title: 'Remember',
                            content: 'this is the content of the note',
                            tags: ['music'],
                            type: 'note'
                        },
                        {
                            title: 'Honey-Do List',
                            content: {
                                items: [
                                    { item: 'clean the garage', completed: false },
                                    { item: 'hang pictures', completed: false }
                                ]
                            },
                            tags: ['todo'],
                            type: 'todo'
                        }
                    ]);
                }, 100);

                return deferred.promise;
            }

            return {
                hello: function () {
                    return 'world';
                },
                getItems: getItems
            };
        });
}());
