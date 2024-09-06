import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.Cw7BJQ5K.js";const E=JSON.parse('{"title":"Guide","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),n={name:"guide/index.md"},e=t(`<h1 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h1><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>Simply install <code>prettier</code> and <code>@prettier/plugin-pug</code> as your project’s npm <code>devDependencies</code>:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-G5Yqd" id="tab-BE6EQOn" checked><label for="tab-BE6EQOn">npm</label><input type="radio" name="group-G5Yqd" id="tab-9WdWnbU"><label for="tab-9WdWnbU">pnpm</label><input type="radio" name="group-G5Yqd" id="tab-pjmiRii"><label for="tab-pjmiRii">yarn</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prettier/plugin-pug</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prettier/plugin-pug</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prettier/plugin-pug</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h3><p>Format all pug files in your project:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-m1_QD" id="tab-RCda9s_" checked><label for="tab-RCda9s_">npm</label><input type="radio" name="group-m1_QD" id="tab-QDkkR4C"><label for="tab-QDkkR4C">pnpm</label><input type="radio" name="group-m1_QD" id="tab-BAgE48J"><label for="tab-BAgE48J">yarn</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;**/*.pug&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --plugin=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@prettier/plugin-pug&quot;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;**/*.pug&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --plugin=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@prettier/plugin-pug&quot;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;**/*.pug&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --plugin=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@prettier/plugin-pug&quot;</span></span></code></pre></div></div></div><h3 id="configuration-file" tabindex="-1">Configuration file <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration file&quot;">​</a></h3><p>You can write your <code>.prettierrc.cjs</code> like this to get fully type check support with documentation:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// @ts-check</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@prettier/plugin-pug/src/prettier&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {import(&#39;prettier&#39;).Options}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@prettier/plugin-pug&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  printWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">120</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  singleQuote: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pugSingleQuote: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ... more pug* options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h3><p>Using the <code>plugins</code> option on the API, you can format .pug files:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prettier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;code&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  parser: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pug&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@prettier/plugin-pug&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="selectively-ignoring-automatic-formatting" tabindex="-1">Selectively ignoring automatic formatting <a class="header-anchor" href="#selectively-ignoring-automatic-formatting" aria-label="Permalink to &quot;Selectively ignoring automatic formatting&quot;">​</a></h3><p>You can disable code formatting for a particular element by adding <code>//- prettier-ignore</code> comments in your pug templates:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2KoI_" id="tab-LB6tTjB" checked><label for="tab-LB6tTjB">Input</label><input type="radio" name="group-2KoI_" id="tab-kxmnIqs"><label for="tab-kxmnIqs">Output</label></div><div class="blocks"><div class="language-pug vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">pug</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =   </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  )</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- prettier-ignore</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =   </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  )</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- prettier-ignore: because of reasons</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =   </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  )</span></span></code></pre></div><div class="language-pug vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pug</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- prettier-ignore</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =   </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  )</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- prettier-ignore: because of reasons</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =   </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  )</span></span></code></pre></div></div></div><p>You can also disable code formatting in Markdown for a particular <code>\`\`\`pug</code> block by adding<code>&lt;!-- prettier-ignore --&gt;</code> before the block:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pug code with preserved custom formatting:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- prettier-ignore --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`pug</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =   </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pug code with automatic formatting:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`pug</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disabled</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div>`,19),p=[e];function l(h,k,r,d,g,o){return a(),i("div",null,p)}const F=s(n,[["render",l]]);export{E as __pageData,F as default};
