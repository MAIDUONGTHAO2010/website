import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.BUwTT59b.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"partials/concepts/field.md","filePath":"partials/concepts/field.md"}'),o={name:"partials/concepts/field.md"},l=a('<p>A field is a single piece of data that is stored for each item in the CMS. Fields can be of different types, such as text, number, date, or relationship. Each field has a name, type, and other properties that define how the data should be stored and displayed.</p><details class="details custom-block"><summary>type (*)</summary><p>The type of the field. This can be one of the following values:</p><ul><li><code>bool</code>: A boolean value that can be true or false.</li><li><code>time</code>: A time value that includes both date and time.</li><li><code>json</code>: A JSON object that can store any type of data.</li><li><code>uuid</code>: A unique identifier that is generated automatically.</li><li><code>bytes</code>: A byte array that can store binary data.</li><li><code>enum</code>: An enumeration of values that can be selected from a list. Enum fields have an additional property called <code>enums</code> that defines the possible values for the field.</li><li><code>string</code>: A string value that can store short text.</li><li><code>text</code>: A text value that can store long text.</li><li><code>int</code>: An integer value.</li><li><code>int8</code>: A 8-bit integer value.</li><li><code>int16</code>: A 16-bit integer value.</li><li><code>int32</code>: A 32-bit integer value.</li><li><code>int64</code>: A 64-bit integer value.</li><li><code>uint</code>: An unsigned integer value.</li><li><code>uint8</code>: A 8-bit unsigned integer value.</li><li><code>uint16</code>: A 16-bit unsigned integer value.</li><li><code>uint32</code>: A 32-bit unsigned integer value.</li><li><code>uint64</code>: A 64-bit unsigned integer value.</li><li><code>float32</code>: A 32-bit floating point value.</li><li><code>float64</code>: A 64-bit floating point value.</li><li><code>relation</code>: A relationship to another schema. Relation fields have an additional property called <code>relation</code> that defines the relationship between the field and another schema.</li><li><code>file</code>: A special type of <code>relation</code> field that represents a file upload that alway has a relationship to the <code>file</code> schema.</li></ul></details><details class="details custom-block"><summary>name (*)</summary><p>The name of the field. This is used to identify the field in the CMS and must be unique within the schema.</p></details><details class="details custom-block"><summary>label (*)</summary><p>The label of the field. This is used to display the field in the CMS and should be a human-readable name.</p></details><details class="details custom-block"><summary>multiple</summary><p>A boolean value that determines whether the field can store multiple values. Currently, it only take effect in <code>file</code> field.</p></details><details class="details custom-block"><summary>size</summary><p>The size of the field. This is used to determine the maximum length of the field and is used to define the size of the field in the database.</p></details><details class="details custom-block"><summary>unique</summary><p>A boolean value that determines whether the field should be unique. If a field is unique, each value in the field must be unique within the schema.</p></details><details class="details custom-block"><summary>optional</summary><p>A boolean value that determines whether the field is optional. If a field is optional, it can be null.</p></details><details class="details custom-block"><summary>default</summary><p>The default value of the field. This is used to set a default value for the field if no value is provided.</p><p>There are some special default values that can be used for specific field types:</p><ul><li><code>NOW()</code>: The current date and time.</li><li><code>time in RFC3339</code>: Will be parsed to the time.Time value.</li></ul></details><details class="details custom-block"><summary>sortable</summary><p>A boolean value that determines whether the field can be used to sort items in the CMS.</p></details><details class="details custom-block"><summary>filterable</summary><p>A boolean value that determines whether the field can be used to search for items in the CMS.</p></details><details class="details custom-block"><summary>optional</summary><p>A boolean value that determines whether the field is optional. If the relationship is optional, the field can be null.</p></details><details class="details custom-block"><summary>is_system_field</summary><p>A boolean value that determines whether the field is a system field. A system field is a field that was created from a Go struct property. A system field can only be extended and cannot be deleted.</p></details><details class="details custom-block"><summary>renderer</summary><p>Is used to determine the field renderer in the frontend for the field.</p><p><code>renderer</code> accept an object that has the following properties: - <code>class</code>: The class name of the field renderer. - <code>settings</code>: a key-value object that hold the settings for the field renderer.</p></details><details class="details custom-block"><summary>enums</summary><p>Use for <code>enum</code> field. It accept an array of object that represent the possible values for the field. Each object has the following properties:</p><ul><li><code>value</code>: The value of the enum.</li><li><code>label</code>: The label of the enum.</li></ul></details><details class="details custom-block"><summary>relation</summary><p>Use for <code>relation</code> field. It accept an object that represent the relationship between the field and another schema. It has the following properties:</p><ul><li><p><code>schema</code>: The name of the schema that the field is related to.</p></li><li><p><code>field</code>: The name of the field in the related schema that the field is related to.</p></li><li><p><code>type</code>: The type of the relationship. This can be one of the following values:</p><ul><li><code>o2o</code>: A one-to-one relationship where each item in the schema is related to one item in the related schema.</li><li><code>o2m</code>: A one-to-many relationship where each item in the schema is related to multiple items in the related schema.</li><li><code>m2m</code>: A many-to-many relationship where multiple items in the schema are related to multiple items in the related schema.</li></ul></li><li><p><code>owner</code>: A boolean value that determines whether the field is the owner of the relationship, only take effect in <code>o2m</code> and <code>o2o</code> relationship.</p><p><strong>The schema that hold the foreign key will have <code>owner=false</code></strong></p><p>For example, field <code>post.category</code> that is o2m relationship to <code>category.posts</code> field.</p><p>The post schema will has a foreign key to the category schema: <code>category_id</code>, so the field <code>category.posts</code> will be the owner of the relationship and <code>category.posts</code> will have <code>owner=true</code>.</p></li><li><p><code>fk_columns</code>: Use to override the default foreign key column name. By default, the foreign key column name is the name of the related schema with <code>_id</code> suffix.</p><p><strong>For example:</strong> field <code>post.category</code> that is o2m relationship to <code>category.posts</code> field. The default foreign key column name is <code>category_id</code>, but you can override it to <code>cat_id</code> by setting <code>fk_columns</code> to <code>{&quot;target_column&quot;: &quot;cat_id&quot;}</code>.</p></li></ul></details><details class="details custom-block"><summary>db</summary><p>The database configuration for the field. It accept an object that has the following properties:</p><ul><li><code>attr</code>: A string that represent the field attributes in the database.</li><li><code>collation</code>: A string that represent the collation of the field in the database: utf8mb4_unicode_ci, utf8mb4_general_ci,...</li><li><code>increment</code>: A boolean value that determines whether the field is auto-incremented.</li><li><code>key</code>: A string that represent the key of the field in the database: PRI, UNI or MUL.</li></ul></details>',17),s=[l];function d(c,n,r,h,u,m){return i(),t("div",null,s)}const b=e(o,[["render",d]]);export{p as __pageData,b as default};
