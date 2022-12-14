# Redbot Help Pages

This plugin creates a help section in the chatbot answering to a simple command `/help`.

Edit the help pages in **Mission Control** control panel (`http://your-bot/mc`) and connect the sub-flow *"Help pages"* to the receiver node in a pass through configuration:

![](https://dashboard.red-bot.io/assets/daa5d5f0-e654-4294-a816-9a8c8cef0077)

The first output goes to the sender node, and it's triggered when the user sends a text with content `/help`, in that case a list of available help pages is presented to the user with inline buttons.

Easily set up the `/help` command with the **Telegram menu** node or the **Messenger menu** node.

The second output goes to the rest of the bot, if the user is not engaging with the *"Help pages"* sub-flow, it's acting transparently.

> This is a [RedBot](https://red-bot.io/) plugin, an additional functionality for chatbots created with **RedBot**, [click here](https://red-bot.io/) to get started then go to the _Plugins_ sections to install this extension
