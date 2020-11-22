// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Url from "./Url.js";
import * as Meta from "../components/Meta.js";
import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as MainLayout from "../layouts/MainLayout.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Router from "next/router";
import * as JsDocsLayout from "../layouts/JsDocsLayout.js";
import * as DomDocsLayout from "../layouts/DomDocsLayout.js";
import * as BeltDocsLayout from "../layouts/BeltDocsLayout.js";
import * as DocFrontmatter from "./DocFrontmatter.js";
import * as CommunityLayout from "../layouts/CommunityLayout.js";
import * as ManualDocsLayout from "../layouts/ManualDocsLayout.js";
import * as ApiOverviewLayout from "../layouts/ApiOverviewLayout.js";
import * as GenTypeDocsLayout from "../layouts/GenTypeDocsLayout.js";
import * as JsDocsLayout8_0_0 from "../layouts/JsDocsLayout8_0_0.js";
import * as LandingPageLayout from "../layouts/LandingPageLayout.js";
import * as DomDocsLayout8_0_0 from "../layouts/DomDocsLayout8_0_0.js";
import * as BeltDocsLayout8_0_0 from "../layouts/BeltDocsLayout8_0_0.js";
import * as ManualDocsLayout8_0_0 from "../layouts/ManualDocsLayout8_0_0.js";
import * as ApiOverviewLayout8_0_0 from "../layouts/ApiOverviewLayout8_0_0.js";
import * as ReasonCompilerDocsLayout from "../layouts/ReasonCompilerDocsLayout.js";

require('../styles/main.css')
;

let hljs = require('highlight.js/lib/highlight');
  let js = require('highlight.js/lib/languages/javascript');
  let ocaml = require('highlight.js/lib/languages/ocaml');
  let reason = require('../plugins/reason-highlightjs');
  let res = require('../plugins/res-syntax-highlightjs');
  let bash = require('highlight.js/lib/languages/bash');
  let json = require('highlight.js/lib/languages/json');
  let html = require('highlight.js/lib/languages/xml');
  let ts = require('highlight.js/lib/languages/typescript');
  let text = require('highlight.js/lib/languages/plaintext');
  let diff = require('highlight.js/lib/languages/diff');

  hljs.registerLanguage('reason', reason);
  hljs.registerLanguage('res', res);
  hljs.registerLanguage('javascript', js);
  hljs.registerLanguage('ts', ts);
  hljs.registerLanguage('ocaml', ocaml);
  hljs.registerLanguage('sh', bash);
  hljs.registerLanguage('json', json);
  hljs.registerLanguage('text', text);
  hljs.registerLanguage('html', html);
  hljs.registerLanguage('diff', diff);
;

function $$default(props) {
  var component = props.Component;
  var pageProps = props.pageProps;
  var router = Router.useRouter();
  var content = React.createElement(component, pageProps);
  var url = Url.parse(router.route);
  var base = url.base;
  var exit = 0;
  var len = base.length;
  if (len >= 3) {
    exit = 1;
  } else {
    switch (len) {
      case 0 :
          if (url.pagepath.length === 0) {
            return React.createElement(LandingPageLayout.make, {
                        children: content
                      });
          }
          exit = 1;
          break;
      case 1 :
          exit = 1;
          break;
      case 2 :
          var match = base[0];
          if (match === "docs") {
            var match$1 = base[1];
            switch (match$1) {
              case "gentype" :
                  var match$2 = url.version;
                  if (typeof match$2 === "number") {
                    if (match$2 === 0) {
                      return React.createElement(GenTypeDocsLayout.make, {
                                  children: content
                                });
                    }
                    exit = 1;
                  } else {
                    exit = 1;
                  }
                  break;
              case "manual" :
                  var pagepath = url.pagepath;
                  var version = url.version;
                  var match$3 = Belt_Array.get(pagepath, 0);
                  var exit$1 = 0;
                  if (match$3 === "api") {
                    if (typeof version === "number") {
                      if (version !== 0) {
                        return content;
                      }
                      var match$4 = pagepath.length;
                      var match$5 = Belt_Array.get(pagepath, 1);
                      var exit$2 = 0;
                      if (match$4 === 1) {
                        return React.createElement(ApiOverviewLayout.Docs.make, {
                                    children: content
                                  });
                      }
                      if (match$4 !== 2) {
                        exit$2 = 3;
                      } else {
                        if (match$5 === undefined) {
                          return null;
                        }
                        switch (match$5) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout.Prose.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout.Prose.make, {
                                          children: content
                                        });
                          default:
                            exit$2 = 3;
                        }
                      }
                      if (exit$2 === 3) {
                        if (match$5 === undefined) {
                          return null;
                        }
                        switch (match$5) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout.Docs.make, {
                                          children: content
                                        });
                          case "dom" :
                              return React.createElement(DomDocsLayout.Docs.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout.Docs.make, {
                                          children: content
                                        });
                          default:
                            return null;
                        }
                      }
                      
                    } else {
                      if (version._0 !== "v8.0.0") {
                        return content;
                      }
                      var match$6 = pagepath.length;
                      var match$7 = Belt_Array.get(pagepath, 1);
                      var exit$3 = 0;
                      if (match$6 === 1) {
                        return React.createElement(ApiOverviewLayout8_0_0.Docs.make, {
                                    children: content
                                  });
                      }
                      if (match$6 !== 2) {
                        exit$3 = 3;
                      } else {
                        if (match$7 === undefined) {
                          return null;
                        }
                        switch (match$7) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout8_0_0.Prose.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout8_0_0.Prose.make, {
                                          children: content
                                        });
                          default:
                            exit$3 = 3;
                        }
                      }
                      if (exit$3 === 3) {
                        if (match$7 === undefined) {
                          return null;
                        }
                        switch (match$7) {
                          case "belt" :
                              return React.createElement(BeltDocsLayout8_0_0.Docs.make, {
                                          children: content
                                        });
                          case "dom" :
                              return React.createElement(DomDocsLayout8_0_0.Docs.make, {
                                          children: content
                                        });
                          case "js" :
                              return React.createElement(JsDocsLayout8_0_0.Docs.make, {
                                          children: content
                                        });
                          default:
                            return null;
                        }
                      }
                      
                    }
                  } else {
                    exit$1 = 2;
                  }
                  if (exit$1 === 2) {
                    if (typeof version === "number") {
                      if (version !== 0) {
                        return null;
                      } else {
                        return React.createElement(ManualDocsLayout.Prose.make, {
                                    frontmatter: component.frontmatter,
                                    children: content
                                  });
                      }
                    } else if (version._0 === "v8.0.0") {
                      return React.createElement(ManualDocsLayout8_0_0.Prose.make, {
                                  frontmatter: component.frontmatter,
                                  children: content
                                });
                    } else {
                      return null;
                    }
                  }
                  break;
              case "reason-compiler" :
                  var match$8 = url.version;
                  if (typeof match$8 === "number") {
                    if (match$8 === 0) {
                      return React.createElement(ReasonCompilerDocsLayout.make, {
                                  children: content
                                });
                    }
                    exit = 1;
                  } else {
                    exit = 1;
                  }
                  break;
              default:
                exit = 1;
            }
          } else {
            exit = 1;
          }
          break;
      
    }
  }
  if (exit === 1) {
    var match$9 = Belt_List.fromArray(base);
    var exit$4 = 0;
    if (match$9) {
      switch (match$9.hd) {
        case "blog" :
            return content;
        case "community" :
            return React.createElement(CommunityLayout.make, {
                        children: content
                      });
        case "try" :
            if (!match$9.tl) {
              return content;
            }
            exit$4 = 2;
            break;
        default:
          exit$4 = 2;
      }
    } else {
      exit$4 = 2;
    }
    if (exit$4 === 2) {
      var fm = DocFrontmatter.decode(component.frontmatter);
      var fm$1;
      fm$1 = fm.TAG ? undefined : fm._0;
      var match$10 = url.base;
      var title;
      var exit$5 = 0;
      if (match$10.length !== 1) {
        exit$5 = 3;
      } else {
        var match$11 = match$10[0];
        if (match$11 === "docs") {
          title = "Overview | ReScript Documentation";
        } else {
          exit$5 = 3;
        }
      }
      if (exit$5 === 3) {
        title = Belt_Option.map(fm$1, (function (fm) {
                return fm.title;
              }));
      }
      var description = Belt_Option.flatMap(fm$1, (function (fm) {
              return Caml_option.null_to_opt(fm.description);
            }));
      var tmp = {};
      if (description !== undefined) {
        tmp.description = Caml_option.valFromOption(description);
      }
      if (title !== undefined) {
        tmp.title = Caml_option.valFromOption(title);
      }
      return React.createElement(MainLayout.make, {
                  children: null
                }, React.createElement(Meta.make, tmp), React.createElement("div", {
                      className: "flex justify-center"
                    }, React.createElement("div", {
                          className: "max-w-705 w-full"
                        }, content)));
    }
    
  }
  
}

export {
  $$default ,
  $$default as default,
  
}
/*  Not a pure module */
