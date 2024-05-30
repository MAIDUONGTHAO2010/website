import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.BUwTT59b.js";const g=JSON.parse('{"title":"Directory structure","description":"","frontmatter":{},"headers":[],"relativePath":"docs/directory-structure.md","filePath":"docs/directory-structure.md"}'),t={name:"docs/directory-structure.md"},n=e(`<h1 id="directory-structure" tabindex="-1">Directory structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory structure&quot;">​</a></h1><p>At the first run, FastSchema will create the following directory structure:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastschema.db</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app.log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20240524115604_changes.down.sql</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 20240524115604_changes.up.sql</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> atlas.sum</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> schema</span></span></code></pre></div><ul><li><code>.env</code>: The environment file contains the application configuration.</li><li><code>fastschema.db</code>: The SQLite database file.</li><li><code>logs</code>: The directory contains log files.</li><li><code>migrations</code>: Used to store database migration files. <ul><li><code>*.up.sql</code>: The SQL file to upgrade the database schema.</li><li><code>*.down.sql</code>: The SQL file to downgrade the database schema.</li></ul></li><li><code>public</code>: Used to store application uploads.</li><li><code>schema</code>: Used to store schema JSON files.</li></ul>`,4),l=[n];function h(p,r,c,d,k,o){return a(),i("div",null,l)}const u=s(t,[["render",h]]);export{g as __pageData,u as default};
