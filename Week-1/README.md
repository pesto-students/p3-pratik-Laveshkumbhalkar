

Assignment 1
---------------


The web browser is at the heart of how we experience the internet. Every day, millions visit websites via browsers. Five major browsers — Chrome, Firefox, Internet Explorer, Safari and Opera — account 95% of web traffic.

A major role of a web browser is to accept a web URL via an address bar, fetch resources, and display them on the screen.

Browsers functionality can be classified into four major sections and these include:

> Fetch
> Process
> Display
> Storage

* The main functionality of the browser
----------------------------------------


> The main task is to collect information from the Internet and make it accessible to users.
> A web browser can be used to visit any website. When we type a URL into a browser, the web server redirects us to that website.
> It simplifies Internet surfing because once we arrive at a website, we can quickly check the hyperlinks and access a wealth of information.
> Internal cache is used by browsers and is saved so that the user can open the same webpage multiple times without losing any data.
> A web browser can open multiple web pages at the same time. Back, forward, reload, stop reload, home, and other options are available on these web browsers, making them simple and convenient to use.

* What happens when we type a URL:

URL stands for Uniform Resource Locator. URL is the address of the website which you can find in the address bar of your web browser. It is a reference to a resource on the internet, be it images, hypertext pages, audio/video files, etc.

for example: https://laveshkumbhalkar.com/ 

DNS is short for Domain Name System. Like a phonebook, DNS maintains and maps the name of the website, i.e. URL, and particular IP address it links to. Every URL on the internet has a unique IP address which is of the computer which hosts the server of the website requested.

Steps for what happens when we enter a URL :

1. Browser checks cache for DNS entry to find the corresponding IP address of website.
    It looks for following cache. If not found in one, then continues checking to the next until found.
    > Browser Cache
    > Operating Systems Cache
    > Router Cache

2.  If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of     server that hosts the domain name.
3. The requests are sent using small data packets that contain information content of request and IP address it is destined for.
4. Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
5. Browser sends an HTTP request to the web server. GET or POST request.
6. Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
7. Server sends out an HTTP response along with the status of response.
8. Browser displays HTML content Finally, Done.


* High Level Components of a browser
-------------------------------------

> The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

> The browser engine: marshals actions between the UI and the rendering engine.

> The rendering engine : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

> Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

> UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

> JavaScript interpreter: Used to parse and execute JavaScript code.

> Data storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
It is important to note that browsers such as Chrome run multiple instances of the rendering engine: one for each tab. Each tab runs in a separate process.


Refer The Image for Explanation :: Week-1/week_1_images/Browser_component_assignment1.jpg
![Browser_component_assignment1](https://user-images.githubusercontent.com/106540496/173435562-7b9315cf-41d7-4df8-a8c1-ed1746496c6f.jpg)


* Rendering engine and its use
------------------------------

A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). 
Examples of layout engines: Blink, Gecko, EdgeHTML, WebKit.

--The main flow--
--------------------
The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

After that, this is the basic flow of the rendering engine:
Refer The Image for Explanation :: Week-1/week_1_images/Rendering engine basic flow.jpg

![Rendering engine basic flow](https://user-images.githubusercontent.com/106540496/173435604-86cd2129-4bed-447f-ba2d-315aff6f4ff7.jpg)


* Parsers (HTML, CSS, etc)
---------------------------------

HTML or CSS is a lightweight HTML/CSS parser written in C that allows applications to prepare a HTML document for rendering or conversion. HTM or CSS is extremely portable and only requires a C99 compiler like GCC, Clang, Visual C, etc. HTML or CSS is also extremely memory efficient, utilizing a shared string pool and smart CSS cache to minimize the size of a HTML document in memory.

Features include:

> HTML 5 markup parser
> CSS 3 stylesheet parser
> OFC/OFF/TTC/TTF font file parser (metadata only)
> GIF/JPG/PNG image file parser (metadata only)
> Functions to calculate CSS properties for a given node in a HTML document
> Functions to extract HTML “runs” consisting of CSS properties, content strings, and image references that can be rendered directly, including the :before and :after content from a stylesheet

HTML or CSS does not support dynamic HTML content created using Javascript in a HTML document, as such content is typically used for interactive web pages while HTML or CSS is intended for use with static content.

* Script Processors
-----------------------

This is a rundown of how browsers process JavaScript references within HTML.

In a discussion around optimizing front-end assets, I recently had occasion to explain how browsers process <script> tags — which seemed useful enough to be reposted here.

My original assertion was that concatenating (or bundling) JavaScript and CSS assets[1] might improve performance by reducing load times, but inevitably the conversation ended up including topics such as moving scripts to the bottom, minification, CDNs and HTTP/2.

In order to assess the consequences of any such decision, it helps to understand how browsers work: When the browser processes an HTML document, it does so from top to bottom. Upon encountering a <script> tag, it halts (“blocks”) further processing[2] in order to download the referenced script file. Only after that download has completed and the respective JavaScript code has been processed, HTML processing continues.

Let’s imagine the following document:

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello World</title>
        <link rel="stylesheet" href="main.css">
        …
        <script src="foo.js"></script>
    </head>

    <body>
        <h1>Hello World</h1>

        <script src="bar.js"></script>

        <p>lorem ipsum dolor sit amet</p>

        <script src="baz.js"></script>
    </body>
</html>


    
The browser might actually begin rendering the page even before it has fully downloaded the HTML file. Thus you might see the browser window reading “Hello World” (thanks to the <title> tag) while the page is still blank.

Once we arrive at <script src="foo.js">, processing halts as described above. Afterwards, we continue to <script src="bar.js">, repeat the same procedure, and then move on to <script src="baz.js"> for the final piece. That leaves us with the following sequence:

|
| |-foo.js-|
|          |-bar.js-|
|                   |-baz.js-|
|
+------------------------------> t
Concatenation would mean combining these files into a single one:

|
| |-foo-bar-baz.js-|
|
+------------------------------> t
While the amount of content transferred remains identical[3], this is generally faster because there’s less networking overhead. (Obviously I’m simplifying a bit here.)

As you might have guessed from this (poor man’s) visualization, there’s another approach. We could parallelize the retrieval of JavaScript files:

|
| |-foo.js-|
| |-bar.js-|
| |-baz.js-|
|
+------------------------------> t
Browsers these days support this with the simple addition of a dedicated attribute: <script defer> (implied by <script type="module">). In fact, there’s also another, similar attribute: async — except this one doesn’t guarantee order of execution; see Asynchronous vs Deferred JavaScript for details.[4] However, these attributes don’t work for inline scripts (of which, unfortunately, there were a few in the project at hand), so those would likely execute before the deferred external scripts they depend on become available.

Now, you might argue that HTTP/2 makes all of this a non-issue because it reduces protocol overhead — but in fact, even HTTP/2 is still prone to the laws of physics:

As described above, <script> tags are processed sequentially — which means that the browser doesn’t know it should retrieve bar.js until after foo.js has been fully loaded. Thus it actually has to wait before even requesting that file from the server:

|
| |-- → foo.js --|
|                |-- ← foo.js --|
|                               |-- → bar.js --|
|                                              |-- ← bar.js --|
|
+---------------------------------------------------------------> t

→ request
← response
Depending on connectivity, that latency can be significant.

However, if we were using defer, those <script> tags would be non-blocking, which means the browser could request both files simultaneously:

|
| |-- → foo.js --|
|                |-- ← foo.js --|
| |-- → bar.js --|
|                |-- ← bar.js --|
|
+---------------------------------------------------------------> t

→ request
← response
This is why concatenation can actually be a net negative with HTTP/2, as it prevents parallel downloads:

|
| |-- → foo-bar.js --|
|                    |-- ← foo-bar.js --|
|
+---------------------------------------------------------------> t

→ request
← response
Network protocols aside, it’s generally good practice to relegate script tags to the bottom in order to avoid unnecessarily blocking static HTML content. In the example above, even if the entire HTML document has already been downloaded, if foo.js and/or bar.js are slow to load (for which there are myriad potential reasons), they’d prevent the content below from being displayed.





