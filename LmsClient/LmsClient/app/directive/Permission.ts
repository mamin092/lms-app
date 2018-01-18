angular.module('app').directive('accessControl',
    ([
        function () {
            console.log('i am in access controll dir.');
            return {
                require: 'A',
                scope: "=",
                link: function (scope, element, attrs) {
                    console.log('scope', scope);
                    console.log('element', element);
                    // vm of HomeController 
                    console.log('i  am  vm', scope.vm);

                    scope.vm.canShow = function () {
                        //return true;
                        //if (authService.accountInfo) {
                        //    var allowedResources = authService.accountInfo.resources;
                        //    var isAllowed = contains(allowedResources, resource);
                        //    return isAllowed;
                        //}
                        //return false;
                        console.log('i m in access control directive link  function: ');

                          // get list from local storage of the allowed resources.

                        var resource = localStorage.getItem("UserInfo");
                        if (resource) {
                            let indexOf = resource.indexOf(resource);
                            console.log(indexOf);
                            return indexOf >= 0;
                        }

                        return false;
                                                //console.log(element);
                        //console.log(attrs);
                        //return true;
                    }

                    scope.vm.isDisabled = function (resource) {
                        if (resource.price > 0) {
                            return true;
                        }
                        return false;
                    }
                     //// http://stackoverflow.com/a/237176/326597
                    //function contains(a, obj) {
                    //    var i = a.length;
                    //    while (i--) {
                    //        if (a[i].name === obj) {
                    //            return a[i].isAllowed;
                    //        }
                    //    }
                    //    return false;
                    //}
                }
            }
        }

    ]) as any);