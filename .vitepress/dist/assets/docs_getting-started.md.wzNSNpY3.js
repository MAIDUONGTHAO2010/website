import{_ as s,c as i,o as a,a4 as t,a5 as n}from"./chunks/framework.BUwTT59b.js";const F=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"docs/getting-started.md","filePath":"docs/getting-started.md"}'),e={name:"docs/getting-started.md"},h=t(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="method-1-using-docker" tabindex="-1">Method 1: Using Docker <a class="header-anchor" href="#method-1-using-docker" aria-label="Permalink to &quot;Method 1: Using Docker&quot;">​</a></h3><ol><li><p><strong>Pull the Docker Image</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghcr.io/fastschema/fastschema:latest</span></span></code></pre></div></li><li><p><strong>Run the Docker Container</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$UID</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8000:8000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./data:/fastschema/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ghcr.io/fastschema/fastschema:latest</span></span></code></pre></div></li></ol><details class="details custom-block"><summary>Example Output</summary><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Using app directory: /fastschema</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> APP_KEY is not set. A new key is generated and saved to /fastschema/data/.env</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Using default sqlite db file: /fastschema/data/fastschema.db</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Serving files from disk [public:/files] at /fastschema/data/public</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Visit the following URL to setup the app: http://localhost:8000/dash/setup/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">anpDXDBymatYLIITreQgGaVdhLanpDXD</span></span></code></pre></div></details><p>You can now process the setting up by visiting <code>http://localhost:8000?token={token}</code>.</p><p><em>The setup token <code>{token}</code> is displayed in the terminal.</em></p><h3 id="method-2-download-the-binary-from-github-releases" tabindex="-1">Method 2: Download the Binary from GitHub Releases <a class="header-anchor" href="#method-2-download-the-binary-from-github-releases" aria-label="Permalink to &quot;Method 2: Download the Binary from GitHub Releases&quot;">​</a></h3><ol><li><p><strong>Download the Binary:</strong></p><ul><li><p>Navigate to the FastSchema <a href="https://github.com/fastschema/fastschema/releases" target="_blank" rel="noreferrer">GitHub Releases page</a>.</p></li><li><p>Select the latest release.</p></li><li><p>Download the appropriate binary for your operating system (e.g., Linux, macOS, Windows). For example: <code>fastschema_0.1.0_linux_amd64.zip</code></p></li></ul></li><li><p><strong>Extract the Binary:</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastschema_0.1.0_linux_amd64.zip</span></span></code></pre></div></li><li><p><strong>Run the Binary:</strong></p><ul><li><p>Open a terminal or command prompt.</p></li><li><p>Navigate to the directory containing the downloaded binary.</p></li><li><p>Run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./fastschema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div></li></ul></li></ol><h3 id="method-3-build-from-source" tabindex="-1">Method 3: Build from Source <a class="header-anchor" href="#method-3-build-from-source" aria-label="Permalink to &quot;Method 3: Build from Source&quot;">​</a></h3><ol><li><p><strong>Clone the Repository:</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/fastschema/fastschema.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastschema</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span></span></code></pre></div></li><li><p><strong>Build the Dashboard:</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg/dash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ../../</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private/tmp</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You need to create an environment file <code>./pkg/dash/.env.production</code> for building the dashboard. Refer to <code>./pkg/dash/.env.example</code> for more information.</p></div></li><li><p><strong>Build and run the Binary:</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fastschema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmd/main.go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./fastschema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>or run the development server:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div></li></ol><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>After you have installed FastSchema, you can access the setup page by visiting <code>http://localhost:8000?token={token}</code>.</p><p>The setup token is displayed in the terminal when you run FastSchema for the first time.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Visit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app:</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://localhost:8000/dash/setup/?token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=anpDXDBymatYLIITreQgGaVdhLanpDXD</span></span></code></pre></div><img src="`+n+`" alt="Fastschema setup" style="margin:auto;"><p>At the setup page, you will be asked to provide the following information:</p><ul><li><strong>Username</strong>: The admin username.</li><li><strong>Email</strong>: The admin email.</li><li><strong>Password</strong>: The admin password.</li></ul><p>After you have filled in the required information, click the <strong>Setup</strong> button to complete the setup process.</p><p>Congratulations! You have successfully installed FastSchema, you can now login and start creating your schemas and content.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Fastschema use environment variables for configuration. You can set the environment variables in <code>./data/.env</code> file or in the system environment.</p><p>By default, Fastschema uses SQLite as the database. You can change the database configuration by setting the following environment variables:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=a_32_characters_random_string</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=8000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_BASE_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=http://localhost:8000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_DASH_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=http://localhost:8000/dash</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">APP_API_BASE_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=api</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_DRIVER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=mysql</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=fastschema</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_HOST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3306</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=root</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DB_PASS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=123</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">STORAGE_DEFAULT_DISK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=public</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">STORAGE_DISKS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=[{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;driver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;local&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public_path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;base_url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:8000/files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_s3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;driver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/files&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;provider&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DigitalOcean&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;endpoint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sfo3.digitaloceanspaces.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;region&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sfo3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bucket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_bucket&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;access_key_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s3_access_key_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;secret_access_key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;s3_secret_access_key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;base_url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.site.local&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]</span></span></code></pre></div><p>For more information, refer to the <a href="/docs/configuration">Configuration</a> documentation.</p>`,25),l=[h];function p(k,o,d,r,g,c){return a(),i("div",null,l)}const u=s(e,[["render",p]]);export{F as __pageData,u as default};
