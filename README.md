SplitMyString
=============

SplitMyString is a small byte size lib, it alows you to pass a simple string and push it to an array or parse it as json

## Usage ##

#####Using the array option#####
<p>Create a new instance of SMS</p>

<pre><code>
//create array to store split string
<b>var</b> splarray = [];

//create new instance
<b>var</b> sms = <b>new</b> SMS("Hello World", splarray);

</code></pre>

Call the split function to push string into array

<pre><code>
//call split function
sms.split();
</code></pre>

The result would be the following

<pre><code>
["Hello", "World"]
</code></pre>

#####Using the json option#####
<p>Create a new instance of SMS, this time without array param</p>

<pre><code>
//create new instance
<b>var</b> sms = <b>new</b> SMS("Hello World");
</code></pre>

<p>Call the splitAsJson function to parse as json</p>
<p>This has predefined keys for simplicity:</p>

<pre><code>{ "key" : "val" }</code></pre>

<p>Call splitAsJson(), this takes one argument which is the root name of the json string</p>
<pre><code>
//call splitAsJson function, param string = name
sms.splitAsJson("json");
</code></pre>

<p>This will result in the following format</p>
<pre><code>
{
  "json":[
      { "key" : "Hello" },
      { "key" : "World" }
  ]
}
</code></pre>

## SplitMyString API ##
<p>SMS Instance, with array</p>
<pre><code><b>var</b> sms = <b>new</b> SMS(string, array);</code></pre>

<p>Split Method</p>
<pre><code>sms.split();</code></pre>

<p>SMS Instance, without array</p>
<pre><code><b>var</b> sms = <b>new</b> SMS(string);</code></pre>

<p>SplitAsJson Method, with name as param</p>
<pre><code>sms.splitAsJson(name);</code></pre>

<p>Result with array</p>
<pre><code>["Value1", "Value2"]</code></pre>

<p>Result with json</p>
<pre><code>
{
  "name":[
      { "key" : "value" },
      { "key" : "value" }
  ]
}
</code></pre>
