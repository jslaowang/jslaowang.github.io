import{d as e}from"./app.6712eefc.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const a={},r=e('<h1 id="webpack-\u6838\u5FC3\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#webpack-\u6838\u5FC3\u8FDB\u9636" aria-hidden="true">#</a> webpack \u6838\u5FC3\u8FDB\u9636</h1><p>\u6B64\u6587\u7AE0\u6BD4\u8F83\u57FA\u7840\uFF0C\u53EF\u4EE5\u7ED3\u5408\u6398\u91D1\u7F51\u7684webpack\u6587\u7AE0\u5B66\u4E60</p><h2 id="_1-webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_1-webpack\u4E0Egrunt\u3001gulp\u7684\u4E0D\u540C" aria-hidden="true">#</a> 1. <strong>webpack</strong>\u4E0E<strong>grunt</strong>\u3001<strong>gulp</strong>\u7684\u4E0D\u540C\uFF1F</h2><p><strong>Grunt</strong>**\u3001Gulp\u662F\u57FA\u4E8E\u4EFB\u52A1\u8FD0\u2F8F\u7684\u2F2F\u5177**\uFF1A \u5B83\u4EEC\u4F1A\u2F83\u52A8\u6267\u2F8F\u6307\u5B9A\u7684\u4EFB\u52A1\uFF0C\u5C31\u50CF\u6D41\u2F54\u7EBF\uFF0C\u628A\u8D44\u6E90\u653E\u4E0A\u53BB\u7136\u540E\u901A\u8FC7\u4E0D\u540C\u63D2\u4EF6\u8FDB\u2F8F\u52A0\u2F2F\uFF0C\u5B83\u4EEC\u5305\u542B\u6D3B\u8DC3\u7684\u793E\u533A\uFF0C\u4E30\u5BCC\u7684\u63D2\u4EF6\uFF0C\u80FD\u2F45\u4FBF\u7684\u6253\u9020\u5404\u79CD\u2F2F\u4F5C\u6D41\u3002</p><p><strong>Webpack\u662F\u57FA\u4E8E\u6A21\u5757\u5316\u6253\u5305\u7684\u2F2F\u5177:</strong> \u2F83\u52A8\u5316\u5904\u7406\u6A21\u5757\uFF0Cwebpack\u628A\u2F00\u5207\u5F53\u6210\u6A21\u5757\uFF0C\u5F53 webpack \u5904\u7406\u5E94\u2F64\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u9012\u5F52\u5730\u6784\u5EFA\u2F00\u4E2A\u4F9D\u8D56\u5173\u7CFB\u56FE (dependency graph)\uFF0C\u5176\u4E2D\u5305\u542B\u5E94\u2F64\u7A0B\u5E8F\u9700\u8981\u7684\u6BCF\u4E2A\u6A21\u5757\uFF0C\u7136\u540E\u5C06\u6240\u6709\u8FD9\u4E9B\u6A21\u5757\u6253\u5305\u6210\u2F00\u4E2A\u6216\u591A\u4E2A bundle\u3002</p><p>\u56E0\u6B64\u8FD9\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u4E24\u7C7B\u2F2F\u5177,\u2F7D\u73B0\u5728\u4E3B\u6D41\u7684\u2F45\u5F0F\u662F\u2F64npm script\u4EE3\u66FFGrunt\u3001Gulp\uFF0Cnpm script\u540C\u6837\u53EF\u4EE5\u6253\u9020\u4EFB\u52A1\u6D41\u3002</p><h2 id="_2-webpack\u3001rollup\u3001parcel\u4F18\u52A3" tabindex="-1"><a class="header-anchor" href="#_2-webpack\u3001rollup\u3001parcel\u4F18\u52A3" aria-hidden="true">#</a> 2. <strong>webpack</strong>\u3001<strong>rollup</strong>\u3001<strong>parcel</strong>\u4F18\u52A3\uFF1F</h2><ul><li>webpack\u9002\u2F64\u4E8E\u2F24\u578B\u590D\u6742\u7684\u524D\u7AEF\u7AD9\u70B9\u6784\u5EFA: webpack\u6709\u5F3A\u2F24\u7684loader\u548C\u63D2\u4EF6\u2F63\u6001,\u6253\u5305\u540E\u7684\u2F42\u4EF6\u5B9E\u9645\u4E0A\u5C31\u662F\u2F00\u4E2A\u2F74\u5373\u6267\u2F8F\u51FD\u6570\uFF0C\u8FD9\u4E2A\u2F74\u5373\u6267\u2F8F\u51FD\u6570\u63A5\u6536\u2F00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u6A21\u5757\u5BF9\u8C61\uFF0C\u952E\u4E3A\u5404\u4E2A\u6A21\u5757\u7684\u8DEF\u5F84\uFF0C\u503C\u4E3A\u6A21\u5757\u5185\u5BB9\u3002\u2F74\u5373\u6267\u2F8F\u51FD\u6570\u5185\u90E8\u5219\u5904\u7406\u6A21\u5757\u4E4B\u95F4\u7684\u5F15\u2F64\uFF0C\u6267\u2F8F\u6A21\u5757\u7B49,\u8FD9\u79CD\u60C5\u51B5\u66F4\u9002\u5408\u2F42\u4EF6\u4F9D\u8D56\u590D\u6742\u7684\u5E94\u2F64\u5F00\u53D1\u3002</li><li>rollup\u9002\u2F64\u4E8E\u57FA\u7840\u5E93\u7684\u6253\u5305\uFF0C\u5982vue\u3001d3\u7B49: Rollup \u5C31\u662F\u5C06\u5404\u4E2A\u6A21\u5757\u6253\u5305\u8FDB\u2F00\u4E2A\u2F42\u4EF6\u4E2D\uFF0C\u5E76\u4E14\u901A\u8FC7 Tree-shaking \u6765\u5220\u9664\u2F46\u2F64\u7684\u4EE3\u7801,\u53EF\u4EE5\u6700\u2F24\u7A0B\u5EA6\u4E0A\u964D\u4F4E\u4EE3\u7801\u4F53\u79EF,\u4F46\u662Frollup\u6CA1\u6709webpack\u5982\u6B64\u591A\u7684\u7684\u5982\u4EE3\u7801\u5206\u5272\u3001\u6309\u9700\u52A0\u8F7D\u7B49\u2FBC\u7EA7\u529F\u80FD\uFF0C\u5176\u66F4\u805A\u7126\u4E8E\u5E93\u7684\u6253\u5305\uFF0C\u56E0\u6B64\u66F4\u9002\u5408\u5E93\u7684\u5F00\u53D1\u3002</li><li>parcel\u9002\u2F64\u4E8E\u7B80\u5355\u7684\u5B9E\u9A8C\u6027\u9879\u2F6C: \u4ED6\u53EF\u4EE5\u6EE1\u2F9C\u4F4E\u2ED4\u69DB\u7684\u5FEB\u901F\u770B\u5230\u6548\u679C,\u4F46\u662F\u2F63\u6001\u5DEE\u3001\u62A5\u9519\u4FE1\u606F\u4E0D\u591F\u5168\u2FAF\u90FD\u662F\u4ED6\u7684\u786C\u4F24\uFF0C\u9664\u4E86\u2F00\u4E9B\u73A9\u5177\u9879\u2F6C\u6216\u8005\u5B9E\u9A8C\u9879\u2F6C\u4E0D\u5EFA\u8BAE\u4F7F\u2F64\u3002</li></ul><h2 id="_3-\u6709\u54EA\u4E9B\u5E38\u2EC5\u7684loader" tabindex="-1"><a class="header-anchor" href="#_3-\u6709\u54EA\u4E9B\u5E38\u2EC5\u7684loader" aria-hidden="true">#</a> 3. \u6709\u54EA\u4E9B\u5E38\u2EC5\u7684<strong>Loader</strong>\uFF1F</h2><ul><li>file-loader\uFF1A\u628A\u2F42\u4EF6\u8F93\u51FA\u5230\u2F00\u4E2A\u2F42\u4EF6\u5939\u4E2D\uFF0C\u5728\u4EE3\u7801\u4E2D\u901A\u8FC7\u76F8\u5BF9 URL \u53BB\u5F15\u2F64\u8F93\u51FA\u7684\u2F42\u4EF6</li><li>url-loader\uFF1A\u548C file-loader \u7C7B\u4F3C\uFF0C\u4F46\u662F\u80FD\u5728\u2F42\u4EF6\u5F88\u2F29\u7684\u60C5\u51B5\u4E0B\u4EE5 base64 \u7684\u2F45\u5F0F\u628A\u2F42\u4EF6\u5185\u5BB9\u6CE8\u2F0A\u5230\u4EE3\u7801\u4E2D\u53BB</li><li>source-map-loader\uFF1A\u52A0\u8F7D\u989D\u5916\u7684 Source Map \u2F42\u4EF6\uFF0C\u4EE5\u2F45\u4FBF\u65AD\u70B9\u8C03\u8BD5</li><li>image-loader\uFF1A\u52A0\u8F7D\u5E76\u4E14\u538B\u7F29\u56FE\u2F5A\u2F42\u4EF6</li><li>babel-loader\uFF1A\u628A ES6 \u8F6C\u6362\u6210 ES5</li><li>css-loader\uFF1A\u52A0\u8F7D CSS\uFF0C\u2F40\u6301\u6A21\u5757\u5316\u3001\u538B\u7F29\u3001\u2F42\u4EF6\u5BFC\u2F0A\u7B49\u7279\u6027</li><li>style-loader\uFF1A\u628A CSS \u4EE3\u7801\u6CE8\u2F0A\u5230 JavaScript \u4E2D\uFF0C\u901A\u8FC7 DOM \u64CD\u4F5C\u53BB\u52A0\u8F7D CSS\u3002</li><li>eslint-loader\uFF1A\u901A\u8FC7 ESLint \u68C0\u67E5 JavaScript \u4EE3\u7801</li></ul><p><strong>\u6CE8\u610F\uFF1A<strong>\u5728Webpack\u4E2D\uFF0Cloader\u7684\u6267\u884C\u987A\u5E8F\u662F</strong>\u4ECE\u53F3\u5411\u5DE6</strong>\u6267\u884C\u7684\u3002\u56E0\u4E3Awebpack\u9009\u62E9\u4E86<strong>compose\u8FD9\u6837\u7684\u51FD\u6570\u5F0F\u7F16\u7A0B\u65B9\u5F0F</strong>\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u7684\u8868\u8FBE\u5F0F\u6267\u884C\u662F\u4ECE\u53F3\u5411\u5DE6\u7684\u3002</p><h2 id="_4-\u6709\u54EA\u4E9B\u5E38\u2EC5\u7684plugin" tabindex="-1"><a class="header-anchor" href="#_4-\u6709\u54EA\u4E9B\u5E38\u2EC5\u7684plugin" aria-hidden="true">#</a> 4. \u6709\u54EA\u4E9B\u5E38\u2EC5\u7684<strong>Plugin</strong>\uFF1F</h2><ul><li>define-plugin\uFF1A\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF</li><li>html-webpack-plugin\uFF1A\u7B80\u5316html\u2F42\u4EF6\u521B\u5EFA</li><li>uglifyjs-webpack-plugin\uFF1A\u901A\u8FC7 UglifyES \u538B\u7F29 ES6 \u4EE3\u7801</li><li>webpack-parallel-uglify-plugin: \u591A\u6838\u538B\u7F29\uFF0C\u63D0\u2FBC\u538B\u7F29\u901F\u5EA6</li><li>webpack-bundle-analyzer: \u53EF\u89C6\u5316webpack\u8F93\u51FA\u2F42\u4EF6\u7684\u4F53\u79EF</li><li>mini-css-extract-plugin: CSS\u63D0\u53D6\u5230\u5355\u72EC\u7684\u2F42\u4EF6\u4E2D\uFF0C\u2F40\u6301\u6309\u9700\u52A0\u8F7D</li></ul><h2 id="_5-bundle-chunk-module\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_5-bundle-chunk-module\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 5. <strong>bundle</strong>\uFF0C<strong>chunk</strong>\uFF0C<strong>module</strong>\u662F\u4EC0\u4E48\uFF1F</h2><ul><li>bundle\uFF1A\u662F\u7531webpack\u6253\u5305\u51FA\u6765\u7684\u2F42\u4EF6\uFF1B</li><li>chunk\uFF1A\u4EE3\u7801\u5757\uFF0C\u2F00\u4E2Achunk\u7531\u591A\u4E2A\u6A21\u5757\u7EC4\u5408\u2F7D\u6210\uFF0C\u2F64\u4E8E\u4EE3\u7801\u7684\u5408\u5E76\u548C\u5206\u5272\uFF1B</li><li>module\uFF1A\u662F\u5F00\u53D1\u4E2D\u7684\u5355\u4E2A\u6A21\u5757\uFF0C\u5728webpack\u7684\u4E16\u754C\uFF0C\u2F00\u5207\u7686\u6A21\u5757\uFF0C\u2F00\u4E2A\u6A21\u5757\u5BF9\u5E94\u2F00\u4E2A\u2F42\u4EF6\uFF0Cwebpack\u4F1A\u4ECE\u914D\u7F6E\u7684 entry\u4E2D\u9012\u5F52\u5F00\u59CB\u627E\u51FA\u6240\u6709\u4F9D\u8D56\u7684\u6A21\u5757\u3002</li></ul><h2 id="_6-loader\u548Cplugin\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_6-loader\u548Cplugin\u7684\u4E0D\u540C" aria-hidden="true">#</a> 6. <strong>Loader</strong>\u548C<strong>Plugin</strong>\u7684\u4E0D\u540C\uFF1F</h2><p>\u4E0D\u540C\u7684\u4F5C\u2F64:</p><ul><li><strong>Loader</strong>\u76F4\u8BD1\u4E3A&quot;\u52A0\u8F7D\u5668&quot;\u3002Webpack\u5C06\u2F00\u5207\u2F42\u4EF6\u89C6\u4E3A\u6A21\u5757\uFF0C\u4F46\u662Fwebpack\u539F\u2F63\u662F\u53EA\u80FD\u89E3\u6790js\u2F42\u4EF6\uFF0C\u5982\u679C\u60F3\u5C06\u5176\u4ED6\u2F42\u4EF6\u4E5F\u6253\u5305\u7684\u8BDD\uFF0C\u5C31\u4F1A\u2F64\u5230 loader \u3002 \u6240\u4EE5Loader\u7684\u4F5C\u2F64\u662F\u8BA9webpack\u62E5\u6709\u4E86\u52A0\u8F7D\u548C\u89E3\u6790\u2FAEJavaScript\u2F42\u4EF6\u7684\u80FD\u2F12\u3002</li><li><strong>Plugin</strong>\u76F4\u8BD1\u4E3A&quot;\u63D2\u4EF6&quot;\u3002Plugin\u53EF\u4EE5\u6269\u5C55webpack\u7684\u529F\u80FD\uFF0C\u8BA9webpack\u5177\u6709\u66F4\u591A\u7684\u7075\u6D3B\u6027\u3002 \u5728 Webpack \u8FD0\u2F8F\u7684\u2F63\u547D\u5468\u671F\u4E2D\u4F1A\u2F34\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8\u8F93\u51FA\u7ED3\u679C\u3002</li></ul><p><strong>\u4E0D\u540C\u7684\u2F64\u6CD5</strong>**\u{1F617}*</p><ul><li><strong>Loader</strong>\u5728 module.rules \u4E2D\u914D\u7F6E\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4ED6\u4F5C\u4E3A\u6A21\u5757\u7684\u89E3\u6790\u89C4\u5219\u2F7D\u5B58\u5728\u3002 \u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u6BCF\u2F00\u9879\u90FD\u662F\u2F00\u4E2A Object \uFF0C\u2FA5\u2FAF\u63CF\u8FF0\u4E86\u5BF9\u4E8E\u4EC0\u4E48\u7C7B\u578B\u7684\u2F42\u4EF6\uFF08 test \uFF09\uFF0C\u4F7F\u2F64\u4EC0\u4E48\u52A0\u8F7D( loader )\u548C\u4F7F\u2F64\u7684\u53C2\u6570\uFF08 options \uFF09</li><li><strong>Plugin</strong>\u5728 plugins \u4E2D\u5355\u72EC\u914D\u7F6E\u3002 \u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u6BCF\u2F00\u9879\u662F\u2F00\u4E2A plugin \u7684\u5B9E\u4F8B\uFF0C\u53C2\u6570\u90FD\u901A\u8FC7\u6784\u9020\u51FD\u6570\u4F20\u2F0A\u3002</li></ul><h2 id="_7-webpack\u7684\u6784\u5EFA\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_7-webpack\u7684\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a> 7. <strong>webpack</strong>\u7684\u6784\u5EFA\u6D41\u7A0B?</h2><p>Webpack \u7684\u8FD0\u2F8F\u6D41\u7A0B\u662F\u2F00\u4E2A\u4E32\u2F8F\u7684\u8FC7\u7A0B\uFF0C\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u2F8F\u4EE5\u4E0B\u6D41\u7A0B\uFF1A</p><ol><li>\u521D\u59CB\u5316\u53C2\u6570\uFF1A\u4ECE\u914D\u7F6E\u2F42\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\uFF1B</li><li>\u5F00\u59CB\u7F16\u8BD1\uFF1A\u2F64\u4E0A\u2F00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316 Compiler \u5BF9\u8C61\uFF0C\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6\uFF0C\u6267\u2F8F\u5BF9\u8C61\u7684 run \u2F45\u6CD5\u5F00\u59CB\u6267\u2F8F\u7F16\u8BD1\uFF1B</li><li>\u786E\u5B9A\u2F0A\u2F1D\uFF1A\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u6240\u6709\u7684\u2F0A\u2F1D\u2F42\u4EF6\uFF1B</li><li>\u7F16\u8BD1\u6A21\u5757\uFF1A\u4ECE\u2F0A\u2F1D\u2F42\u4EF6\u51FA\u53D1\uFF0C\u8C03\u2F64\u6240\u6709\u914D\u7F6E\u7684 Loader \u5BF9\u6A21\u5757\u8FDB\u2F8F\u7FFB\u8BD1\uFF0C\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u2F0A\u2F1D\u4F9D\u8D56\u7684\u2F42\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406\uFF1B</li><li>\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1\uFF1A\u5728\u7ECF\u8FC7\u7B2C4\u6B65\u4F7F\u2F64 Loader \u7FFB\u8BD1\u5B8C\u6240\u6709\u6A21\u5757\u540E\uFF0C\u5F97\u5230\u4E86\u6BCF\u4E2A\u6A21\u5757\u88AB\u7FFB\u8BD1\u540E\u7684\u6700\u7EC8\u5185\u5BB9\u4EE5\u53CA\u5B83\u4EEC\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1B</li><li>\u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u2F0A\u2F1D\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u2F00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u2F00\u4E2A\u5355\u72EC\u7684\u2F42\u4EF6\u52A0\u2F0A\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A\uFF1B</li><li>\u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u2F42\u4EF6\u540D\uFF0C\u628A\u2F42\u4EF6\u5185\u5BB9\u5199\u2F0A\u5230\u2F42\u4EF6\u7CFB\u7EDF\u3002</li></ol><p>\u5728\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0CWebpack \u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u2F34\u64AD\u51FA\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u611F\u5174\u8DA3\u7684\u4E8B\u4EF6\u540E\u4F1A\u6267\u2F8F\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u5E76\u4E14\u63D2\u4EF6\u53EF\u4EE5\u8C03\u2F64 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8 Webpack \u7684\u8FD0\u2F8F\u7ED3\u679C\u3002</p><h2 id="_8-\u7F16\u5199loader\u6216plugin\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_8-\u7F16\u5199loader\u6216plugin\u7684\u601D\u8DEF" aria-hidden="true">#</a> 8. \u7F16\u5199<strong>loader</strong>\u6216<strong>plugin</strong>\u7684\u601D\u8DEF\uFF1F</h2><p>Loader\u50CF\u2F00\u4E2A&quot;\u7FFB\u8BD1\u5B98&quot;\u628A\u8BFB\u5230\u7684\u6E90\u2F42\u4EF6\u5185\u5BB9\u8F6C\u4E49\u6210\u65B0\u7684\u2F42\u4EF6\u5185\u5BB9\uFF0C\u5E76\u4E14\u6BCF\u4E2ALoader\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u5C06\u6E90\u2F42\u4EF6\u2F00\u6B65\u6B65\u7FFB\u8BD1\u6210\u60F3\u8981\u7684\u6837\u2F26\u3002</p><p>\u7F16\u5199Loader\u65F6\u8981\u9075\u5FAA\u5355\u2F00\u539F\u5219\uFF0C\u6BCF\u4E2ALoader\u53EA\u505A\u2F00\u79CD&quot;\u8F6C\u4E49&quot;\u2F2F\u4F5C\u3002 \u6BCF\u4E2ALoader\u7684\u62FF\u5230\u7684\u662F\u6E90\u2F42\u4EF6\u5185\u5BB9\uFF08source\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE\u503C\u7684\u2F45\u5F0F\u5C06\u5904\u7406\u540E\u7684\u5185\u5BB9\u8F93\u51FA\uFF0C\u4E5F\u53EF\u4EE5\u8C03\u2F64 this.callback() \u2F45\u6CD5\uFF0C\u5C06\u5185\u5BB9\u8FD4\u56DE\u7ED9webpack\u3002 \u8FD8\u53EF\u4EE5\u901A\u8FC7this.async() \u2F63\u6210\u2F00\u4E2A callback \u51FD\u6570\uFF0C\u518D\u2F64\u8FD9\u4E2Acallback\u5C06\u5904\u7406\u540E\u7684\u5185\u5BB9\u8F93\u51FA\u51FA\u53BB\u3002 \u6B64\u5916 webpack \u8FD8\u4E3A\u5F00\u53D1\u8005\u51C6\u5907\u4E86\u5F00\u53D1loader\u7684\u2F2F\u5177\u51FD\u6570\u96C6\u2014\u2014loader-utils \u3002</p><p>\u76F8\u5BF9\u4E8ELoader\u2F7D\u2F94\uFF0CPlugin\u7684\u7F16\u5199\u5C31\u7075\u6D3B\u4E86\u8BB8\u591A\u3002 webpack\u5728\u8FD0\u2F8F\u7684\u2F63\u547D\u5468\u671F\u4E2D\u4F1A\u2F34\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0CPlugin \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7 Webpack \u63D0\u4F9B\u7684 API \u6539\u53D8\u8F93\u51FA\u7ED3\u679C\u3002</p><h2 id="_9-webpack\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684-\u8BF4\u660E\u5176\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_9-webpack\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684-\u8BF4\u660E\u5176\u539F\u7406" aria-hidden="true">#</a> 9. <strong>webpack</strong>\u7684\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u505A\u5230\u7684\uFF1F\u8BF4\u660E\u5176\u539F\u7406\uFF1F</h2><p>webpack\u7684\u70ED\u66F4\u65B0\u2F1C\u79F0\u70ED\u66FF\u6362\uFF08Hot Module Replacement\uFF09\uFF0C\u7F29\u5199\u4E3AHMR\u3002 \u8FD9\u4E2A\u673A\u5236\u53EF\u4EE5\u505A\u5230\u4E0D\u2F64\u5237\u65B0\u6D4F\u89C8\u5668\u2F7D\u5C06\u65B0\u53D8\u66F4\u7684\u6A21\u5757\u66FF\u6362\u6389\u65E7\u7684\u6A21\u5757\u3002</p><p>\u539F\u7406\uFF1A</p><p><img src="https://cdn.nlark.com/yuque/0/2021/png/1500604/1615910527011-339c57ce-22b2-4660-bcb5-93a7c6ec113b.png?x-oss-process=image%2Fresize%2Cw_1500" alt="image.png"></p><p>\u2FB8\u5148\u8981\u77E5\u9053server\u7AEF\u548Cclient\u7AEF\u90FD\u505A\u4E86\u5904\u7406\u2F2F\u4F5C\uFF1A</p><ol><li>\u7B2C\u2F00\u6B65\uFF0C\u5728 webpack \u7684 watch \u6A21\u5F0F\u4E0B\uFF0C\u2F42\u4EF6\u7CFB\u7EDF\u4E2D\u67D0\u2F00\u4E2A\u2F42\u4EF6\u53D1\u2F63\u4FEE\u6539\uFF0Cwebpack \u76D1\u542C\u5230\u2F42\u4EF6\u53D8\u5316\uFF0C\u6839\u636E\u914D\u7F6E\u2F42</li></ol><p>\u4EF6\u5BF9\u6A21\u5757\u91CD\u65B0\u7F16\u8BD1\u6253\u5305\uFF0C\u5E76\u5C06\u6253\u5305\u540E\u7684\u4EE3\u7801\u901A\u8FC7\u7B80\u5355\u7684 JavaScript \u5BF9\u8C61\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u3002</p><ol><li>\u7B2C\u2F06\u6B65\u662F webpack-dev-server \u548C webpack \u4E4B\u95F4\u7684\u63A5\u2F1D\u4EA4\u4E92\uFF0C\u2F7D\u5728\u8FD9\u2F00\u6B65\uFF0C\u4E3B\u8981\u662F dev-server \u7684\u4E2D\u95F4\u4EF6 webpack- dev-middleware \u548C webpack \u4E4B\u95F4\u7684\u4EA4\u4E92\uFF0Cwebpack-dev-middleware \u8C03\u2F64 webpack \u66B4\u9732\u7684 API\u5BF9\u4EE3\u7801\u53D8\u5316\u8FDB\u2F8F\u76D1 \u63A7\uFF0C\u5E76\u4E14\u544A\u8BC9 webpack\uFF0C\u5C06\u4EE3\u7801\u6253\u5305\u5230\u5185\u5B58\u4E2D\u3002</li><li>\u7B2C\u4E09\u6B65\u662F webpack-dev-server \u5BF9\u2F42\u4EF6\u53D8\u5316\u7684\u2F00\u4E2A\u76D1\u63A7\uFF0C\u8FD9\u2F00\u6B65\u4E0D\u540C\u4E8E\u7B2C\u2F00\u6B65\uFF0C\u5E76\u4E0D\u662F\u76D1\u63A7\u4EE3\u7801\u53D8\u5316\u91CD\u65B0\u6253\u5305\u3002\u5F53\u6211\u4EEC\u5728\u914D\u7F6E\u2F42\u4EF6\u4E2D\u914D\u7F6E\u4E86devServer.watchContentBase \u4E3A true \u7684\u65F6\u5019\uFF0CServer \u4F1A\u76D1\u542C\u8FD9\u4E9B\u914D\u7F6E\u2F42\u4EF6\u5939\u4E2D\u9759\u6001\u2F42\u4EF6\u7684\u53D8\u5316\uFF0C\u53D8\u5316\u540E\u4F1A\u901A\u77E5\u6D4F\u89C8\u5668\u7AEF\u5BF9\u5E94\u2F64\u8FDB\u2F8F live reload\u3002\u6CE8\u610F\uFF0C\u8FD9\u2F09\u662F\u6D4F\u89C8\u5668\u5237\u65B0\uFF0C\u548C HMR \u662F\u4E24\u4E2A\u6982\u5FF5\u3002</li><li>\u7B2C\u56DB\u6B65\u4E5F\u662F webpack-dev-server \u4EE3\u7801\u7684\u2F2F\u4F5C\uFF0C\u8BE5\u6B65\u9AA4\u4E3B\u8981\u662F\u901A\u8FC7 sockjs\uFF08webpack-dev-server \u7684\u4F9D\u8D56\uFF09\u5728\u6D4F\u89C8\u5668\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u5EFA\u2F74\u2F00\u4E2A websocket \u2ED3\u8FDE\u63A5\uFF0C\u5C06 webpack \u7F16\u8BD1\u6253\u5305\u7684\u5404\u4E2A\u9636\u6BB5\u7684\u72B6\u6001\u4FE1\u606F\u544A\u77E5\u6D4F\u89C8\u5668\u7AEF\uFF0C\u540C\u65F6\u4E5F\u5305\u62EC\u7B2C\u4E09\u6B65\u4E2D Server \u76D1\u542C\u9759\u6001\u2F42\u4EF6\u53D8\u5316\u7684\u4FE1\u606F\u3002\u6D4F\u89C8\u5668\u7AEF\u6839\u636E\u8FD9\u4E9B socket \u6D88\u606F\u8FDB\u2F8F\u4E0D\u540C\u7684\u64CD\u4F5C\u3002\u5F53\u7136\u670D\u52A1\u7AEF\u4F20\u9012\u7684\u6700\u4E3B\u8981\u4FE1\u606F\u8FD8\u662F\u65B0\u6A21\u5757\u7684 hash \u503C\uFF0C\u540E\u2FAF\u7684\u6B65\u9AA4\u6839\u636E\u8FD9\u2F00 hash \u503C\u6765\u8FDB\u2F8F\u6A21\u5757\u70ED\u66FF\u6362\u3002</li><li>webpack-dev-server/client \u7AEF\u5E76\u4E0D\u80FD\u591F\u8BF7\u6C42\u66F4\u65B0\u7684\u4EE3\u7801\uFF0C\u4E5F\u4E0D\u4F1A\u6267\u2F8F\u70ED\u66F4\u6A21\u5757\u64CD\u4F5C\uFF0C\u2F7D\u628A\u8FD9\u4E9B\u2F2F\u4F5C\u2F1C\u4EA4\u56DE\u7ED9\u4E86webpack\uFF0Cwebpack/hot/dev-server \u7684\u2F2F\u4F5C\u5C31\u662F\u6839\u636E webpack-dev-server/client \u4F20\u7ED9\u5B83\u7684\u4FE1\u606F\u4EE5\u53CA dev-server \u7684\u914D\u7F6E\u51B3\u5B9A\u662F\u5237\u65B0\u6D4F\u89C8\u5668\u5462\u8FD8\u662F\u8FDB\u2F8F\u6A21\u5757\u70ED\u66F4\u65B0\u3002\u5F53\u7136\u5982\u679C\u4EC5\u4EC5\u662F\u5237\u65B0\u6D4F\u89C8\u5668\uFF0C\u4E5F\u5C31\u6CA1\u6709\u540E\u2FAF\u90A3\u4E9B\u6B65\u9AA4\u4E86\u3002</li><li>HotModuleReplacement.runtime \u662F\u5BA2\u6237\u7AEF HMR \u7684\u4E2D\u67A2\uFF0C\u5B83\u63A5\u6536\u5230\u4E0A\u2F00\u6B65\u4F20\u9012\u7ED9\u4ED6\u7684\u65B0\u6A21\u5757\u7684 hash \u503C\uFF0C\u5B83\u901A\u8FC7JsonpMainTemplate.runtime \u5411 server \u7AEF\u53D1\u9001 Ajax \u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u2F00\u4E2A json\uFF0C\u8BE5 json \u5305\u542B\u4E86\u6240\u6709\u8981\u66F4\u65B0\u7684\u6A21\u5757\u7684 hash \u503C\uFF0C\u83B7\u53D6\u5230\u66F4\u65B0\u5217\u8868\u540E\uFF0C\u8BE5\u6A21\u5757\u518D\u6B21\u901A\u8FC7 jsonp \u8BF7\u6C42\uFF0C\u83B7\u53D6\u5230\u6700\u65B0\u7684\u6A21\u5757\u4EE3\u7801\u3002\u8FD9\u5C31\u662F\u4E0A\u56FE\u4E2D 7\u30018\u30019 \u6B65\u9AA4\u3002</li><li>\u2F7D\u7B2C 10 \u6B65\u662F\u51B3\u5B9A HMR \u6210\u529F\u4E0E\u5426\u7684\u5173\u952E\u6B65\u9AA4\uFF0C\u5728\u8BE5\u6B65\u9AA4\u4E2D\uFF0CHotModulePlugin \u5C06\u4F1A\u5BF9\u65B0\u65E7\u6A21\u5757\u8FDB\u2F8F\u5BF9\u2F50\uFF0C\u51B3\u5B9A\u662F\u5426\u66F4\u65B0\u6A21\u5757\uFF0C\u5728\u51B3\u5B9A\u66F4\u65B0\u6A21\u5757\u540E\uFF0C\u68C0\u67E5\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u66F4\u65B0\u6A21\u5757\u7684\u540C\u65F6\u66F4\u65B0\u6A21\u5757\u95F4\u7684\u4F9D\u8D56\u5F15\u2F64\u3002</li><li>\u6700\u540E\u2F00\u6B65\uFF0C\u5F53 HMR \u5931\u8D25\u540E\uFF0C\u56DE\u9000\u5230 live reload \u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F\u8FDB\u2F8F\u6D4F\u89C8\u5668\u5237\u65B0\u6765\u83B7\u53D6\u6700\u65B0\u6253\u5305\u4EE3\u7801\u3002</li></ol><h2 id="_10-\u5982\u4F55\u7528webpack\u6765\u4F18\u5316\u524D\u7AEF\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#_10-\u5982\u4F55\u7528webpack\u6765\u4F18\u5316\u524D\u7AEF\u6027\u80FD" aria-hidden="true">#</a> 10. \u5982\u4F55\u2F64<strong>webpack</strong>\u6765\u4F18\u5316\u524D\u7AEF\u6027\u80FD\uFF1F</h2><p>\u2F64webpack\u4F18\u5316\u524D\u7AEF\u6027\u80FD\u662F\u6307\u4F18\u5316webpack\u7684\u8F93\u51FA\u7ED3\u679C\uFF0C\u8BA9\u6253\u5305\u7684\u6700\u7EC8\u7ED3\u679C\u5728\u6D4F\u89C8\u5668\u8FD0\u2F8F\u5FEB\u901F\u2FBC\u6548\u3002</p><ul><li><strong>\u538B\u7F29\u4EE3\u7801</strong>\uFF1A\u5220\u9664\u591A\u4F59\u7684\u4EE3\u7801\u3001\u6CE8\u91CA\u3001\u7B80\u5316\u4EE3\u7801\u7684\u5199\u6CD5\u7B49\u7B49\u2F45\u5F0F\u3002\u53EF\u4EE5\u5229\u2F64webpack\u7684 UglifyJsPlugin \u548C ParallelUglifyPlugin \u6765\u538B\u7F29JS\u2F42\u4EF6\uFF0C \u5229\u2F64 cssnano \uFF08css-loader?minimize\uFF09\u6765\u538B\u7F29css</li><li><strong>\u5229\u2F64<strong><strong>CDN</strong></strong>\u52A0\u901F</strong>: \u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u5C06\u5F15\u2F64\u7684\u9759\u6001\u8D44\u6E90\u8DEF\u5F84\u4FEE\u6539\u4E3ACDN\u4E0A\u5BF9\u5E94\u7684\u8DEF\u5F84\u3002\u53EF\u4EE5\u5229\u2F64webpack\u5BF9\u4E8E output \u53C2\u6570\u548C\u5404loader\u7684 publicPath \u53C2\u6570\u6765\u4FEE\u6539\u8D44\u6E90\u8DEF\u5F84</li><li><strong>Tree Shaking</strong>: \u5C06\u4EE3\u7801\u4E2D\u6C38\u8FDC\u4E0D\u4F1A\u2F9B\u5230\u7684\u2F5A\u6BB5\u5220\u9664\u6389\u3002\u53EF\u4EE5\u901A\u8FC7\u5728\u542F\u52A8webpack\u65F6\u8FFD\u52A0\u53C2\u6570 --optimize-minimize \u6765\u5B9E\u73B0</li><li><strong>Code Splitting:</strong> \u5C06\u4EE3\u7801\u6309\u8DEF\u7531\u7EF4\u5EA6\u6216\u8005\u7EC4\u4EF6\u5206\u5757(chunk),\u8FD9\u6837\u505A\u5230\u6309\u9700\u52A0\u8F7D,\u540C\u65F6\u53EF\u4EE5\u5145\u5206\u5229\u2F64\u6D4F\u89C8\u5668\u7F13\u5B58</li><li><strong>\u63D0\u53D6\u516C\u5171\u7B2C\u4E09\u2F45\u5E93</strong>: SplitChunksPlugin\u63D2\u4EF6\u6765\u8FDB\u2F8F\u516C\u5171\u6A21\u5757\u62BD\u53D6,\u5229\u2F64\u6D4F\u89C8\u5668\u7F13\u5B58\u53EF\u4EE5\u2ED3\u671F\u7F13\u5B58\u8FD9\u4E9B\u2F46\u9700\u9891\u7E41\u53D8\u52A8\u7684\u516C\u5171\u4EE3\u7801</li></ul><h2 id="_11-\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6253\u5305\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_11-\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6253\u5305\u901F\u5EA6" aria-hidden="true">#</a> 11. \u5982\u4F55\u63D0\u2FBC<strong>webpack</strong>\u7684\u6253\u5305\u901F\u5EA6?</h2><ul><li>happypack: \u5229\u2F64\u8FDB\u7A0B\u5E76\u2F8F\u7F16\u8BD1loader,\u5229\u2F64\u7F13\u5B58\u6765\u4F7F\u5F97 rebuild \u66F4\u5FEB,\u9057\u61BE\u7684\u662F\u4F5C\u8005\u8868\u793A\u5DF2\u7ECF\u4E0D\u4F1A\u7EE7\u7EED\u5F00\u53D1\u6B64\u9879\u2F6C,\u7C7B\u4F3C\u7684\u66FF\u4EE3\u8005\u662Fthread-loader</li><li>\u5916\u90E8\u6269\u5C55(externals): \u5C06\u4E0D\u600E\u4E48\u9700\u8981\u66F4\u65B0\u7684\u7B2C\u4E09\u2F45\u5E93\u8131\u79BBwebpack\u6253\u5305\uFF0C\u4E0D\u88AB\u6253\u2F0Abundle\u4E2D\uFF0C\u4ECE\u2F7D\u51CF\u5C11\u6253\u5305\u65F6\u95F4\uFF0C\u2F50\u5982jQuery\u2F64script\u6807\u7B7E\u5F15\u2F0A</li><li>dll: \u91C7\u2F64webpack\u7684 DllPlugin \u548C DllReferencePlugin \u5F15\u2F0Adll\uFF0C\u8BA9\u2F00\u4E9B\u57FA\u672C\u4E0D\u4F1A\u6539\u52A8\u7684\u4EE3\u7801\u5148\u6253\u5305\u6210\u9759\u6001\u8D44\u6E90\uFF0C\u907F\u514D\u53CD\u590D\u7F16\u8BD1\u6D6A\u8D39\u65F6\u95F4</li><li>\u5229\u2F64\u7F13\u5B58: webpack.cache \u3001babel-loader.cacheDirectory\u3001 HappyPack.cache \u90FD\u53EF\u4EE5\u5229\u2F64\u7F13\u5B58\u63D0\u2FBCrebuild\u6548\u7387\u7F29\u2F29\u2F42\u4EF6\u641C\u7D22\u8303\u56F4: \u2F50\u5982babel-loader\u63D2\u4EF6,\u5982\u679C\u4F60\u7684\u2F42\u4EF6\u4EC5\u5B58\u5728\u4E8Esrc\u4E2D,\u90A3\u4E48\u53EF\u4EE5 include: path.resolve(__dirname,&#39;src&#39;) ,\u5F53\u7136\u7EDD\u2F24\u591A\u6570\u60C5\u51B5\u4E0B\u8FD9\u79CD\u64CD\u4F5C\u7684\u63D0\u5347\u6709\u9650\uFF0C\u9664\u2FAE\u4E0D\u2F29\u2F3Cbuild\u4E86node_modules\u2F42\u4EF6</li></ul><h2 id="_12-\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6784\u5EFA\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_12-\u5982\u4F55\u63D0\u9AD8webpack\u7684\u6784\u5EFA\u901F\u5EA6" aria-hidden="true">#</a> 12. \u5982\u4F55\u63D0\u2FBC<strong>webpack</strong>\u7684\u6784\u5EFA\u901F\u5EA6\uFF1F</h2><ol><li>\u591A\u2F0A\u2F1D\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u2F64 CommonsChunkPlugin \u6765\u63D0\u53D6\u516C\u5171\u4EE3\u7801</li><li>\u901A\u8FC7 externals \u914D\u7F6E\u6765\u63D0\u53D6\u5E38\u2F64\u5E93</li><li>\u5229\u2F64 DllPlugin \u548C DllReferencePlugin \u9884\u7F16\u8BD1\u8D44\u6E90\u6A21\u5757 \u901A\u8FC7 DllPlugin \u6765\u5BF9\u90A3\u4E9B\u6211\u4EEC\u5F15\u2F64\u4F46\u662F\u7EDD\u5BF9\u4E0D\u4F1A\u4FEE\u6539\u7684npm\u5305\u6765\u8FDB\u2F8F\u9884\u7F16\u8BD1\uFF0C\u518D\u901A\u8FC7 DllReferencePlugin \u5C06\u9884\u7F16\u8BD1\u7684\u6A21\u5757\u52A0\u8F7D\u8FDB\u6765\u3002</li><li>\u4F7F\u2F64 Happypack \u5B9E\u73B0\u591A\u7EBF\u7A0B\u52A0\u901F\u7F16\u8BD1</li><li>\u4F7F\u2F64 webpack-uglify-parallel \u6765\u63D0\u5347 uglifyPlugin \u7684\u538B\u7F29\u901F\u5EA6\u3002 \u539F\u7406\u4E0A webpack-uglify-parallel \u91C7\u2F64\u4E86\u591A\u6838\u5E76\u2F8F\u538B\u7F29\u6765\u63D0\u5347\u538B\u7F29\u901F\u5EA6</li><li>\u4F7F\u2F64 Tree-shaking \u548C Scope Hoisting \u6765\u5254\u9664\u591A\u4F59\u4EE3\u7801</li></ol><h2 id="_13-\u600E\u4E48\u914D\u7F6E\u5355\u2EDA\u5E94\u7528-\u600E\u4E48\u914D\u7F6E\u591A\u2EDA\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_13-\u600E\u4E48\u914D\u7F6E\u5355\u2EDA\u5E94\u7528-\u600E\u4E48\u914D\u7F6E\u591A\u2EDA\u5E94\u7528" aria-hidden="true">#</a> 13. \u600E\u4E48\u914D\u7F6E\u5355\u2EDA\u5E94\u2F64\uFF1F\u600E\u4E48\u914D\u7F6E\u591A\u2EDA\u5E94\u2F64\uFF1F</h2><p>\u5355\u2EDA\u5E94\u2F64\u53EF\u4EE5\u7406\u89E3\u4E3Awebpack\u7684\u6807\u51C6\u6A21\u5F0F\uFF0C\u76F4\u63A5\u5728 entry \u4E2D\u6307\u5B9A\u5355\u2EDA\u5E94\u2F64\u7684\u2F0A\u2F1D\u5373\u53EF\uFF0C\u8FD9\u2FA5\u4E0D\u518D\u8D58\u8FF0\u591A\u2EDA\u5E94\u2F64\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u2F64webpack\u7684 AutoWebPlugin \u6765\u5B8C\u6210\u7B80\u5355\u2F83\u52A8\u5316\u7684\u6784\u5EFA\uFF0C\u4F46\u662F\u524D\u63D0\u662F\u9879\u2F6C\u7684\u2F6C\u5F55\u7ED3\u6784\u5FC5\u987B\u9075\u5B88\u4ED6\u9884\u8BBE\u7684\u89C4\u8303\u3002 \u591A\u2EDA\u5E94\u2F64\u4E2D\u8981\u6CE8\u610F\u7684\u662F\uFF1A</p><ul><li>\u6BCF\u4E2A\u2EDA\u2FAF\u90FD\u6709\u516C\u5171\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E9B\u4EE3\u7801\u62BD\u79BB\u51FA\u6765\uFF0C\u907F\u514D\u91CD\u590D\u7684\u52A0\u8F7D\u3002\u2F50\u5982\uFF0C\u6BCF\u4E2A\u2EDA\u2FAF\u90FD\u5F15\u2F64\u4E86\u540C\u2F00\u5957css\u6837\u5F0F\u8868</li><li>\u968F\u7740\u4E1A\u52A1\u7684\u4E0D\u65AD\u6269\u5C55\uFF0C\u2EDA\u2FAF\u53EF\u80FD\u4F1A\u4E0D\u65AD\u7684\u8FFD\u52A0\uFF0C\u6240\u4EE5\u2F00\u5B9A\u8981\u8BA9\u2F0A\u2F1D\u7684\u914D\u7F6E\u2F9C\u591F\u7075\u6D3B\uFF0C\u907F\u514D\u6BCF\u6B21\u6DFB\u52A0\u65B0\u2EDA\u2FAF\u8FD8\u9700\u8981\u4FEE\u6539\u6784\u5EFA\u914D\u7F6E</li></ul><h2 id="_14-babel\u7684\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_14-babel\u7684\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 14. babel\u7684\u539F\u7406\u662F\u4EC0\u4E48</h2><p>babel \u7684\u8F6C\u8BD1\u8FC7\u7A0B\u4E5F\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF0C\u8FD9\u4E09\u6B65\u5177\u4F53\u662F\uFF1A</p><ul><li><strong>\u89E3\u6790 Parse</strong>: \u5C06\u4EE3\u7801\u89E3\u6790\u2F63\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\uFF0C\u5373\u8BCD\u6CD5\u5206\u6790\u4E0E\u8BED\u6CD5\u5206\u6790\u7684\u8FC7\u7A0B\uFF1B</li><li><strong>\u8F6C\u6362 Transform</strong>: \u5BF9\u4E8E AST \u8FDB\u2F8F\u53D8\u6362\u2F00\u7CFB\u5217\u7684\u64CD\u4F5C\uFF0Cbabel \u63A5\u53D7\u5F97\u5230 AST \u5E76\u901A\u8FC7 babel-traverse \u5BF9\u5176\u8FDB\u2F8F\u904D\u5386\uFF0C\u5728\u6B64\u8FC7\u7A0B\u4E2D\u8FDB\u2F8F\u6DFB\u52A0\u3001\u66F4\u65B0\u53CA\u79FB\u9664\u7B49\u64CD\u4F5C\uFF1B</li><li><strong>\u2F63\u6210 Generate</strong>: \u5C06\u53D8\u6362\u540E\u7684 AST \u518D\u8F6C\u6362\u4E3A JS \u4EE3\u7801, \u4F7F\u2F64\u5230\u7684\u6A21\u5757\u662F babel-generator\u3002</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2021/png/1500604/1615908675152-69682ae3-d0b3-4552-a32e-39c2022b1db0.png?x-oss-process=image%2Fresize%2Cw_1500" alt="image.png"></p>',50);function i(n,o){return r}var s=l(a,[["render",i]]);export{s as default};
