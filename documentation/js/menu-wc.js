"use strict";

customElements.define(
  "compodoc-menu",
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute("mode") === "normal";
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-bootstrap-base documentation</a>
                </li>

                <li class="divider"></li>
                ${
                  isNormalMode
                    ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>`
                    : ""
                }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${
                              isNormalMode
                                ? 'data-target="#modules-links"'
                                : 'data-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="modules-links"'
                            : 'id="xs-modules-links"'
                        }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                            : 'data-target="#xs-components-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                            : 'id="xs-components-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                        }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                        : 'data-target="#xs-injectables-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                        : 'id="xs-injectables-links-module-AppModule-82f377a4c69450e85148ae0139c3183e"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/InitService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InitService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-CoreModule-6fa1f7bb9c8227f6d214917f4764de93"'
                                            : 'data-target="#xs-components-links-module-CoreModule-6fa1f7bb9c8227f6d214917f4764de93"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-CoreModule-6fa1f7bb9c8227f6d214917f4764de93"'
                                            : 'id="xs-components-links-module-CoreModule-6fa1f7bb9c8227f6d214917f4764de93"'
                                        }>
                                            <li class="link">
                                                <a href="components/DemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureAModule.html" data-type="entity-link">FeatureAModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-FeatureAModule-371c1e264da7d88bd22a52941947a352"'
                                            : 'data-target="#xs-components-links-module-FeatureAModule-371c1e264da7d88bd22a52941947a352"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-FeatureAModule-371c1e264da7d88bd22a52941947a352"'
                                            : 'id="xs-components-links-module-FeatureAModule-371c1e264da7d88bd22a52941947a352"'
                                        }>
                                            <li class="link">
                                                <a href="components/FeatureComponentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeatureComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureBModule.html" data-type="entity-link">FeatureBModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BootstrapModule.html" data-type="entity-link">BootstrapModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#classes-links"'
                            : 'data-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="classes-links"'
                            : 'id="xs-classes-links"'
                        }>
                            <li class="link">
                                <a href="classes/ConfigState.html" data-type="entity-link">ConfigState</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigStateModel.html" data-type="entity-link">ConfigStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUser.html" data-type="entity-link">CreateUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteUser.html" data-type="entity-link">DeleteUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetConfig.html" data-type="entity-link">SetConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUser.html" data-type="entity-link">UpdateUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserState.html" data-type="entity-link">UserState</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserStateModel.html" data-type="entity-link">UserStateModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${
                              isNormalMode
                                ? 'data-target="#injectables-links"'
                                : 'data-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${
                              isNormalMode
                                ? 'id="injectables-links"'
                                : 'id="xs-injectables-links"'
                            }>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitService.html" data-type="entity-link">InitService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#guards-links"'
                            : 'data-target="#xs-guards-links"'
                        }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="guards-links"'
                            : 'id="xs-guards-links"'
                        }>
                            <li class="link">
                                <a href="guards/DemoResolver.html" data-type="entity-link">DemoResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#interfaces-links"'
                            : 'data-target="#xs-interfaces-links"'
                        }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? ' id="interfaces-links"'
                            : 'id="xs-interfaces-links"'
                        }>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link">Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="miscellaneous-links"'
                            : 'id="xs-miscellaneous-links"'
                        }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
      this.innerHTML = tp.strings;
    }
  }
);
