# APCSA-FINAL-PROJECT

OVERVIEW
The purpose of "Cookie AI" is to help growing adolescents learn how to cook better and have a permanent easy assistance for generating recipes and guiding them through cooking. The other features, such as the minigames is such that the user is still self-dependent despite using an AI generator for recipes. By knowing small but basic information about cooking and baking themselves off the top of their head via practice, their minds remain sharp despite the realize on AI for finding and generating recipes.

HOW TO RUN IT LOCALLY
To get access to the website, find the app.py file under the folder main_code. When this file is ran, a pop will ask the user to open an website in a separate tab, and by clicking yes, the user gets access to the main website, and are met with three options. The first option is the AI Chatbot, which serves as a helper to guide and answer any questions regarding cooking. This feature allows the user to explore different recipes and cultures and get straight, quick answers to any questions they may have. The second option is a minigame that asks basic but common questions about ingredients and meals used often. The game works as a quiz-like system, for it asks the teacher to answer questions and only tells the user if they are correct or incorrect, offering multiple chances for the user to get the question right. Following this is a recipe generator, which takes in account for the ingredients the user has or wants to use, and produces a reasonable but yummy recipe for the user to follow.

Research Paper: Rubya Anamika, Rafa Daniella

Citation:
Lavelle, F., Bucher, T., Dean, M., Brown, H. M., Rollo, M. E., Collins, C. E., & McGowan, L. (2018). Diet quality is more strongly related to cooking skills rather than cooking frequency among adults. International Journal of Behavioral Nutrition and Physical Activity, 15(1).
(https://pmc.ncbi.nlm.nih.gov/articles/PMC6086120/)

SUMMARY

The Research Study shows that over the past few years, home cooking has been declining and there is a rise of concerns in how cooking skills might be lost in future generations. Given that most young adults reach for restaurants or pre-cooked grocery brought items, interventions and classes were still designed to develop cooking skills within children and adults. However, most of these only led to short term benefits. On the other hand, it is also evident that young adults and children that participate in cooking early on have better nutrition indicators later in life, which provides various health benefits.

MAIN PROBLEM IDENTIFIED

Cooking skills are declining among children and young adults, and many existing interventions only provide temporary improvements.

A PROMPT DESIGN

From this research, we learn that one of the most important skills (knowing how to make food) has been on the decline. If you are eating food to survive, knowing how to cook, even if it's basic things, is necessary for survival.

As the methods previously used to help did not succeed, we used this research paper to inspire our design prompt: how to help people learn cooking skills in fun and quick ways. This led to the design of a cookbook to store recipes without the fear of losing them, mini-games to help users better understand the purpose behind each ingredient so that creativity extends beyond what's provided by the app, and a personal cooking chatbot to help users anytime they need it, provide simple recipes for yummy meals, and support them in their process of learning how to cook.

AI AGENT QUESTIONS

What we used the AI Agent:

We used the AI Agent to help us build the recipe generator portion. The main prompts we gave the AI Agent included things such as “How do we connect an API to an HTML website?” and after gathering the basic layout and structure, we coded the recipe_generator.html frontend, connecting it to the API using app.py and then utilizing the AI Agent to track flaws within the code, asking “What steps can we take to fix the issues?” By repeating these prompts and providing the error messages we got while testing, we were able to build the recipe generator portion.

What worked well
During the initial stages of developing and interrogating the API into our github, the AI agent helped save us a lot of time by mapping out how to cleanly implement the API in code, as previously we were both unaware of the process that needs to be taken to do this. This saved us a lot of time and allowed us to tackle major problems such as security concerns regarding the API KEY early on.

What didn't work

One of the major mistakes occurred during the creation of the AI Chatbot, in which the AI Agent was unable to successfully connect the API to behave like an AI Chatbot on the website page. Though it behaved like a proper AI chatbot in the terminal of our github, the same did not occur in the AI Chatbot page for our website. We repeated prompts and pointed out the mistakes and errors, however, despite the correction, the connection between app.py and chatbot.html was rather difficult, We were able to successfully link the backend to the frontend through watching YouTube tutorials and asking our peers for help, before using help from the AI to clean up the minimal flaws after.

What you learned about prompting

It is very important to be specific about prompting, as the AI can often make mistakes itself and repeat or ignore certain aspects of the code, given that the main goal of the AI Agent is to produce something that offers a solution to the individual prompt/question asked, not always reinforcing the same goals and information from previous prompts. It is also important to try alternative ways, such as looking up examples and tutorials in addition to relying on the AI and self-knowledge, as the AI itself is designed based on data, and that data is often not aligned with the results needed for the given prompt.

What you would do differently

I would rely more on the AI for when it came to initializing the backend, as that is the area that the both of us struggled the most in compared to the frontend. While we did use help from the AI Agent for finalizing the back-end or developing structures, it is important to note that it’s impossible for AI to be correct for every prompt and every issue that will surface during testing and developing. In the future, we’d use the AI Agent as a tool for laying the foundation, proceeding with personal and outside knowledge and then utilizing the AI for minimal flaws that may not appear during testing— or in some cases, pass specific tests, but not all, and in essence, existing as a running error instead of a major issue or something related to syntax. In other words, we plan on using the AI Agent as a corrector and a way to check our codes.

PARTNER CONTRIBUTIONS

RUBYA ANAMIKA

- Contributed mainly to backend, by making api.py, app.py, and game.js
- Contributed slightly to frontend, by helping with style.css, connecting app.py to files under templates

RAFAEL DANIELLA GABINETE
- Contributed to frontend, by making index.html, chatbot.html, minigames.html & recipe_generator.html

Both euqally contributed in debugging, testing, research, and overall styling. 
 
