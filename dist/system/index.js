System.register(["./generator/gravatar-url-generator"], function (_export) {
    "use strict";

    var GravatarUrlGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.container.registerInstance(GravatarUrlGenerator, new GravatarUrlGenerator());
        aurelia.globalResources("./elements/gravatar-element");
        aurelia.globalResources("./attributes/gravatar-attribute");
    }

    return {
        setters: [function (_generatorGravatarUrlGenerator) {
            GravatarUrlGenerator = _generatorGravatarUrlGenerator.GravatarUrlGenerator;
        }],
        execute: function () {}
    };
});