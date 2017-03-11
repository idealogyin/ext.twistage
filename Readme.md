# ext.twistage - Read Me

An ExtJS6 wrapper for Perceptive Media's publish wizard api. The [Perceptive Media](http://www.lexmark.com/en_us/better-together-es.html) library provides an easy way to publish secure and public videos.

## Usage
1.  Clone ext.twistage repository into `${workspace.dir}/packages/local` or `${app.dir}/packages/local`
2.  Add `"ext.twistage"` to the `"requires"` array in `${app.dir}/app.json`
3.  Add `"ext.twistage.Wizard"` to `requires` array in your Ext JS classes that use the twistage xtype
4. use `twistage-wizard` xtype while passing control argument

### Options

One need to pass mandatory three paramteres

`signature`: twistage service signature to authenticate
`redirect_host`: url where user to be redirected back
`twistageConfig`: video config as required

### Example

Here is minimal example

````
{
  xtype: 'twistage-wizard',
  signature: <signature>,
  redirect_host: <redirect-host-for-twistage>,
  twistageConfig: {<config-as-applicable>}
}
````
