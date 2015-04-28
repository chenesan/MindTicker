#MindTicker

It's a simple tool to remind the user to pay attention to their goal/intention in regular time when using browser.

##Why, and Goal

There are a dozen of tools to keep us from distraction when using Internet (Ban the sites you consuming lots of time on, TODO List reminder...). These tools are great, but usually their settings are so complicated that I'm lazy to do them... So I tried to make a small, almost-no-setting tool to do this.

Ideally, The user don't need to set anything, just install and load MindTicker. Then MindTicker should be able to remind them to pay attention to what they really do when the users are distracted. (You might ask HOW to know whether the user need the alert. I think there should exist some regular behavior modes when the user miss in the Internet. If we can collect the data about how the user surf the Internet and find what behaviors are the signs that the user may be distracted, then we get it......Of course so far MindTicker is almost just a timer, there's a long long way from this.)

To put it simply, MindTicker should be:

+Simple(No setting)
+Able to learn the distraction sign of the user

##How to install

You can

(1)just download the MindTicker.crx [file](https://github.com/chenesan/MindTicker/raw/master/MindTicker.crx), then go to "settings"->"Extension" page,and drag the downloaded crx file into the page.

(You can also see the [tutorial](http://www.howtogeek.com/120743/how-to-install-extensions-from-outside-the-chrome-web-store/))

You can also

(2)download the whole directory:
```shell
git clone https://github.com/chenesan/MindTicker
```
then in Chrome, go to "settings"->"Extension"->"Load Unpacked extension..." and choose the downloaded MindTicker directory.

Restart the Chrome, you should see a prompt asking you "Why do you use Internet right now?". That's all!

##Usage

Once you installed it, when you launch Chrome, it will ask you why to use Internet and set the timer. The default timer will alert every 10 mins. To change it you can click the icon of MindTicker and the button "TimerSetting".

Once the timer alert, it will ask you what's your intention right now again. If your answer is different from previous one, It will remind you that your goal has changed. If you're distracted, you can click "cancel" to turn off the page you're reading.

##TODO

So far(4.28.2015) it's still a prototype. In the short run there are some needs:
1. It's easy to turn off the alert. To do this the user just need to press "enter" twice. We need to let it hard to be neglected.
2. A better UI make people be more conscious about what they are doing and what's they really want to do.

In the long run I would like to make it more intelligent. We may need some research on what's the typical behavior when people miss in the Internet. Once we get some empirical rules, we can put them into MindTicker.

##License
MIT