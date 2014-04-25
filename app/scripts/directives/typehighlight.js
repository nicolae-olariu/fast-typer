'use strict';

angular.module('typeracerApp')
    .directive('typehighlight', function () {
        return {
            scope: {
                text: '=text'
            },
            templateUrl: 'views/typehighlight.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                //element.find('.content').text(scope.text);

                var typedText = '',
                    activeText = scope.text.split(' ', 1),
                    notTypedText = scope.text.replace(activeText, ''),
                    typedEl = element.find('.typed'),
                    activeEl = element.find('.active'),
                    notTypedEl = element.find('.not-typed');

                typedEl.text(typedText);
                activeEl.text(activeText);
                notTypedEl.text(notTypedText);

                var keyupHandler = function(e) {
                    console.log(e);
                };

                element.find('.typing').focus();
                element.find('.content').bind('keyup', keyupHandler);
            }
        };
    });
