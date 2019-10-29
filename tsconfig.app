
{
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules/*"
  ],
  "compilerOptions": {
    /* Basic Options */
    "target": "ESNEXT",                         /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "ESNEXT",                         /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */

    /* Strict Type-Checking Options */
    "strict": false,                            /* Enable all strict type-checking options. */

    /* Module Resolution Options */
    "types": [ "@pyoner/svelte-types" ]
  }
}
